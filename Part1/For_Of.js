
/*** Problems ***/
/*
ES5: 
1. Long & Uglty Syntax
*/

/*** Solution ***/
/*
ES6:
1. Short & Clean Syntax
*/

const nums = [1,2,3,4,5,6];

/*** ES5 ***/
console.log(' \nES5:');
for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
}

/*** ES6 ***/
console.log(' \nES6:');
for(let res of nums){
    console.log(res)
}