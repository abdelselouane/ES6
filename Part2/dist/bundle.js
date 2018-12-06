/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/greeting */ \"./src/modules/greeting.js\");\n/* harmony import */ var _modules_math_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/math-functions */ \"./src/modules/math-functions.js\");\n/* harmony import */ var _modules_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/person */ \"./src/modules/person.js\");\n\n\n\n\nconsole.log(_modules_person__WEBPACK_IMPORTED_MODULE_2__[\"person\"]);\n\nconst p = new _modules_person__WEBPACK_IMPORTED_MODULE_2__[\"person\"]('abdel', 'selouane');\nconst pro = new _modules_person__WEBPACK_IMPORTED_MODULE_2__[\"profession\"]('programmer');\n\npro.displayAllNames();\n\nconst resultGreeting = document.getElementById('resultGreeting');\nconst resultSum = document.getElementById('resultSum');\nconst resultProduct = document.getElementById('resultProduct');\n\nconst a = 3;\nconst b = 7;\n\nresultGreeting.textContent = Object(_modules_greeting__WEBPACK_IMPORTED_MODULE_0__[\"sayHello\"])('Nice to see you! 🙂');\nresultSum.textContent = `The sum of ${a} and ${b} is ${Object(_modules_math_functions__WEBPACK_IMPORTED_MODULE_1__[\"sum\"])(a, b)}. ✨`;\nresultProduct.textContent = `The product of ${a} and ${b} is ${Object(_modules_math_functions__WEBPACK_IMPORTED_MODULE_1__[\"product\"])(a, b)}. 🚀`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2F5SGVsbG99IGZyb20gJy4vbW9kdWxlcy9ncmVldGluZyc7XG5pbXBvcnQge3N1bSwgcHJvZHVjdH0gZnJvbSAnLi9tb2R1bGVzL21hdGgtZnVuY3Rpb25zJztcbmltcG9ydCB7IHBlcnNvbiwgcHJvZmVzc2lvbiB9IGZyb20gJy4vbW9kdWxlcy9wZXJzb24nO1xuXG5jb25zb2xlLmxvZyhwZXJzb24pO1xuXG5jb25zdCBwID0gbmV3IHBlcnNvbignYWJkZWwnLCAnc2Vsb3VhbmUnKTtcbmNvbnN0IHBybyA9IG5ldyBwcm9mZXNzaW9uKCdwcm9ncmFtbWVyJyk7XG5cbnByby5kaXNwbGF5QWxsTmFtZXMoKTtcblxuY29uc3QgcmVzdWx0R3JlZXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0R3JlZXRpbmcnKTtcbmNvbnN0IHJlc3VsdFN1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRTdW0nKTtcbmNvbnN0IHJlc3VsdFByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0UHJvZHVjdCcpO1xuXG5jb25zdCBhID0gMztcbmNvbnN0IGIgPSA3O1xuXG5yZXN1bHRHcmVldGluZy50ZXh0Q29udGVudCA9IHNheUhlbGxvKCdOaWNlIHRvIHNlZSB5b3UhIPCfmYInKTtcbnJlc3VsdFN1bS50ZXh0Q29udGVudCA9IGBUaGUgc3VtIG9mICR7YX0gYW5kICR7Yn0gaXMgJHtzdW0oYSwgYil9LiDinKhgO1xucmVzdWx0UHJvZHVjdC50ZXh0Q29udGVudCA9IGBUaGUgcHJvZHVjdCBvZiAke2F9IGFuZCAke2J9IGlzICR7cHJvZHVjdChhLCBiKX0uIPCfmoBgOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/modules/greeting.js":
/*!*********************************!*\
  !*** ./src/modules/greeting.js ***!
  \*********************************/
/*! exports provided: sayHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sayHello\", function() { return sayHello; });\nconst sayHello = (greeting) => {\n    const currentHour = new Date().getHours();\n    let timeGreeting = 'Good morning!';\n\n    if (currentHour >= 12 && currentHour <= 17) {\n        timeGreeting = 'Good afternoon!';\n    } else if (currentHour >= 17) {\n        timeGreeting = 'Good evening!';\n    }\n\n    return `${timeGreeting} ${greeting}`;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9ncmVldGluZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dyZWV0aW5nLmpzPzIwMDciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2F5SGVsbG8gPSAoZ3JlZXRpbmcpID0+IHtcbiAgICBjb25zdCBjdXJyZW50SG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICBsZXQgdGltZUdyZWV0aW5nID0gJ0dvb2QgbW9ybmluZyEnO1xuXG4gICAgaWYgKGN1cnJlbnRIb3VyID49IDEyICYmIGN1cnJlbnRIb3VyIDw9IDE3KSB7XG4gICAgICAgIHRpbWVHcmVldGluZyA9ICdHb29kIGFmdGVybm9vbiEnO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEhvdXIgPj0gMTcpIHtcbiAgICAgICAgdGltZUdyZWV0aW5nID0gJ0dvb2QgZXZlbmluZyEnO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt0aW1lR3JlZXRpbmd9ICR7Z3JlZXRpbmd9YDtcbn1cblxuZXhwb3J0IHtzYXlIZWxsb307Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/greeting.js\n");

/***/ }),

