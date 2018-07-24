/** This is a global variable */
var title = "Test Global Variable";

function exampleGlobalVariable () {
    alert(title);
}

function localVariable (title) {
    alert(title);
}

function localVaribaleInFunction () {
    var title = "Local Variable inside the function";
    alert(title);
}

function variablesInBlock (showAlert) {
    if (showAlert) {
        var message = "This operation is allowed";
    }
    alert(message);
}

function deleteVariables () {
    var nonDeleteVariable = "Non deleted variable";
    deletableVariable = "Deletable variable";
    this.deletableVariable2 = "Deletable variable2";

    console.log("Non deleted variable : ", delete nonDeleteVariable);
    console.log("Non deleted variable : ", delete deletableVariable);
    console.log("Non deleted variable 2 : ", delete deletableVariable2);

    console.log("Value : ", nonDeleteVariable);
    console.log("Value : ", deletableVariable); // throws error
    console.log("Value : ", this.deletableVariable2); // throws error
}

function overwriteGlobalVariables () {
    function localVariable () {
        title = "My new local variable";
        return title;
    }
    console.log(localVariable());
}