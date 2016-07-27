/**
 * Created by harryhan on 2016. 7. 27..
 */
Blockly.JavaScript['gofoarward'] = function(block) {
    // let BJS = Blockly.JavaScript;
    var code = "alert('aaa');";
    return code;
};


Blockly.Blocks['gofoarward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("\"go forward!\"");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
    }
};