/***/ "./src/modules/math-functions.js":
/*!***************************************!*\
  !*** ./src/modules/math-functions.js ***!
  \***************************************/
/*! exports provided: sum, product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"product\", function() { return product; });\nconst sum = (a, b) => {\n    return a + b;\n};\n\nconst product = (a, b) => {\n    return a * b;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tYXRoLWZ1bmN0aW9ucy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL21hdGgtZnVuY3Rpb25zLmpzPzJlZTgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3VtID0gKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYSArIGI7XG59O1xuXG5jb25zdCBwcm9kdWN0ID0gKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYSAqIGI7XG59O1xuXG5leHBvcnQge3N1bSwgcHJvZHVjdH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/math-functions.js\n");

/***/ }),

/***/ "./src/modules/person.js":
/*!*******************************!*\
  !*** ./src/modules/person.js ***!
  \*******************************/
/*! exports provided: person, profession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"person\", function() { return person; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"profession\", function() { return profession; });\nclass person {\n\n    constructor(first = 'abdel', last = 'selouane'){\n        this.firstname = first;\n        this.lastname = last;\n    }\n\n    displayName(){ console.log(`Hello ${this.firstname} ${this.lastname}`) }\n\n}\n\n\nclass profession extends person {\n    constructor(role = 'Programmer'){\n        super();\n        this.role = role\n    }\n\n    displayName(){ \n        console.log(`Inheritance func :)`) \n    }\n\n    displayAllNames(){\n        this.displayName();\n        super.displayName();\n    }\n\n}\n\n\n\n\n// class Person {\n  \n//     constructor(name){\n//       console.log('hello');\n//       this.name = name;\n//     }\n    \n    \n//   }\n  \n  \n//   const person = new Person('Max');\n  \n//   console.log(person.name);\n  \n  \n//   class Profession extends Person {\n    \n//     constructor(name, job){\n//       super(name);\n//       this.job = job;\n      \n//     }\n    \n//   }\n  \n//   const profession = new Profession('Abdel', 'programmer');\n  \n//   console.log(profession);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9wZXJzb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wZXJzb24uanM/MDMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBwZXJzb24ge1xuXG4gICAgY29uc3RydWN0b3IoZmlyc3QgPSAnYWJkZWwnLCBsYXN0ID0gJ3NlbG91YW5lJyl7XG4gICAgICAgIHRoaXMuZmlyc3RuYW1lID0gZmlyc3Q7XG4gICAgICAgIHRoaXMubGFzdG5hbWUgPSBsYXN0O1xuICAgIH1cblxuICAgIGRpc3BsYXlOYW1lKCl7IGNvbnNvbGUubG9nKGBIZWxsbyAke3RoaXMuZmlyc3RuYW1lfSAke3RoaXMubGFzdG5hbWV9YCkgfVxuXG59XG5cblxuY2xhc3MgcHJvZmVzc2lvbiBleHRlbmRzIHBlcnNvbiB7XG4gICAgY29uc3RydWN0b3Iocm9sZSA9ICdQcm9ncmFtbWVyJyl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucm9sZSA9IHJvbGVcbiAgICB9XG5cbiAgICBkaXNwbGF5TmFtZSgpeyBcbiAgICAgICAgY29uc29sZS5sb2coYEluaGVyaXRhbmNlIGZ1bmMgOilgKSBcbiAgICB9XG5cbiAgICBkaXNwbGF5QWxsTmFtZXMoKXtcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSgpO1xuICAgICAgICBzdXBlci5kaXNwbGF5TmFtZSgpO1xuICAgIH1cblxufVxuXG5leHBvcnQge3BlcnNvbiwgcHJvZmVzc2lvbn07XG5cblxuLy8gY2xhc3MgUGVyc29uIHtcbiAgXG4vLyAgICAgY29uc3RydWN0b3IobmFtZSl7XG4vLyAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbi8vICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4vLyAgICAgfVxuICAgIFxuICAgIFxuLy8gICB9XG4gIFxuICBcbi8vICAgY29uc3QgcGVyc29uID0gbmV3IFBlcnNvbignTWF4Jyk7XG4gIFxuLy8gICBjb25zb2xlLmxvZyhwZXJzb24ubmFtZSk7XG4gIFxuICBcbi8vICAgY2xhc3MgUHJvZmVzc2lvbiBleHRlbmRzIFBlcnNvbiB7XG4gICAgXG4vLyAgICAgY29uc3RydWN0b3IobmFtZSwgam9iKXtcbi8vICAgICAgIHN1cGVyKG5hbWUpO1xuLy8gICAgICAgdGhpcy5qb2IgPSBqb2I7XG4gICAgICBcbi8vICAgICB9XG4gICAgXG4vLyAgIH1cbiAgXG4vLyAgIGNvbnN0IHByb2Zlc3Npb24gPSBuZXcgUHJvZmVzc2lvbignQWJkZWwnLCAncHJvZ3JhbW1lcicpO1xuICBcbi8vICAgY29uc29sZS5sb2cocHJvZmVzc2lvbik7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/person.js\n");

/***/ })

/******/ });