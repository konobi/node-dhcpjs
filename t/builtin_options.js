var tap = require('tap');
var OPTS = require("../lib/options");
var OPTS = new OPTS(); 

tap.test('subNetMask option handler', function(t) {

  var opt = OPTS.subNetMask;
  t.type(opt, 'object', 'subNetMask option handler is available');
  t.equals(opt.optionNumber, 1, 'subnetmask option number is correct (1)');
  t.equals(opt.optionPriority, 50, 'subnetmask option priority is correct (50)');
  t.equals(opt.optionName, 'subNetMask', 'subnetmask option name is correct (subNetMask)');
  
  var test_obj = {};
  opt.decode(test_obj, new Buffer('FFFFF000', 'hex'));
  t.equals(test_obj.subNetMask, '255.255.240.0', 'subnetmask is decoded correctly');
  
  test_obj = {};
  opt.encode(test_obj, '255.255.240.0');
  t.same(test_obj.subNetMask, new Buffer('FFFFF000', 'hex'), 'subnetmask is encoded correctly');

  test_obj = {};
  opt.decode(test_obj, new Buffer(1));
  t.same(test_obj.subNetMask, undefined, 'subnetmask is decoded correctly when null');

  t.done();
});

tap.test('timeOffset option handler', function(t) {
  
  var opt = OPTS.timeOffset;
  t.type(opt, 'object', 'timeOffset option handler is available');
  t.equals(opt.optionNumber, 2, 'timeOffset option number is correct (2)');
  t.equals(opt.optionPriority, 50, 'timeOffset option priority is correct (50)');
  t.equals(opt.optionName, 'timeOffset', 'timeOffset option name is correct (timeOffset)');
  
  var test_obj = {};
  opt.decode(test_obj, new Buffer('35c5f9d6', 'hex'));
  t.equals(test_obj.timeOffset, 902166998, 'timeOffset is decoded correctly');
  
  test_obj = {};
  opt.encode(test_obj, 902166998);
  t.same(test_obj.timeOffset, new Buffer('35c5f9d6', 'hex'), 'timeOffset is encoded correctly');

  t.done();
});

tap.test('routers option handler', function(t) {
  
  var opt = OPTS.routers;
  t.type(opt, 'object', 'routers option handler is available');
  t.equals(opt.optionNumber, 3, 'routers option number is correct (3)');
  t.equals(opt.optionPriority, 50, 'routers option priority is correct (50)');
  t.equals(opt.optionName, 'routers', 'routers option name is correct (routers)');
  
  var test_obj = {};
  opt.decode(test_obj, new Buffer('c0a80c01', 'hex'));
  t.same(test_obj.routers, ['192.168.12.1'], 'routers is decoded correctly');
  opt.decode(test_obj, new Buffer('c0a80c01c0a80c02', 'hex'));
  t.same(test_obj.routers, ['192.168.12.1', '192.168.12.2'], 'routers is decoded correctly (multiple)');
  
  test_obj = {};
  opt.encode(test_obj, ['192.168.12.1']);
  t.same(test_obj.routers, new Buffer('c0a80c01', 'hex'), 'routers is encoded correctly');
  opt.encode(test_obj, ['192.168.12.1', '192.168.12.2']);
  t.same(test_obj.routers, new Buffer('c0a80c01c0a80c02', 'hex'), 'routers is encoded correctly (multiple)');

  t.done();
});

tap.test('timeServers option handler', function(t) {
  
  var opt = OPTS.timeServers;
  t.type(opt, 'object', 'timeServers option handler is available');
  t.equals(opt.optionNumber, 4, 'timeServers option number is correct (4)');
  t.equals(opt.optionPriority, 50, 'timeServers option priority is correct (50)');
  t.equals(opt.optionName, 'timeServers', 'timeServers option name is correct (timeServers)');
  
  var test_obj = {};
  opt.decode(test_obj, new Buffer('c0a80c01', 'hex'));
  t.same(test_obj.timeServers, ['192.168.12.1'], 'timeServers is decoded correctly');
  opt.decode(test_obj, new Buffer('c0a80c01c0a80c02', 'hex'));
  t.same(test_obj.timeServers, ['192.168.12.1', '192.168.12.2'], 'timeServers is decoded correctly (multiple)');
  
  test_obj = {};
  opt.encode(test_obj, ['192.168.12.1']);
  t.same(test_obj.timeServers, new Buffer('c0a80c01', 'hex'), 'timeServers is encoded correctly');
  opt.encode(test_obj, ['192.168.12.1', '192.168.12.2']);
  t.same(test_obj.timeServers, new Buffer('c0a80c01c0a80c02', 'hex'), 'timeServers is encoded correctly (multiple)');

  t.done();
});

