
/*** Problems ***/
/*
ES5: 
1. Cant write long text you have to concatenate 
2. You have to avoid line break
3. Difficult to assign varibales
4. Use quotes within the text, "backslash usage";
*/

/*** Solution ***/
/*
ES6:
1. Angled quotes (`, actually called backticks) are used to delimit identifiers
2. ${} sign curly brackets
*/

let program = 'eslint';
let text = "To use " + program.toUpperCase()  + " please install " + program +  " by running \"npm install " + program + "\" in the workspace folder ES6 " +
"or globally using \"npm install -g eslint\". You need to reopen the workspace after installing eslint.";

console.log('My Text ES5: ', text);

let programES6 = 'eslint';
let textES6 = `

To use ${ programES6.toUpperCase() } please install ${ programES6 } by running  "${ "npm install " + programES6 }" in the workspace folder ES6 
or globally using '${ "npm install -g " + programES6}'. You need to reopen the workspace after installing eslint.

`;

console.log('My Text ES6: ', textES6);

