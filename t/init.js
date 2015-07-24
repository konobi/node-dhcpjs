var fs = require('fs');

function dat2buf(file) {
  var reg = new RegExp('\s*#.+?$', 'gm');
  var foo_content = fs.readFileSync(file).toString('ascii');
  foo_content = foo_content.replace(reg, '');
  foo_content = foo_content.replace(/\n/gm, '');
  foo_content = foo_content.replace(/\s/gm, '');
  
  return new Buffer(foo_content, 'hex');
}


var tap = require('tap');
tap.plan(1);

var Parser = require("../lib/parser");
var parser = new Parser();

tap.test('initial values', function(t) {
  t.plan(15);

  var obj = parser.parse( dat2buf(__dirname + '/data/request.dat' ) );

  t.equal(obj.op, 1, 'is BOOTP request');
  t.equal(obj.htype, 1, 'is ethernet hw');
  t.equal(obj.hlen, 6, 'is hw length 6 bytes');
  t.equal(obj.hops, 0, 'zero hops');
  t.equal(obj.xid, 2809545835, 'correct transaction id');
  t.equal(obj.secs, 0, 'zero time elapsed');
  t.equal(obj.flags, 0, 'correct flags (unicast)');
  t.equal(obj.ciaddr, '172.16.17.107', 'correct client IP');
  t.equal(obj.yiaddr, undefined, 'current IP is null');
  t.equal(obj.siaddr, undefined, 'current next server IP is null');
  t.equal(obj.giaddr, undefined, 'current gateway IP is null');
  t.equal(obj.chaddr, '00:11:22:33:44:55', 'correct mac address');
  t.equal(obj.sname, '', 'no server name');
  t.equal(obj.file, '', 'no file name');
  t.type(obj.options, 'object', 'options exist');
  
});
