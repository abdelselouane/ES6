
/*** ES5 Problems **
 * 1. Arrays loop through or refer by index
 * 2. refer to the object section to trim/slice out
*/
let nums = [1,2,3,4,5,6];
console.log(nums[0]);
console.log(nums[1]);

const obj = {
    name: {
        firstName: 'MAX',
        lastName: 'Robinson'
    },
    dob: {
        day: 1,
        month: 3,
        year: 1990
    }
};
console.log(obj.name);
console.log(obj.dob);

/*** ES6 **
 * Easy access to the array element by order
 * Clean Syntax
 * 
 *** What would happen? ***
 * to the original array?
 * if i descruct a non existing element?
 * if i use a spread operator for the rest of the array?
 * if i use a default values?
 * 
 *** Bonus ***
 * Use a function in the object & rename it
*/

let nums = [1,2,3,4,5,6];
let [a, b] = nums;
console.log(a);
console.log(b);

const obj = {
  name: {
    firstName: 'MAX',
    lastName: 'Robinson'
  },
  dob: {
    day: 1,
    month: 3,
    year: 1990
  }
};

const {name, dob} = obj;

console.log(name);
console.log(dob);