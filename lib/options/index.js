function readIpRaw(msg, offset) {
    if (0 === msg.readUInt8(offset))
        return undefined;
    return '' +
        msg.readUInt8(offset++) + '.' +
        msg.readUInt8(offset++) + '.' +
        msg.readUInt8(offset++) + '.' +
        msg.readUInt8(offset++);
}

module.exports = {
  // subnetMask - RFC1497
  subNetMask: {
    optionNumber: 1,
    optionName: 'subNetMask',
    optionPriority: 50,
    encode: function(obj, val) {
      var octets = val.split('\.');
      obj.subNetMask = new Buffer(octets);
    },
    decode: function(obj, buf) {
      obj.subNetMask = readIpRaw(buf, 0);
    }

  },

  // timeOffset - RFC1497
  timeOffset: {
    optionNumber: 2,
    optionName: 'timeOffset',
    optionPriority: 50,
    encode: function(obj, val) {
      var buf = new Buffer(4);
      buf.writeUInt32BE(val);
      obj.timeOffset = buf;
    },
    decode: function(obj, buf) {
      obj.timeOffset = buf.readUInt32BE(0);
    }
  },

  // routers - RFC1497
  routers: {
    optionNumber: 3,
    optionName: 'routers',
    optionPriority: 50,
    encode: function(obj, val) {
      var bytes = [];
      var i = 0;
      for(i; i < val.length; i++) {
        var octets = val[i].split('\.');
        Array.prototype.push.apply(bytes, octets);
      }
      obj.routers = new Buffer(bytes);
    },
    decode: function(obj, buf) {
      var len = buf.length;
      obj.routers = [];
      var offset = 0;
      while (len > 0) {
        obj.routers.push(readIpRaw(buf, offset));
        offset += 4;
        len -= 4;
      }
    }
  },

  // timeServers - RFC1497
  timeServers: {
    optionNumber: 4,
    optionName: 'timeServers',
    optionPriority: 50,
    encode: function(obj, val) {
      var bytes = [];
      var i = 0;
      for(i; i < val.length; i++) {
        var octets = val[i].split('\.');
        Array.prototype.push.apply(bytes, octets);
      }
      obj.timeServers = new Buffer(bytes);
    },
    decode: function(obj, buf) {
      var len = buf.length;
      obj.timeServers = [];
      var offset = 0;
      while (len > 0) {
        obj.timeServers.push(readIpRaw(buf, offset));
        offset += 4;
        len -= 4;
      }
    }
  },

  // nameServer - RFC1497
  // XXX Option no. 5

  // domainNameServers - RFC1497
  domainNameServers: {
    optionNumber: 6,
    optionName: 'domainNameServers',
    optionPriority: 50,
    encode: function (obj, val) {
      var bytes = [];
      var i = 0;
      for(i; i < val.length; i++) {
        var octets = val[i].split('\.');
        Array.prototype.push.apply(bytes, octets);
      }
      obj.domainNameServers = new Buffer(bytes);
    },
    decode: function (obj, buf) {
      var len = buf.length;
      obj.domainNameServers = [];
      var offset = 0;
      while (len > 0) {
        obj.domainNameServers.push(readIpRaw(buf, offset));
        offset += 4;
        len -= 4;
      }
    }
  },

  // logServer - RFC1497
  // XXX Option no. 7

  // cookieServer - RFC1497
  // XXX Option no. 8

  // lprServer - RFC1497
  // XXX Option no. 9

  // impressServer - RFC1497
  // XXX Option no. 10

  // rlpServer - RFC1497
  // XXX Option no. 11

  // hostName - RFC1497
  hostName: {
    optionNumber: 12,
    optionName: 'hostName',
    optionPriority: 50,
    encode: function (obj, val) {
      obj.hostName = new Buffer(val, 'ascii');
    },
    decode: function (obj, buf) {
      obj.hostName = buf.toString('ascii');
    }
  },

  // bootFileSize - RFC1497
  // XXX Option no. 13

  // meritDumpFile - RFC1497
  // XXX Option no. 14

  // domainName - RFC1497
  domainName: {
    optionNumber: 15,
    optionName: 'domainName',
    optionPriority: 50,
    encode: function (obj, val) {
      obj.domainName = new Buffer(val, 'ascii');
    },
    decode: function (obj, buf) {
      obj.domainName = buf.toString('ascii');
    }
  },

  // swapServer - RFC1497
  // XXX Option no. 16

  // rootPath - RFC1497
  // XXX Option no. 17

  // extensionsPath - RFC1497
  // XXX Option no. 18


  // ipForwarding - RFC1533
  // XXX Option no. 19
  
  // nonLocalSourceRouting - RFC1533
  // XXX Option no. 20

  // policyFilter - RFC1533
  // XXX Option no. 21

  // maxDatagramReassemblySize - RFC1533
  // XXX Option no. 22

  // defaultIpTtl - RFC1533
  // XXX Option no. 23

  // pathMtuAgingTimeout - RFC1533
  // XXX Option no. 24

  // pathMtuPlateauTable - RFC1533
  // XXX Option no. 25

  // interfaceMtu - RFC1533
  // XXX Option no. 26

  // allSubnetsLocal - RFC1533
  // XXX Option no. 27

  // broadcastAddress - RFC1533
  // XXX Option no. 28

  // performMaskDiscovery - RFC1533
  // XXX Option no. 29
  
  // maskSupplier - RFC1533
  // XXX Option no. 30

  // performRouterDiscovery - RFC1533
  // XXX Option no. 31

  // routerSolicitationAddress - RFC1533
  // XXX Option no. 32
 
  // staticRoute - RFC1533
  // XXX Option no. 33
 
  // trailerEncapsulation - RFC1533
  // XXX Option no. 34

  // arpCacheTimeout - RFC1533
  // XXX Option no. 35

  // ethernetEncapsulation - RFC1533
  // XXX Option no. 36

  // tcpDefaultTtl - RFC1533
  // XXX Option no. 37

  // tcpKeepaliveInterval - RFC1533
  // XXX Option no. 38

  // tcpKeepaliveGarbage - RFC1533
  // XXX Option no. 39

  // nisDomain - RFC1533
  // XXX Option no. 40
  
  // nisServers - RFC1533
  // XXX Option no. 41

  // ntpServers - RFC1533
  // XXX Option no. 42

  // vendorSpecificInfo - RFC1533
  // XXX Option no. 43

  // NetBIOS over TCP/IP Name Server - RFC1533
  // XXX Option no. 44

  // NetBIOS over TCP/IP Datagram Distribution Server - RFC1533
  // XXX Option no. 45

  // NetBIOS over TCP/IP Node Type - RFC1533
  // XXX Option no. 46

  // NetBIOS over TCP/IP Scope - RFC1533
  // XXX Option no. 47

  // X Window System Font Server - RFC1533
  // XXX Option no. 48

  // X Window System Display Manager - RFC1533
  // XXX Option no. 49

  // requestedIpAddress - RFC1533, RFC2132
  requestedIpAddress: {
    optionNumber: 50,
    optionName: 'requestedIpAddress',
    optionPriority: 50,
    encode: function (obj, val) {
      var octets = val.split('\.');
      obj.requestedIpAddress = new Buffer(octets);
    },
    decode: function (obj, buf) {
      obj.requestedIpAddress = readIpRaw(buf, 0);
    }
  },

  // IP Address Lease Time - RFC1533
  // XXX Option no. 51

  // optionOverload - RFC2132
  optionOverload: {
    optionNumber: 52,
    optionName: 'optionOverload',
    optionPriority: 50,
    encode: function (obj, val) {
      var buf = new Buffer(1);
      buf.writeUInt8(val);
      obj.optionOverload = buf;
    },
    decode: function (obj, buf) {
      obj.optionOverload = buf.readUInt8();
    }
  },

  // dhcpMessageType - RFC1533, RFC2132
  dhcpMessageType: {
    optionNumber: 53,
    optionName: 'dhcpMessageType',
    optionPriority: 10,
    encode: function (obj, val) {
      var buf = new Buffer(1);
      buf.writeUInt8(val);
      obj.dhcpMessageType = buf;
    },
    decode: function (obj, buf) {
      obj.dhcpMessageType = buf.readUInt8();
    }
  },
  
  // Server Identifier - RFC1533
  // XXX Option no. 54

  // Parameter Request List - RFC1533
  // XXX Option no. 55

  // Message - RFC1533
  // XXX Option no. 56

  // Maximum DHCP Message Size - RFC1533
  // XXX Option no. 57

  // Renewal (T1) Time Value - RFC1533
  // XXX Option no. 58

  // Rebinding (T2) Time Value - RFC1533
  // XXX Option no. 59

  // Class-identifier - RFC1533
  // XXX Option no. 60

  // Client-identifier - RFC1533
  // XXX Option no. 61

  padOption: {
    optionNumber: 0,
    optionName: 'pad',
    optionPriority: 5
  },

  endOption: {
    optionNumber: 255,
    optionName: 'end',
    optionPriority: 90
  }
  // 0   - Pad option
  // 255 - End option
  // 1   - subnetmask
  // 2   - timeOffset (FROM UTC)
  // 3   - routers - must be modulo 4 octets, minimum of one
  // 4   - timeservers
  // 5   - nameServers
  // 6   - domainNameServers
  // 7   - logServers
  // 8   - cookieServers
  // 9   - lprServers
  // 10  - impressServers
  // 11  - resourceLocationServers
  // 12  - hostName
  // 13  - bootFileSize
  // 14  - meritDumpFile
  // 15  - domainName
  // 16  - swapServer
  // 17  - rootPath
  // 18  - extensionsPath
  // 19  - ipForwarding BOOLEAN
  // 20  - nonLocalSourceRouting BOOLEAN
  // 21  - policyFilter
  // 22  - maxDatagramReassemblySize
  // 23  - defaultTTL
  // 24  - pathMTUAgingTimeout
  // 25  - pathMTUPlateauTable 
  // 26  - interfaceMTU
  // 27  - allSubnetsAreLocal 
  // 28  - broadcastAddress 
  // 29  - performMaskDiscovery
  // 30  - maskSupplier 
  // 31  - performRouterDiscovery
  // 32  - routerSolicitationAddress
  // 33  - staticRoutes (can't be 0.0.0.0)
  // 34  - trailerEncapsulation
  // 35  - arpCacheTimeout
  // 36  - ethernetEncapsulation
  // 37  - tcpDefaultTtl
  // 38  - tcpKeepaliveInterval
  // 39  - tcpKeepaliveGarbage
  // 40  - networkInformationServiceDomain
  // 41  - networkInformationServers
  // 42  - ntpServers
  // 43  - vendorSpecificInformation
  // 44  - NetBIOS over TCP/IP Name Server
  // 45  - NetBIOS over TCP/IP Datagram Distribution Server
  // 46  - NetBIOS over TCP/IP Node Type
  // 47  - NetBIOS over TCP/IP Scope
  // 48  - X Window System Font Server
  // 49  - X Window System Display Manager
  //
  // 50  - requestedIpAddress
  // 51  - ipAddressLeaseTime
  // 52  - optionOverload (1,2,3) file, sname, both
  // 53  - dhcpMessageType
  // 54  - serverIdentifier
  // 55  - parameterRequestList
  // 56  - message (Error reporting?)
  // 57  - maxDhcpMessageSize
  // 58  - renewalTimeValue
  // 59  - rebindingTimeValue
  // 60  - vendorClassIdentifier
  // 61  - clientIdentifier
  //
  // 64  - Network Information Service+ Domain
  // 65  - Network Information Service+ Servers
  // 66  - tftpServer (if sname has been used)
  // 67  - bootFileName (if file has been used)
  // 68  - Mobile IP Home Agent
  // 69  - Simple Mail Transport Protocol (SMTP) Server
  // 70  - Post Office Protocol (POP3) Server
  // 71  - Network News Transport Protocol (NNTP) Server
  // 72  - Default World Wide Web (WWW) Server
  // 73  - Default Finger Server Option
  // 74  - Default Internet Relay Chat (IRC) Server
  // 75  - StreetTalk Server
  // 76  - StreetTalk Directory Assistance (STDA) Server
  //


};
