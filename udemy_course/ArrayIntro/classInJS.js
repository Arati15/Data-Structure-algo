objects

* Reference Type/ Non primitive type - they refer objects.

var object1 = {value: 10};
var object2 = object1;
var object3 = {value : 10};


* context vs scope 

* instatiation 
class Player { 
    constructure (name, type) {
        this.name = name;
        this.type = type;

    }
    introduce (){
        console.log('Hi I am ${this.name}, I am ${this.tyepe}');
    }
}

------------------------------------

class Wizard extends Player {
    constructor(name, type) {
        super(name, type) // pass to the contsurtor
    }
    play (){
        console.log('Weee I am ${this.type}');

    }
}

const wizard1 = new Wizard('Shelly', 'Healer');

