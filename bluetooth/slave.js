var tessel = require('tessel');
var blePort = tessel.port['A'];
var bleDriver = require('ble-ble113a');

// Connect the BLE and start advertising
var bluetooth = bleDriver.user(blePort, function(err) {
  ble.startAdvertising();
});

// Once connected with a master
ble.on('connect', function(master) {
  ble.writeLocalValue(0,'hello!');
  ble.writeLocalValue(1,'sup!');
});