Blockly.JavaScript["si_begin"] = function (block) {
  var text_addr = block.getFieldValue('ADDR');
  var text_sda = block.getFieldValue('SDA');
  var text_scl = block.getFieldValue('SCL');
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
`
#EXTINC
#include "Adafruit_Si7021.h" 
#END

#VARIABLE
Adafruit_Si7021 ${variable_instance} = Adafruit_Si7021();
#END

if (!${variable_instance}.begin()) {
  Serial.println("Could not find a valid Si7021 sensor, check wiring!");
  while (1);
}

\n
`;
  return code;
};



Blockly.JavaScript['si_get_temperature'] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code=`${variable_instance}.readTemperature()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['si_get_humidity'] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code=`${variable_instance}.readHumidity()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
