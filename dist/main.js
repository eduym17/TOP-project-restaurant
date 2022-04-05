/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_initialPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/initialPage */ \"./src/views/initialPage.js\");\n// import FUNCTION from SRC\r\n\r\n// AQUÍ se llama a las funciones de despliegue para las distintas views, llamando primero a la función de despliegue principal\r\n\r\n\r\nstart();\r\n\r\nfunction start() {\r\n  (0,_views_initialPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/views/contact.js":
/*!******************************!*\
  !*** ./src/views/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n  const contact = document.createElement('div');\r\n  contact.classList.add('contact');\r\n  \r\n    const contactHeader = document.createElement('p');\r\n    contactHeader.innerText = 'Get in touch at light speed!';\r\n    contactHeader.classList.add('contactHeader');\r\n\r\n  const contactContent = document.createElement('div');\r\n  contactContent.classList.add('contactContent');\r\n\r\n  const contactChefImg = document.createElement('img');\r\n  contactChefImg.classList.add('contactChefImg');\r\n  contactChefImg.src = '../src/assets/images/chefHome.png';\r\n  \r\n  const contactData = document.createElement('div');\r\n  contactData.classList.add('contactData');\r\n\r\n  const contactPhone = document.createElement('p');\r\n  contactPhone.innerText = \"📱 123 456 789\";\r\n  contactData.appendChild(contactPhone);\r\n\r\n  const contactAddress = document.createElement('p');\r\n  contactAddress.innerText = \"🌌 Find my in the Milky Way\";\r\n  contactData.appendChild(contactAddress);\r\n\r\n  const contactAddressImg = document.createElement('img')\r\n  contactAddressImg.src = '../src/assets/images/address.png'\r\n  contactAddressImg.classList.add('contactAddressImg')\r\n  contactData.appendChild(contactAddressImg);\r\n\r\n  contactContent.appendChild(contactChefImg)\r\n  contactContent.appendChild(contactData)\r\n\r\n  contact.appendChild(contactHeader);\r\n  contact.appendChild(contactContent);\r\n\r\n  return contact;\r\n}\r\n\r\nfunction loadContact() {\r\n  const main = document.querySelector(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://project-restaurant-page/./src/views/contact.js?");

/***/ }),

/***/ "./src/views/home.js":
/*!***************************!*\
  !*** ./src/views/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\r\n  const home = document.createElement('div');\r\n  home.classList.add('home');\r\n\r\n  const homeHeader = document.createElement('p');\r\n  homeHeader.classList.add('homeHeader');\r\n  homeHeader.innerText = 'Welcome to the best restaurant in the galaxy';\r\n\r\n  const homeContent = document.createElement('div');\r\n  homeContent.classList.add('homeContent');\r\n\r\n  const homeContentMsg = document.createElement('p');\r\n  homeContentMsg.classList.add('homeContentMsg');\r\n  homeContentMsg.innerText = 'This is (by far) the best experience for your palate, meet our chef, he is from another world (literally). His name is Pancho!';\r\n\r\n  const homeImg = document.createElement('img');\r\n  homeImg.classList.add('chefHome');\r\n  homeImg.src = '../src/assets/images/chefHome.png'\r\n\r\n  homeContent.appendChild(homeContentMsg);\r\n  homeContent.appendChild(homeImg);\r\n\r\n  home.appendChild(homeHeader);\r\n  home.appendChild(homeContent);\r\n\r\n  return home;\r\n}\r\n\r\nfunction loadHome() {\r\n  const main = document.querySelector(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://project-restaurant-page/./src/views/home.js?");

/***/ }),

/***/ "./src/views/initialPage.js":
/*!**********************************!*\
  !*** ./src/views/initialPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/views/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/views/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/views/menu.js\");\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement('header')\r\n  header.classList.add('header');\r\n\r\n  const logo = document.createElement('a');\r\n  logo.textContent = 'AsteroiFood';\r\n  logo.classList.add('logoName', 'logoAnchor');\r\n  logo.href = \"https://youtu.be/dQw4w9WgXcQ\"; //change\r\n  logo.target = '_blank'; //remove\r\n  \r\n  header.appendChild(logo);\r\n  header.appendChild(createNav());\r\n  \r\n  return header;\r\n}\r\n\r\nfunction createNav() {\r\n  const navBar = document.createElement('div');\r\n  navBar.classList.add('navBar');\r\n  \r\n  const home = document.createElement('b');\r\n  home.innerText = 'Home';\r\n  home.classList.add('navItem', 'navAnchor');\r\n  home.addEventListener(\"click\", () => {\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  \r\n  const menu = document.createElement('a');\r\n  menu.innerText = 'Menu';\r\n  menu.classList.add('navItem', 'navAnchor');\r\n  menu.addEventListener('click', () => {\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n\r\n  \r\n  const contact = document.createElement('a');\r\n  contact.innerText = 'Contact';\r\n  contact.classList.add('navItem', 'navAnchor');\r\n  contact.addEventListener('click', () => {\r\n    contact.classList.add('active')\r\n    ;(0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n  \r\n  navBar.appendChild(home);\r\n  navBar.appendChild(menu);\r\n  navBar.appendChild(contact);\r\n  \r\n  return navBar;\r\n}\r\n\r\nfunction createMain() {\r\n  const main = document.createElement(\"main\");\r\n  main.classList.add(\"main\");\r\n  return main;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement('footer');\r\n  footer.classList.add('footer')\r\n\r\n  const githubLink = document.createElement('a');\r\n  githubLink.classList.add('githubLink');\r\n  githubLink.href = \"https://github.com/eduym17\";\r\n  githubLink.innerText = `${new Date().getFullYear()} ©Eduardo Yañez`;\r\n  githubLink.target = '_blank';\r\n\r\n  const githubImage = document.createElement('img');\r\n  githubImage.classList.add('githubImage');\r\n  githubImage.src = '../src/assets/icons/GitHub-Mark-Light-32px.png'\r\n\r\n  const asteroidevBrand = document.createElement('img');\r\n  asteroidevBrand.classList.add('brandLogo');\r\n  asteroidevBrand.src = '../src/assets/icons/h-white.png';\r\n\r\n  githubLink.appendChild(githubImage);\r\n\r\n  footer.appendChild(githubLink);\r\n  footer.appendChild(asteroidevBrand);\r\n\r\n  return footer;\r\n}\r\n\r\nfunction loadInitialPage() {\r\n  const content = document.getElementById('content');\r\n\r\n  const header = createHeader();\r\n  content.appendChild(header);\r\n\r\n  const pageContent = createMain('pageContent');\r\n  content.appendChild(pageContent);\r\n\r\n  const footer = createFooter();\r\n  content.appendChild(footer);\r\n\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadInitialPage);\n\n//# sourceURL=webpack://project-restaurant-page/./src/views/initialPage.js?");

/***/ }),

/***/ "./src/views/menu.js":
/*!***************************!*\
  !*** ./src/views/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n  const menu = document.createElement('div');\r\n  menu.classList.add('menu');\r\n\r\n  const menuHeader = document.createElement('p');\r\n  menuHeader.classList.add('menuHeader');\r\n  menuHeader.innerText = 'What do you want to eat today?';\r\n\r\n  const menuHeaderMsg = document.createElement('p');\r\n  menuHeaderMsg.classList.add('menuHeaderMsg');\r\n  menuHeaderMsg.innerText = 'We have plenty of options for you:';\r\n  menuHeader.appendChild(menuHeaderMsg)\r\n\r\n  const menuFoods = document.createElement('div')\r\n  menuFoods.classList.add('menuFoods')\r\n  \r\n  menu.appendChild(menuHeader);\r\n  menu.appendChild(menuFoods);\r\n\r\n  menuFoods.appendChild(createFood(\r\n    \"Burger\",\r\n    \"Bacon, onions, garlic, barbecue sauce, egg, ketchup and more\"\r\n  ));\r\n\r\n  menuFoods.appendChild(createFood(\r\n    \"Chinese\",\r\n    \"Choose among a lot of dishes from the traditional chinese food\"\r\n  ));\r\n\r\n  menuFoods.appendChild(createFood(\r\n    \"Coffee\",\r\n    \"Are you still sleepy? This may be the best option to start the day!\"\r\n  ));\r\n\r\n  menuFoods.appendChild(createFood(\r\n    \"Donnut\",\r\n    \"Homer Simpson we know you are around here\"\r\n  ));\r\n \r\n  menuFoods.appendChild(createFood(\r\n    \"FrenchFries\",\r\n    \"You know you want this...\"\r\n  ));\r\n \r\n  menuFoods.appendChild(createFood(\r\n    \"FriedChicken\",\r\n    \"KFC you could be advertising here, think about it, we are going to be famous\"\r\n  ));\r\n\r\n  menuFoods.appendChild(createFood(\r\n    \"Muffin\",\r\n    \"Nope, it does not contain the M-agic ingredient\"\r\n  ));\r\n\r\n  menuFoods.appendChild(createFood(\r\n    \"Pizza\",\r\n    \"Better than the Krusty Krab one\"\r\n  ));\r\n\r\n  menuFoods.appendChild(createFood(\r\n    \"Sandwich\",\r\n    \"Perfect mix to french fries\"\r\n  ));\r\n\r\n  menuFoods.appendChild(createFood(\r\n    \"Sushi\",\r\n    \"Raw fish, ewww\"\r\n  ));\r\n\r\n  menuFoods.appendChild(createFood(\r\n    \"Taco\",\r\n    \"Viva México, wey!\"\r\n  ));\r\n\r\n  return menu;\r\n}\r\n\r\nfunction createFood(name, description) {\r\n  const menuFood = document.createElement('div');\r\n  menuFood.classList.add('menuFood')\r\n\r\n  const foodName = document.createElement('p');\r\n  foodName.classList.add('foodName');\r\n  foodName.innerText = name;\r\n\r\n  const foodDescription = document.createElement('p');\r\n  foodDescription.classList.add('foodDescription');\r\n  foodDescription.innerText = description;\r\n\r\n  const foodImage = document.createElement('img');\r\n  foodImage.classList.add('foodImage');\r\n  foodImage.src = `../src/assets/images/foods/${name.toLowerCase()}.png`;\r\n\r\n  menuFood.appendChild(foodImage);\r\n  menuFood.appendChild(foodName);\r\n  menuFood.appendChild(foodDescription);\r\n\r\n  return menuFood;\r\n}\r\n\r\nfunction loadMenu() {\r\n  const main = document.querySelector(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://project-restaurant-page/./src/views/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;