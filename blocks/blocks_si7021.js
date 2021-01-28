Blockly.Blocks["si_begin"] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("si1", null, ["Plugin.Si7021"], ["Plugin.Si7021"]), "instance")
          .appendField("begin address")
          .appendField(new Blockly.FieldTextInput("0x40"), "ADDR")
          .appendField("(SDA")
          .appendField(new Blockly.FieldTextInput("21"), "SDA")
          .appendField(", SCL")
          .appendField(new Blockly.FieldTextInput("22"), "SCL")
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


Blockly.Blocks['si_get_temperature'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("si1", null, ["Plugin.Si7021"], ["Plugin.Si7021"]), "instance")
          .appendField("Read Temperature");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


Blockly.Blocks['si_get_humidity'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("si1", null, ["Plugin.Si7021"], ["Plugin.Si7021"]), "instance")
          .appendField("Read Humidity");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

