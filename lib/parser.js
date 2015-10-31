// Copyright (c) 2011 Andrew Paprocki

var assert = require('assert');
var options = require('./options');

function Packet (data, opts) {
  var self = this;

  self.__options = {};
  self.options = {};

  Object.getOwnPropertyNames(data).forEach(function(val){
    self[val] = data[val];
  });

  return self;
}

Packet.prototype.serialize = function () {
  var self = this;
};

Packet.prototype.add_option = function (number, data) {
  var self = this;

  var opts = self.__options;
  if(!(number in opts)){
    opts[number] = [];
  }

  opts[number].push(data);
};


function Parser () {
  var self = this;
  return self;
}

Parser.DHCP_REQUEST = 3;

Parser.prototype.parse = function(msg, opts) {
    var self = this;

    var packet = new Packet({
        op:       msg.readUInt8(0),
        htype:    msg.readUInt8(1),
        hlen:     msg.readUInt8(2),
        hops:     msg.readUInt8(3),
        xid:      msg.readUInt32BE(4),
        secs:     msg.readUInt16BE(8),
        flags:    msg.readUInt16BE(10),
        ciaddr:   readIpRaw(msg, 12),
        yiaddr:   readIpRaw(msg, 16),
        siaddr:   readIpRaw(msg, 20),
        giaddr:   readIpRaw(msg, 24),
        chaddr:   readAddressRaw(msg, 28, msg.readUInt8(2)),
        sname:    trimNulls(msg.toString('ascii', 44, 108)),
        file:     trimNulls(msg.toString('ascii', 108, 236)),
    });

    //var opts = packet.options;
    var offset = 240;
    var code = 255; // XXX - NB: temporary while options are under overhaul

    return packet;
};

function trimNulls(str) {
    var idx = str.indexOf('\u0000');
    return (-1 === idx) ? str : str.substr(0, idx);
}
function readIpRaw(msg, offset) {
    if (0 === msg.readUInt8(offset))
        return undefined;
    return '' +
        msg.readUInt8(offset++) + '.' +
        msg.readUInt8(offset++) + '.' +
        msg.readUInt8(offset++) + '.' +
        msg.readUInt8(offset++);
}
function readAddressRaw(msg, offset, len) {
    var addr = '';
    while (len-- > 0) {
        var b = msg.readUInt8(offset++);
        addr += (b + 0x100).toString(16).substr(-2);
        if (len > 0) {
            addr += ':';
        }
    }
    return addr;
}

module.exports = Parser;
