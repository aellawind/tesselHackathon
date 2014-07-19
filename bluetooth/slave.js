var tessel = require('tessel');
var blePort = tessel.port['A'];
var ble;

// Connect to BLE
ble = require('ble-ble113a').use(blePort, function(err) {
  // start adveristing to any listening masters
  ble.startAdvertising();
});


// Once connected with a master
ble.on('connect', function(master) {
  ble.writeLocalValue(0,'hello!');
  ble.writeLocalValue(1,'sup!');
});