tap.test('nameServers option handler', function(t) {

  var opt = OPTS.nameServers;
  t.type(opt, 'object', 'nameServers option handler is available');
  t.equals(opt.optionNumber, 5, 'nameServers option number is correct (5)');
  t.equals(opt.optionPriority, 50, 'nameServers option priority is correct (50)');
  t.equals(opt.optionName, 'nameServers', 'nameServers option name is correct (nameServers)');
  
  var test_obj = {};
  opt.decode(test_obj, new Buffer('01010101', 'hex'));
  t.same(test_obj.nameServers, ['1.1.1.1'], 'nameServers is decoded correctly');
  
  test_obj = {};
  opt.encode(test_obj, ['2.2.2.1']);
  t.same(test_obj.nameServers, new Buffer('02020201', 'hex'), 'nameServers is encoded correctly');

  opt.decode(test_obj, new Buffer('0101010102020201', 'hex'));
  t.same(test_obj.nameServers, ['1.1.1.1', '2.2.2.1'], 'nameServers is decoded correctly (multiple)');

  opt.encode(test_obj, ['1.1.1.1', '2.2.2.1']);
  t.same(test_obj.nameServers, new Buffer('0101010102020201', 'hex'), 'nameServers is encoded correctly (multiple)');

  test_obj = {};
  opt.decode(test_obj, new Buffer(1));
  t.same(test_obj.nameServers, undefined, 'nameServer is decoded correctly when null');

  t.done();
});

tap.test('domainNameServers option handler', function(t) {
  
  var opt = OPTS.domainNameServers;
  t.type(opt, 'object', 'domainNameServers option handler is available');
  t.equals(opt.optionNumber, 6, 'domainNameServers option number is correct (6)');
  t.equals(opt.optionPriority, 50, 'domainNameServers option priority is correct (50)');
  t.equals(opt.optionName, 'domainNameServers', 'domainNameServers option name is correct (domainNameServers)');
  
  var test_obj = {};
  opt.decode(test_obj, new Buffer('08080808', 'hex'));
  t.same(test_obj.domainNameServers, ['8.8.8.8'], 'domainNameServers is decoded correctly');
  opt.decode(test_obj, new Buffer('0808080808080404', 'hex'));
  t.same(test_obj.domainNameServers, ['8.8.8.8', '8.8.4.4'], 'domainNameServers is decoded correctly (multiple)');
  
  test_obj = {};
  opt.encode(test_obj, ['8.8.8.8']);
  t.same(test_obj.domainNameServers, new Buffer('08080808', 'hex'), 'domainNameServers is encoded correctly');
  opt.encode(test_obj, ['8.8.8.8', '8.8.4.4']);
  t.same(test_obj.domainNameServers, new Buffer('0808080808080404', 'hex'), 'domainNameServers is encoded correctly (multiple)');

  t.done();
});

tap.test('hostName option handler', function(t) {

  var opt = OPTS.hostName;
  t.type(opt, 'object', 'hostName option handler is available');
  t.equals(opt.optionNumber, 12, 'hostName option number is correct (12)');
  t.equals(opt.optionPriority, 50, 'hostName option priority is correct (50)');
  t.equals(opt.optionName, 'hostName', 'hostName option name is correct (hostName)');
  
  var test_obj = {};
  opt.decode(test_obj, new Buffer('foo.bar.example', 'ascii'));
  t.equals(test_obj.hostName, 'foo.bar.example', 'hostName is decoded correctly');
  
  test_obj = {};
  opt.encode(test_obj, 'foo.bar.example');
  t.same(test_obj.hostName, new Buffer('foo.bar.example', 'ascii'), 'hostName is encoded correctly');

  t.done();
});

