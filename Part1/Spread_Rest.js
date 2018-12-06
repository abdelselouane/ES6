
/*** REST OPERATOR *
 * Converts Params to an Array
 * **/
let sumup = (...ar) => {
    //console.log(ar)
    let res = 0;
    for(var i=0; i<ar.length; i++){
        res += ar[i]
    }
    return res
}
console.log(sumup(1,2,3,4,5,6));


/*** EX: SPREAD OPERATOR *
 * Speard out the elements of an array/object
 * **/
let nums = [1,2,3,4,5,6];
//console.log(...nums)
console.log(Math.max(...nums))