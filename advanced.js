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

function example3 () {
    var add = new Function("x", "y", "return (x + y + 2);");
    console.log(add(2,3));
}

function example4(){
    var sum = function () {
        var i, sum=0;
        for(i=0; i< arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
    }
    console.log(sum(4,8,15,16,23,42));
}

function example5(){
    var factorial = function (n){
        if (n <= 0)
            return 1;
        else
            return n * arguments.callee(n-1);
            //return n * arguments.callee(n - 1);
    }
    console.log(factorial(4));
}

function example6(){
    CallLevel(); //Call from another function
}
function CallLevel(){
    if(CallLevel.caller == null)
        console.log("Called by top level");
    else 
        console.log("Called by another function");
}
//CallLevel(); // Call from top level

function example7(){
    function myobj(){
        var number = 1;
    }
    var x = new String("test");

    if(x.constructor == String)
        console.log("Object is a string");
    
    var y = new myobj();
    if(y.constructor == myobj)
       console.log("Object constructor is my obj");
}

function example8(){
    function myFunc(a,b){
        console.log(myFunc.length + "," + arguments.length);
    }

    myFunc(1,2);
    myFunc(1,2,3);
    myFunc(1);
}

function example9(){
    function array_max(){
        var i, max = this[0];
        console.log("max : ",max);
        for (i=1; i<this.length; i++){
            if(max<this[i])
                max = this[i];
        }
        return max;
    }

    Array.prototype.max = array_max;

    var myArray = new Array(7,1,3,11,25,9);
    console.log(myArray.max());
}

function example10 () {
    function callMe (a, b, c){
        console.log("this: " + this + " a: "+ a + " b: " + b + " c: " +c);
        for( i in callMe.arguments)
            console.log(callMe.arguments[i]);
    }
    //callMe(1,2);
    //callMe(3, [4,5]);
     //callMe.apply(3, [4,5]);
     callMe.apply(1, [4,5,2]);
}

function example11() {
    var checkRange = function (value){
        if (typeof value !== 'number')
            return false;
        else
            return value >= this.minimum && value <= this.maximum;
    }

    var range = { minimum:10, maximum:20 };

    //Bind
    var boundCheckRange = checkRange.bind(range);

    var result = boundCheckRange(12);

    console.log(result);
}

function example12 () {
    function callMe (a, b){
        console.log("this: " + this + " a: "+ a + " b: " + b);
        for( i in callMe.arguments)
            console.log(callMe.arguments[i]);
    }
    callMe(1,2);
    callMe.call(1, 4,5);
    //callMe.apply(3, [4,5]);
}

function example13() {
    function CreateRadixTable () {
        var s = "";

        s += "    Hex    Dec    Bin  \n";

        for (x=0; x<16; x++) {
            s +="    ";
            s +=x.toString(16);
            s += "    ";
            if (x<10) s += "  ";
            s += x.toString(10);
            s += "    ";

            s += x.toString(2);
            s += "\n"
        }
        return(s);
    }
    console.log(CreateRadixTable());
}

function example14() {
    function f(){};
    console.log(f.valueOf());
}

function example22() {
    function load (context) {
        var defaults = {    
            name:"dfdfdff",
            address: "address",
            phone: "(123) 445454",
        };

        var context = extend(defaults, context);
        console.log(context);
    }

    function extend () {
        for (var i =1; i< arguments.length; i++)
            for(key in arguments[i])
                if(arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    }

    load({name: 'Junior Sanchez', address:'123 main', age:25});
    load({email:'khfjksjdfk@gmail.com'});
    load({phone:'121212-45454'});
}

function example33 () {
    var add = function (a, b) {
        if ( typeof a != 'number' || typeof b != 'number' ){
            throw {
                name : 'TypeError',
                message : 'Add needs numbers'
            };
        }
        return a + b;
    }

    var try_it = function () {
        try {
            console.log(add(4,5));
            add('seven');
        } catch(e){
            console.log(e.name + ' : ' + e.message);
        }
    }
    try_it();
}