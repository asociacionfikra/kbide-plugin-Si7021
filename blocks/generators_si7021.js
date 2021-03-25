Blockly.JavaScript["si_begin"] = function (block) {
  var text_addr = block.getFieldValue('ADDR');
  var text_sda = block.getFieldValue('SDA');
  var text_scl = block.getFieldValue('SCL');
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
`
#EXTINC
#include "SparkFun_Si7021_Breakout_Library.h"
#include <Wire.h>
#END

#VARIABLE
Weather ${variable_instance};
#END

${variable_instance}.begin();

\n
`;
  return code;
};



Blockly.JavaScript['si_get_temperature'] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code=`${variable_instance}.getTemp()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['si_get_humidity'] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code=`${variable_instance}.getRH()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
