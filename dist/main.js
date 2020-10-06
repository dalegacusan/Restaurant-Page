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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction insertContent(mainContainer){\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"body\");\r\n\r\n    const semanticSection1 = document.createElement(\"section\");\r\n    const semanticHeader1 = document.createElement(\"header\");\r\n    const headerContainer = document.createElement(\"div\");\r\n        headerContainer.classList.add(\"header\");\r\n    const p1 = document.createElement(\"p\");\r\n        p1.textContent = \"Welcome to my Restaurant!\";\r\n\r\n            headerContainer.appendChild(p1);\r\n            semanticHeader1.appendChild(headerContainer);\r\n            semanticSection1.appendChild(semanticHeader1);\r\n\r\n    const semanticSection2 = document.createElement(\"section\");\r\n    const contentContainer = document.createElement(\"div\");\r\n        contentContainer.classList.add(\"contentcontainer\");\r\n    const p2 = document.createElement(\"p\");\r\n        p2.textContent = \"What's new in our menu?\";\r\n\r\n            contentContainer.appendChild(p2);\r\n            semanticSection2.appendChild(contentContainer);\r\n\r\n    const semanticArticle = document.createElement(\"article\");\r\n    const imagesContainer = document.createElement(\"div\");\r\n        imagesContainer.classList.add(\"imagesContainer\");\r\n    const images = [\r\n        {\r\n            link: \"https://www.revigorando.com.br/wp-content/uploads/ZucchiniPasta-InSeason-Walmart-Fr-Mai2015-778.jpg\",\r\n            alt: \"Pesto\"\r\n        },\r\n        {\r\n            link: \"https://wallpapercave.com/wp/wp3030132.jpg\",\r\n            alt: \"Lasagna\"\r\n        },\r\n        {\r\n            link: \"https://uncletnuc.files.wordpress.com/2016/04/pepperoni-pizza-wallpaper-1.jpg?w=640\",\r\n            alt: \"Pizza\"\r\n        }\r\n    ];\r\n\r\n        for(let item of images){\r\n            const imagesItem = document.createElement(\"img\");\r\n            imagesItem.setAttribute(\"src\", item.link);\r\n            imagesItem.setAttribute(\"alt\", item.alt);\r\n            imagesContainer.appendChild(imagesItem);\r\n\r\n        }\r\n\r\n            semanticSection2.appendChild(semanticArticle);\r\n\r\n            container.appendChild(semanticSection1);\r\n            container.appendChild(semanticSection2);\r\n            semanticArticle.appendChild(imagesContainer);\r\n            mainContainer.appendChild(container);\r\n    \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertContent);\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction insertHeader(mainContainer){\r\n    const semanticHeader = document.createElement(\"header\");\r\n    \r\n    const navbarContainer = document.createElement(\"div\");\r\n    navbarContainer.classList.add(\"navbar\");\r\n\r\n    const semanticNav = document.createElement(\"nav\");\r\n\r\n    const restaurantName = document.createElement(\"span\");\r\n    restaurantName.textContent = \"Dale's Restaurant\";\r\n\r\n    const navbarItemsContainer = document.createElement(\"div\");\r\n    navbarItemsContainer.classList.add(\"navbarItems\");\r\n    const listItems = [\"Home\", \"About\", \"Contact\"];\r\n\r\n    for (let item of listItems){\r\n        const navItem =  document.createElement(\"a\");\r\n        navItem.setAttribute(\"href\", \"/\");\r\n        navItem.textContent = item;\r\n        navbarItemsContainer.appendChild(navItem);\r\n    }\r\n\r\n    semanticNav.appendChild(restaurantName);\r\n    semanticNav.appendChild(navbarItemsContainer);\r\n    navbarContainer.appendChild(semanticNav);\r\n    semanticHeader.appendChild(navbarContainer);\r\n    \r\n    mainContainer.appendChild(semanticHeader);\r\n    \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertHeader);\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nconst mainContainer = document.querySelector(\".mainContainer\");\r\n\r\nObject(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mainContainer)\r\nObject(_content__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mainContainer);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });