


/*** ES6: You Can assign variable to an declared object ***/
let first = "joe"
let last = "doe"

const obj = {
  first,
  last,
  greet() {
      console.log(this.first + ', ' + this.last )
  }
};

console.log(obj)

obj.greet();

/*** Other Syntax ***/
const obj2 = {
    "first": "james",
    last,
    "greet me"() {
        console.log(this.first + ', ' + this.last )
    }
};

obj2["greet me"]();


/*** Define a dynamic properity name ***/

let ageField = "age";

const obj3 = {
    "first": "james",
    [ageField]: 23,
    "greet"() {
        console.log(this.first + ', ' + this.age )
    }
};

obj3["greet"]();
