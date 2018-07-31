function callFunction () {
    function printReport (name) {
        var text = "Hello " + name;
        var alert = function () { console.log(text); };
        return alert;
    }

    func = printReport("junior");
    func();
}

function callFunction2 () {
    function printReport (name) {
        var text = "Hello " + name;
        var alert = function () { console.log(text); };
        return alert;
    }

    func = printReport("junior")();
}

function callFunction3 () {
    function printReport (name) {
        var text = "Hello " + name;
        var alert = function () { console.log(text); };
        text += " to our company";
        return alert;
    }

    func = printReport("junior")();
}

function callFunction4 () {
    function setGlobalVariables() {
        var numRecords = 12;
        return {
            getNumberOfRecords: function () { console.log(numRecords); },
            increaseNumberOfRecords: function () { numRecords++;  },
            setNumber: function (x) { numRecords = x; }
        };
    }

    var globalVariables = setGlobalVariables();
    globalVariables.getNumberOfRecords();
    globalVariables.increaseNumberOfRecords();
    globalVariables.getNumberOfRecords();
    globalVariables.setNumber(50);
    globalVariables.getNumberOfRecords();
}

function example7(){
    var myObject = (function inc (){
        var value =0;
        return {
            increment: function (inc) {
                value += typeof inc === 'number' ? inc : 1;
            },
            getValue: function() {
                return value;
            }
        };
    }());

    myObject.increment(5);
    console.log(myObject.getValue());
}

function example8(){
    var Persona = (function(){
        var count =0;
        function setCount(val){
            count += val;
        }
        return {
            increment: function() {
                setCount(1);
            },
            decrement: function(){
                setCount(-1);
            },
            getValue: function(){
                return count;
            }
        }
    }());

    console.log(Persona.getValue());
    Persona.increment();
    Persona.increment();
    console.log(Persona.getValue());
    Persona.decrement();
    console.log(Persona.getValue());
}
