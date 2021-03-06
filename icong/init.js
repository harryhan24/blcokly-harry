
Blockly.inject(document.getElementById('blocklyDiv'),
    {toolbox: document.getElementById('toolbox')});
Blockly.Xml.domToWorkspace(Blockly.mainWorkspace,
    document.getElementById('startBlocks'));

var myInterpreter = null;

function initApi(interpreter, scope) {
    // Add an API function for the alert() block.
    var wrapper = function(text) {
        text = text ? text.toString() : '';
        return interpreter.createPrimitive(alert(text));
    };
    interpreter.setProperty(scope, 'alert',
        interpreter.createNativeFunction(wrapper));

    // Add an API function for the prompt() block.
    var wrapper = function(text) {
        text = text ? text.toString() : '';
        return interpreter.createPrimitive(prompt(text));
    };
    interpreter.setProperty(scope, 'prompt',
        interpreter.createNativeFunction(wrapper));

    // Add an API function for the moveShip() block.
    var wrapper = function(text) {
        text = text ? text.toString() : '';
        return interpreter.createPrimitive(moveShip(text));
    };
    interpreter.setProperty(scope, 'moveShip',
        interpreter.createNativeFunction(wrapper));



    // Add an API function for highlighting blocks.
    var wrapper = function(id) {
        id = id ? id.toString() : '';
        return interpreter.createPrimitive(highlightBlock(id));
    };
    interpreter.setProperty(scope, 'highlightBlock',
        interpreter.createNativeFunction(wrapper));
}

var highlightPause = false;

function highlightBlock(id) {
    Blockly.mainWorkspace.highlightBlock(id);
    highlightPause = true;
}

function parseCode() {
    // Generate JavaScript code and parse it.
    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    Blockly.JavaScript.addReservedWords('highlightBlock');
    var code = Blockly.JavaScript.workspaceToCode();
    myInterpreter = new Interpreter(code, initApi);

    alert('Ready to execute this code:\n\n' + code);
    document.getElementById('stepButton').disabled = '';
    highlightPause = false;
    Blockly.mainWorkspace.traceOn(true);
    Blockly.mainWorkspace.highlightBlock(null);
}

function stepCode() {
    try {
        var ok = myInterpreter.step();
    } finally {
        if (!ok) {
            // Program complete, no more code to execute.
            document.getElementById('stepButton').disabled = 'disabled';
            return;
        }
    }
    if (highlightPause) {
        // A block has been highlighted.  Pause execution here.
        highlightPause = false;
    } else {
        // Keep executing until a highlight statement is reached.
        stepCode();
    }
}