tap.test('domainName option handler', function(t) {

  var opt = OPTS.domainName;
  t.type(opt, 'object', 'domainName option handler is available');
  t.equals(opt.optionNumber, 15, 'domainName option number is correct (15)');
  t.equals(opt.optionPriority, 50, 'domainName option priority is correct (50)');
  t.equals(opt.optionName, 'domainName', 'domainName option name is correct (domainName)');
  
  var test_obj = {};
  opt.decode(test_obj, new Buffer('bar.example', 'ascii'));
  t.equals(test_obj.domainName, 'bar.example', 'domainName is decoded correctly');
  
  test_obj = {};
  opt.encode(test_obj, 'bar.example');
  t.same(test_obj.domainName, new Buffer('bar.example', 'ascii'), 'domainName is encoded correctly');

  t.done();
});

tap.test('requestedIpAddress option handler', function(t) {

  var opt = OPTS.requestedIpAddress;
  t.type(opt, 'object', 'requestedIpAddress option handler is available');
  t.equals(opt.optionNumber, 50, 'requestedIpAddress option number is correct (50)');
  t.equals(opt.optionPriority, 50, 'requestedIpAddress option priority is correct (50)');
  t.equals(opt.optionName, 'requestedIpAddress', 'requestedIpAddress option name is correct (requestedIpAddress)');

  var test_obj = {};
  opt.decode(test_obj, new Buffer('01020304', 'hex'));
  t.equals(test_obj.requestedIpAddress, '1.2.3.4', 'requestedIpAddress is decoded correctly');

  test_obj = {};
  opt.encode(test_obj, '1.2.3.4');
  t.same(test_obj.requestedIpAddress, new Buffer('01020304', 'hex'), 'requestedIpAddress is encoded correctly');

  t.done();
});

tap.test('dhcpMessageType option handler', function(t) {

  var opt = OPTS.dhcpMessageType;
  t.type(opt, 'object', 'dhcpMessageType option handler is available');
  t.equals(opt.optionNumber, 53, 'dhcpMessageType option number is correct (53)');
  t.equals(opt.optionPriority, 10, 'dhcpMessageType option priority is correct (50)');
  t.equals(opt.optionName, 'dhcpMessageType', 'dhcpMessageType option name is correct (dhcpMessageTypes)');

  var test_obj = {};
  opt.decode(test_obj, new Buffer('01', 'hex'));
  t.equals(test_obj.dhcpMessageType, 1, 'dhcpMessageType is decoded correctly');

  test_obj = {};
  opt.encode(test_obj, '4');
  t.same(test_obj.dhcpMessageType, new Buffer('04', 'hex'), 'dhcpMessageType is encoded correctly');

  t.done();
});

tap.test('pad and end option handlers are trivial', function(t) {
  var opt = OPTS.padOption;
  t.type(opt, 'object', 'pad option handler is available');
  t.equals(opt.optionNumber, 0, 'pad option number is correct (0)');
  t.equals(opt.optionPriority, 5, 'pad option priority is correct (5)');
  t.equals(opt.optionName, 'pad', 'pad option name is correct (pad)');

  t.type(opt.encode, undefined, 'no encode function');
  t.type(opt.decode, undefined, 'no decode function');


  opt = OPTS.endOption;
  t.type(opt, 'object', 'end option handler is available');
  t.equals(opt.optionNumber, 255, 'end option number is correct (255)');
  t.equals(opt.optionPriority, 90, 'end option priority is correct (90)');
  t.equals(opt.optionName, 'end', 'end option name is correct (end)');

  t.type(opt.encode, undefined, 'no encode function');
  t.type(opt.decode, undefined, 'no decode function');

  t.done();
});

tap.test('optionOverload option handler', function(t) {
  var opt = OPTS.optionOverload;

  t.type(opt, 'object', 'optionOverload option handler is available');
  t.equals(opt.optionNumber, 52, 'optionOverload option number is correct (52)');
  t.equals(opt.optionPriority, 50, 'optionOverload option priority is correct (50)');
  t.equals(opt.optionName, 'optionOverload', 'optionOverload option name is correct (optionOverload)');

  var test_obj = {};
  opt.decode(test_obj, new Buffer('00', 'hex'));
  t.equals(test_obj.optionOverload, 0, 'optionOverload is decoded correctly');

  test_obj = {};
  opt.encode(test_obj, 2);
  t.same(test_obj.optionOverload, new Buffer('02', 'hex'), 'optionOverload is encoded correctly');

  t.done();
});


