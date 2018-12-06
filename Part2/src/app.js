import {sayHello} from './modules/greeting';
import {sum, product} from './modules/math-functions';
import { person, profession } from './modules/person';

console.log(person);

const p = new person('abdel', 'selouane');
const pro = new profession('programmer');

pro.displayAllNames();

const resultGreeting = document.getElementById('resultGreeting');
const resultSum = document.getElementById('resultSum');
const resultProduct = document.getElementById('resultProduct');

const a = 3;
const b = 7;

resultGreeting.textContent = sayHello('Nice to see you! 🙂');
resultSum.textContent = `The sum of ${a} and ${b} is ${sum(a, b)}. ✨`;
resultProduct.textContent = `The product of ${a} and ${b} is ${product(a, b)}. 🚀`;