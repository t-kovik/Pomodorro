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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./global.scss */ \"./src/global.scss\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Tomato_1 = __webpack_require__(/*! ./shared/Tomato */ \"./src/shared/Tomato/index.ts\");\r\nvar TasksBoard_1 = __webpack_require__(/*! ./shared/TasksBoard */ \"./src/shared/TasksBoard/index.ts\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)());\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(Content_1.Content, null,\r\n                react_1.default.createElement(TasksBoard_1.TasksBoard, null),\r\n                react_1.default.createElement(Tomato_1.Tomato, null)))));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/global.scss?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n        <title>Pomodorro</title>\\n        <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>  \\n    </head>\\n    <body>\\n    <div id=\\\"react_root\\\">\" + content + \"</div>\\n    </body>\\n    </html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = express();\r\napp.use('/static', express.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_scss_1 = __importDefault(__webpack_require__(/*! ./content.scss */ \"./src/shared/Content/content.scss\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_scss_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.scss":
/*!*****************************************!*\
  !*** ./src/shared/Content/content.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--61-H9\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.scss?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Logo_1 = __webpack_require__(/*! ./Logo */ \"./src/shared/Header/Logo/index.ts\");\r\nvar StatButton_1 = __webpack_require__(/*! ./StatButton */ \"./src/shared/Header/StatButton/index.ts\");\r\nvar header_scss_1 = __importDefault(__webpack_require__(/*! ./header.scss */ \"./src/shared/Header/header.scss\"));\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_scss_1.default.header },\r\n        react_1.default.createElement(\"div\", { className: header_scss_1.default.header__container },\r\n            react_1.default.createElement(Logo_1.Logo, null),\r\n            react_1.default.createElement(StatButton_1.StatButton, null))));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/Logo/Logo.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Header/Logo/Logo.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Logo = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar logo_scss_1 = __importDefault(__webpack_require__(/*! ./logo.scss */ \"./src/shared/Header/Logo/logo.scss\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nfunction Logo() {\r\n    return (react_1.default.createElement(\"a\", { href: \"#\", className: logo_scss_1.default.logo },\r\n        react_1.default.createElement(Icon_1.Icon, { name: 'tomato', size: 40, className: logo_scss_1.default.logo__icon }),\r\n        \"pomodoro_box\"));\r\n}\r\nexports.Logo = Logo;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Logo/Logo.tsx?");

/***/ }),

/***/ "./src/shared/Header/Logo/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/Header/Logo/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Logo */ \"./src/shared/Header/Logo/Logo.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Logo/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Logo/logo.scss":
/*!******************************************!*\
  !*** ./src/shared/Header/Logo/logo.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"logo\": \"logo__logo--2pru3\",\n\t\"logo__icon\": \"logo__logo__icon--I8lbA\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/Logo/logo.scss?");

/***/ }),

/***/ "./src/shared/Header/StatButton/StatButton.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Header/StatButton/StatButton.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.StatButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar statbutton_scss_1 = __importDefault(__webpack_require__(/*! ./statbutton.scss */ \"./src/shared/Header/StatButton/statbutton.scss\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nfunction StatButton() {\r\n    return (react_1.default.createElement(\"button\", { className: statbutton_scss_1.default.statbutton },\r\n        react_1.default.createElement(Icon_1.Icon, { name: 'equal', className: statbutton_scss_1.default.statbutton__icon, size: 24 }),\r\n        \"\\u0421\\u0442\\u0430\\u0442\\u0438\\u0441\\u0442\\u0438\\u043A\\u0430\"));\r\n}\r\nexports.StatButton = StatButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/StatButton/StatButton.tsx?");

/***/ }),

/***/ "./src/shared/Header/StatButton/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Header/StatButton/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./StatButton */ \"./src/shared/Header/StatButton/StatButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/StatButton/index.ts?");

/***/ }),

/***/ "./src/shared/Header/StatButton/statbutton.scss":
/*!******************************************************!*\
  !*** ./src/shared/Header/StatButton/statbutton.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"statbutton\": \"statbutton__statbutton--3L3l4\",\n\t\"statbutton__icon\": \"statbutton__statbutton__icon--14hPu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/StatButton/statbutton.scss?");

/***/ }),

/***/ "./src/shared/Header/header.scss":
/*!***************************************!*\
  !*** ./src/shared/Header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--4oGEs\",\n\t\"header__container\": \"header__header__container--2l2Kt\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.scss?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icons_svg_1 = __importDefault(__webpack_require__(/*! ./icons.svg */ \"./src/shared/Icon/icons.svg\"));\r\nfunction Icon(_a) {\r\n    var name = _a.name, color = _a.color, size = _a.size, className = _a.className;\r\n    return (react_1.default.createElement(\"svg\", { className: \"icon icon-\" + name + \" \" + className, fill: color, width: size, height: size },\r\n        react_1.default.createElement(\"use\", { xlinkHref: icons_svg_1.default + \"#icon-\" + name })));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/icons.svg":
/*!***********************************!*\
  !*** ./src/shared/Icon/icons.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CiAgICA8c3ltYm9sIGlkPSJpY29uLXRvbWF0byIgdmlld0JveD0iMCAwIDQwIDQwIj4KICAgICAgICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KICAgICAgICAgICAgPHBhdGggZD0iTTM4LjkxNTEgMjMuMjgzNEMzOC45MTUxIDMzLjcwNTggMzAuNDY2IDQwIDIwLjA0MzcgNDBDOS42MjA5OCA0MCAxLjE3MTg4IDMxLjU1MDkgMS4xNzE4OCAyMS4xMjgyQzEuMTcxODggMTAuNzA1OSA5Ljg4NDk2IDQuMjk4MSAyMC4zMDczIDQuMjk4MUMzMC43MyA0LjI5ODEgMzguOTE1MSAxMi44NjA3IDM4LjkxNTEgMjMuMjgzNFoiCiAgICAgICAgICAgICAgICAgIGZpbGw9IiNEQzNFMjIiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTI4LjIzOCAxMi42MDY2QzI3LjMyMTEgMTEuNjczIDI1LjgzNzcgMTAuODA0OCAyNC43MzMgMTAuNTUxQzI1LjM0MDEgMTAuMDEyNyAyNS40NjIzIDkuOTk0OTQgMjYuMjIyNyA5LjYxODE2QzI4LjE3MTMgOC42NTM2NSAzMS4wNTc2IDguNTY0ODUgMzEuMDU3NiA4LjU2NDg1QzMxLjA1NzYgOC41NjQ4NSAyNy42NTA5IDYuODA0MiAyNS4xNjAxIDYuOTE0NjhDMjQuNTI1OSA2Ljk0MjU3IDIzLjg1NzEgNy4xNjY1OCAyMy4yMTE4IDcuNDg0MDNDMjMuNTc1NyA2Ljk3MDU0IDIzLjkyMDUgNi40NTk5OCAyNC4xNDA5IDYuMDc2NDNDMjQuODE1MiA0LjkwMzY4IDI1LjUyNCAzLjQyNjI3IDI1LjUyNCAzLjQyNjI3QzI1LjUyNCAzLjQyNjI3IDIyLjkxMjIgMy41NjU3MyAyMS43MDA4IDUuMDE1NjVDMjEuMjQwNyA1LjU2NjQ1IDIwLjg5MzQgNi4yNjYyNSAyMC42MzkyIDYuOTIyNzVDMjAuMTg3OCA2LjQwNDE5IDE5LjY4OTYgNS45NDI0MiAxOS4xOTEzIDUuNTgxOTVDMTYuNjk5OSAzLjc3ODk2IDEyLjcxOTIgNC4xNjkwMyAxMi43MTkyIDQuMTY5MDNDMTIuNzE5MiA0LjE2OTAzIDE1LjcyNjMgNS44NzQ4NiAxNy4wNzkzIDcuNTc2NTZDMTcuNjA3NiA4LjI0MTEgMTguMTQzNyA4LjU0ODQyIDE4LjQ2NDIgOS4yOTM1MkMxNy4zNTY0IDkuMDUzNjcgMTQuODU2OSA5LjEzNTY1IDEzLjYzIDkuNTkwNTdDMTAuNDc3MSAxMC43NTk5IDkuMTE4NTIgMTUuNDY0OSA5LjExODUyIDE1LjQ2NDlDOS4xMTg1MiAxNS40NjQ5IDEyLjE5NTIgMTMuMzQ0MyAxNi4zODEzIDExLjg1NjVDMTcuMzAxNyAxMS41Mjk1IDE4LjI3NDggMTEuNDQyOSAxOS4xMjI5IDExLjQ1NzhDMTguNzM3OSAxMi4wNTc1IDE4LjMxNzMgMTIuODM2MyAxNy45OTkgMTMuNzU0NkMxNy4yMjQ3IDE1Ljk5MDQgMTguMjQ3OSAyMS4zMTEzIDE4LjI0NzkgMjEuMzExM0MxOC4yNDc5IDIxLjMxMTMgMjAuNDg5NiAxOC4xNjQ3IDIxLjQwMyAxNS42MTU3QzIxLjg3MTggMTQuMzA3MyAyMS45ODc5IDEyLjk5MzYgMjEuOTkwNCAxMi4wMjQyQzIyLjgyMTcgMTIuMzkzMSAyMy44MDA5IDEyLjkzMTkgMjQuNTMyNiAxMy4zOThDMjguMjc5NCAxNS43ODUyIDMwLjA3MiAyMC4xNDM1IDMwLjA3MiAyMC4xNDM1QzMwLjA3MiAyMC4xNDM1IDMwLjU5NDEgMTUuMDA2IDI4LjIzOCAxMi42MDY2WiIKICAgICAgICAgICAgICAgICAgZmlsbD0iIzg5OTQ0MSIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMjAuNTAwOCAxMC4zMDk0QzIwLjQ4ODkgMTAuMzA5NCAyMC40NzcgMTAuMzA5MSAyMC40NjUxIDEwLjMwODhDMTkuNzI0MiAxMC4yODk2IDE5LjEzOTEgOS42NzM3NiAxOS4xNTcyIDguOTMzNEMxOS4xNTg3IDguODY5MzEgMTkuMjIzNCA0LjM2MTI1IDE2LjcxOTEgMi40MDExMUMxNi4xMzUgMS45NDM5NSAxNi4wMzE4IDEuMDk5ODQgMTYuNDg5IDAuNTE1NDI0QzE2Ljk0NjUgLTAuMDY4NjgzNCAxNy43OTA2IC0wLjE3MTgzMyAxOC4zNzQ3IDAuMjg1NjI2QzIxLjk1NTkgMy4wODgwNiAyMS44NDkxIDguNzYxMjggMjEuODQzIDkuMDAxNDVDMjEuODIzOCA5LjczMDgzIDIxLjIyNjIgMTAuMzA5NCAyMC41MDA4IDEwLjMwOTRaIgogICAgICAgICAgICAgICAgICBmaWxsPSIjQThCNjRGIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxkZWZzPgogICAgICAgICAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiLz4KICAgICAgICAgICAgPC9jbGlwUGF0aD4KICAgICAgICA8L2RlZnM+CiAgICA8L3N5bWJvbD4KICAgIDxzeW1ib2wgaWQ9Imljb24tZXF1YWwiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgICAgPHBhdGggZD0iTTEwIDIwSDE0VjRIMTBWMjBaTTQgMjBIOFYxMkg0VjIwWk0xNiA5VjIwSDIwVjlIMTZaIiBmaWxsPSIjREMzRTIyIi8+CiAgICA8L3N5bWJvbD4KICAgIDxzeW1ib2wgaWQ9Imljb24taGlkZSIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICAgICAgICA8cGF0aCBkPSJNNyAwQzMuMTM2IDAgMCAzLjEzNiAwIDdDMCAxMC44NjQgMy4xMzYgMTQgNyAxNEMxMC44NjQgMTQgMTQgMTAuODY0IDE0IDdDMTQgMy4xMzYgMTAuODY0IDAgNyAwWk03IDEyLjZDMy45MDYgMTIuNiAxLjQgMTAuMDk0IDEuNCA3QzEuNCA1LjcwNSAxLjg0MSA0LjUxNSAyLjU4MyAzLjU3TDEwLjQzIDExLjQxN0M5LjQ4NSAxMi4xNTkgOC4yOTUgMTIuNiA3IDEyLjZaTTExLjQxNyAxMC40M0wzLjU3IDIuNTgzQzQuNTE1IDEuODQxIDUuNzA1IDEuNCA3IDEuNEMxMC4wOTQgMS40IDEyLjYgMy45MDYgMTIuNiA3QzEyLjYgOC4yOTUgMTIuMTU5IDkuNDg1IDExLjQxNyAxMC40M1oiCiAgICAgICAgICAgICAgZmlsbD0iIzk5OTk5OSIvPgogICAgPC9zeW1ib2w+CiAgICA8c3ltYm9sIGlkPSJpY29uLXNoYXJlIiB2aWV3Qm94PSIwIDAgMTIgMTQiPgogICAgICAgIDxwYXRoIGQ9Ik0xMCA5Ljg5NTU4QzkuNDkzMzMgOS44OTU1OCA5LjA0IDEwLjEwNjQgOC42OTMzMyAxMC40MzY3TDMuOTQgNy41MjAwOEMzLjk3MzMzIDcuMzU4NDMgNCA3LjE5Njc5IDQgNy4wMjgxMUM0IDYuODU5NDQgMy45NzMzMyA2LjY5Nzc5IDMuOTQgNi41MzYxNEw4LjY0IDMuNjQ3NTlDOSAzLjk5OSA5LjQ3MzMzIDQuMjE2ODcgMTAgNC4yMTY4N0MxMS4xMDY3IDQuMjE2ODcgMTIgMy4yNzUxIDEyIDIuMTA4NDNDMTIgMC45NDE3NjcgMTEuMTA2NyAwIDEwIDBDOC44OTMzMyAwIDggMC45NDE3NjcgOCAyLjEwODQzQzggMi4yNzcxMSA4LjAyNjY3IDIuNDM4NzUgOC4wNiAyLjYwMDRMMy4zNiA1LjQ4ODk2QzMgNS4xMzc1NSAyLjUyNjY3IDQuOTE5NjggMiA0LjkxOTY4QzAuODkzMzMzIDQuOTE5NjggMCA1Ljg2MTQ1IDAgNy4wMjgxMUMwIDguMTk0NzggMC44OTMzMzMgOS4xMzY1NSAyIDkuMTM2NTVDMi41MjY2NyA5LjEzNjU1IDMgOC45MTg2NyAzLjM2IDguNTY3MjdMOC4xMDY2NyAxMS40OTFDOC4wNzMzMyAxMS42Mzg2IDguMDUzMzMgMTEuNzkzMiA4LjA1MzMzIDExLjk0NzhDOC4wNTMzMyAxMy4wNzkzIDguOTI2NjcgMTQgMTAgMTRDMTEuMDczMyAxNCAxMS45NDY3IDEzLjA3OTMgMTEuOTQ2NyAxMS45NDc4QzExLjk0NjcgMTAuODE2MyAxMS4wNzMzIDkuODk1NTggMTAgOS44OTU1OFoiCiAgICAgICAgICAgICAgZmlsbD0iIzk5OTk5OSIvPgogICAgPC9zeW1ib2w+CiAgICA8c3ltYm9sIGlkPSJpY29uLXdhcm5pbmciPgogICAgICAgIDxwYXRoIGQ9Ik0wIDE0SDE2TDggMEwwIDE0Wk04LjcyNzI3IDExLjc4OTVINy4yNzI3M1YxMC4zMTU4SDguNzI3MjdWMTEuNzg5NVpNOC43MjcyNyA4Ljg0MjFINy4yNzI3M1Y1Ljg5NDc0SDguNzI3MjdWOC44NDIxWiIKICAgICAgICAgICAgICBmaWxsPSIjOTk5OTk5Ii8+CiAgICA8L3N5bWJvbD4KICAgIDxzeW1ib2wgaWQ9Imljb24tdXAiIHZpZXdCb3g9IjAgMCAxOSAxMCI+CiAgICAgICAgPHBhdGggZD0iTTkuNSAwTDAgMTBIMTlMOS41IDBaIiBmaWxsPSIjRDlEOUQ5Ii8+CiAgICA8L3N5bWJvbD4KICAgIDxzeW1ib2wgaWQ9Imljb24tYXZhdGFyIiB2aWV3Qm94PSIwIDAgNTAgNTAiPgogICAgICAgIDxwYXRoIGQ9Ik0yNSAwQzExLjIgMCAwIDExLjIgMCAyNUMwIDM4LjggMTEuMiA1MCAyNSA1MEMzOC44IDUwIDUwIDM4LjggNTAgMjVDNTAgMTEuMiAzOC44IDAgMjUgMFpNMjUgNy41QzI5LjE1IDcuNSAzMi41IDEwLjg1IDMyLjUgMTVDMzIuNSAxOS4xNSAyOS4xNSAyMi41IDI1IDIyLjVDMjAuODUgMjIuNSAxNy41IDE5LjE1IDE3LjUgMTVDMTcuNSAxMC44NSAyMC44NSA3LjUgMjUgNy41Wk0yNSA0M0MxOC43NSA0MyAxMy4yMjUgMzkuOCAxMCAzNC45NUMxMC4wNzUgMjkuOTc1IDIwIDI3LjI1IDI1IDI3LjI1QzI5Ljk3NSAyNy4yNSAzOS45MjUgMjkuOTc1IDQwIDM0Ljk1QzM2Ljc3NSAzOS44IDMxLjI1IDQzIDI1IDQzWiIKICAgICAgICAgICAgICBmaWxsPSIjRDlEOUQ5Ii8+CiAgICA8L3N5bWJvbD4KICAgIDxzeW1ib2wgaWQ9Imljb24tcGx1cyIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgICAgICA8cGF0aCBkPSJNOS43NSA1LjI1SDguMjVWOC4yNUg1LjI1VjkuNzVIOC4yNVYxMi43NUg5Ljc1VjkuNzVIMTIuNzVWOC4yNUg5Ljc1VjUuMjVaTTkgMS41QzQuODY3NSAxLjUgMS41IDQuODY3NSAxLjUgOUMxLjUgMTMuMTMyNSA0Ljg2NzUgMTYuNSA5IDE2LjVDMTMuMTMyNSAxNi41IDE2LjUgMTMuMTMyNSAxNi41IDlDMTYuNSA0Ljg2NzUgMTMuMTMyNSAxLjUgOSAxLjVaTTkgMTVDNS42OTI1IDE1IDMgMTIuMzA3NSAzIDlDMyA1LjY5MjUgNS42OTI1IDMgOSAzQzEyLjMwNzUgMyAxNSA1LjY5MjUgMTUgOUMxNSAxMi4zMDc1IDEyLjMwNzUgMTUgOSAxNVoiCiAgICAgICAgICAgICAgZmlsbD0iI0E4QjY0RiIvPgogICAgPC9zeW1ib2w+CiAgICA8c3ltYm9sIGlkPSJpY29uLW1pbnVzIiB2aWV3Qm94PSIwIDAgMTggMTgiPgogICAgICAgIDxwYXRoIGQ9Ik05IDEuNUM0Ljg2NzUgMS41IDEuNSA0Ljg2NzUgMS41IDlDMS41IDEzLjEzMjUgNC44Njc1IDE2LjUgOSAxNi41QzEzLjEzMjUgMTYuNSAxNi41IDEzLjEzMjUgMTYuNSA5QzE2LjUgNC44Njc1IDEzLjEzMjUgMS41IDkgMS41Wk05IDE1QzUuNjkyNSAxNSAzIDEyLjMwNzUgMyA5QzMgNS42OTI1IDUuNjkyNSAzIDkgM0MxMi4zMDc1IDMgMTUgNS42OTI1IDE1IDlDMTUgMTIuMzA3NSAxMi4zMDc1IDE1IDkgMTVaIgogICAgICAgICAgICAgIGZpbGw9IiNDNEM0QzQiLz4KICAgICAgICA8cGF0aCBkPSJNNS4yNSA4LjI1SDguMjVIOS43NUgxMi43NVY5Ljc1SDkuNzVIOC4yNUg1LjI1VjguMjVaIiBmaWxsPSIjQzRDNEM0Ii8+CiAgICA8L3N5bWJvbD4KICAgIDxzeW1ib2wgaWQ9Imljb24tZWRpdCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgICAgICA8cGF0aCBkPSJNMTAuNTQ1IDYuNzY1TDExLjIzNSA3LjQ1NUw0LjQ0IDE0LjI1SDMuNzVWMTMuNTZMMTAuNTQ1IDYuNzY1Wk0xMy4yNDUgMi4yNUMxMy4wNTc1IDIuMjUgMTIuODYyNSAyLjMyNSAxMi43MiAyLjQ2NzVMMTEuMzQ3NSAzLjg0TDE0LjE2IDYuNjUyNUwxNS41MzI1IDUuMjhDMTUuODI1IDQuOTg3NSAxNS44MjUgNC41MTUgMTUuNTMyNSA0LjIyMjVMMTMuNzc3NSAyLjQ2NzVDMTMuNjI3NSAyLjMxNzUgMTMuNDQgMi4yNSAxMy4yNDUgMi4yNVpNMTAuNTQ1IDQuNjQyNUwyLjI1IDEyLjkzNzVWMTUuNzVINS4wNjI1TDEzLjM1NzUgNy40NTVMMTAuNTQ1IDQuNjQyNVoiCiAgICAgICAgICAgICAgZmlsbD0iI0E4QjY0RiIvPgogICAgPC9zeW1ib2w+CiAgICA8c3ltYm9sIGlkPSJpY29uLXJlbW92ZSIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgICAgICA8cGF0aCBkPSJNMTIgNi43NVYxNC4yNUg2VjYuNzVIMTJaTTEwLjg3NSAyLjI1SDcuMTI1TDYuMzc1IDNIMy43NVY0LjVIMTQuMjVWM0gxMS42MjVMMTAuODc1IDIuMjVaTTEzLjUgNS4yNUg0LjVWMTQuMjVDNC41IDE1LjA3NSA1LjE3NSAxNS43NSA2IDE1Ljc1SDEyQzEyLjgyNSAxNS43NSAxMy41IDE1LjA3NSAxMy41IDE0LjI1VjUuMjVaIgogICAgICAgICAgICAgIGZpbGw9IiNBOEI2NEYiLz4KICAgIDwvc3ltYm9sPgogICAgPHN5bWJvbCBpZD0iaWNvbi1tZW51IiB2aWV3Qm94PSIwIDAgMjYgNiI+CiAgICAgICAgPGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiIGZpbGw9IiNDNEM0QzQiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMyIgY3k9IjMiIHI9IjMiIGZpbGw9IiNDNEM0QzQiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMyIgY3k9IjMiIHI9IjMiIGZpbGw9IiNDNEM0QzQiLz4KICAgIDwvc3ltYm9sPgo8L3N2Zz4=\");\n\n//# sourceURL=webpack:///./src/shared/Icon/icons.svg?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_scss_1 = __importDefault(__webpack_require__(/*! ./layout.scss */ \"./src/shared/Layout/layout.scss\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_scss_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.scss":
/*!***************************************!*\
  !*** ./src/shared/Layout/layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--ZBOll\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.scss?");

/***/ }),

/***/ "./src/shared/TasksBoard/InstructionList/Instruction.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/TasksBoard/InstructionList/Instruction.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.InstructionList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar instructionlist_scss_1 = __importDefault(__webpack_require__(/*! ./instructionlist.scss */ \"./src/shared/TasksBoard/InstructionList/instructionlist.scss\"));\r\nfunction InstructionList() {\r\n    return (react_1.default.createElement(\"div\", { className: instructionlist_scss_1.default.instructionlist },\r\n        react_1.default.createElement(\"h2\", { className: instructionlist_scss_1.default.title }, \"\\u0423\\u0440\\u0430! \\u0422\\u0435\\u043F\\u0435\\u0440\\u044C \\u043C\\u043E\\u0436\\u043D\\u043E \\u043D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0442\\u044C:\"),\r\n        react_1.default.createElement(\"ul\", { className: instructionlist_scss_1.default.list },\r\n            react_1.default.createElement(\"li\", { className: instructionlist_scss_1.default.item }, \"\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u043A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044E \\u0438 \\u043D\\u0430\\u043F\\u0438\\u0448\\u0438\\u0442\\u0435 \\u043D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0442\\u0435\\u043A\\u0443\\u0449\\u0435\\u0439 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0438\"),\r\n            react_1.default.createElement(\"li\", { className: instructionlist_scss_1.default.item }, \"\\u0417\\u0430\\u043F\\u0443\\u0441\\u0442\\u0438\\u0442\\u0435 \\u0442\\u0430\\u0439\\u043C\\u0435\\u0440 (\\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB)\"),\r\n            react_1.default.createElement(\"li\", { className: instructionlist_scss_1.default.item }, \"\\u0420\\u0430\\u0431\\u043E\\u0442\\u0430\\u0439\\u0442\\u0435 \\u043F\\u043E\\u043A\\u0430 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB \\u043D\\u0435 \\u043F\\u0440\\u043E\\u0437\\u0432\\u043E\\u043D\\u0438\\u0442\"),\r\n            react_1.default.createElement(\"li\", { className: instructionlist_scss_1.default.item }, \"\\u0421\\u0434\\u0435\\u043B\\u0430\\u0439\\u0442\\u0435 \\u043A\\u043E\\u0440\\u043E\\u0442\\u043A\\u0438\\u0439 \\u043F\\u0435\\u0440\\u0435\\u0440\\u044B\\u0432 (3-5 \\u043C\\u0438\\u043D\\u0443\\u0442)\"),\r\n            react_1.default.createElement(\"li\", { className: instructionlist_scss_1.default.item }, \"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0430\\u0439\\u0442\\u0435 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0442\\u044C \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB \\u0437\\u0430 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u043E\\u043C\\u00BB, \\u043F\\u043E\\u043A\\u0430 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0430 \\u043D\\u0435 \\u0431\\u0443\\u0434\\u0443\\u0442 \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u0430. \\u041A\\u0430\\u0436\\u0434\\u044B\\u0435 4 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u0430\\u00BB \\u0434\\u0435\\u043B\\u0430\\u0439\\u0442\\u0435 \\u0434\\u043B\\u0438\\u043D\\u043D\\u044B\\u0439 \\u043F\\u0435\\u0440\\u0435\\u0440\\u044B\\u0432 (15-30 \\u043C\\u0438\\u043D\\u0443\\u0442).\"))));\r\n}\r\nexports.InstructionList = InstructionList;\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/InstructionList/Instruction.tsx?");

/***/ }),

/***/ "./src/shared/TasksBoard/InstructionList/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/TasksBoard/InstructionList/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Instruction */ \"./src/shared/TasksBoard/InstructionList/Instruction.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/InstructionList/index.ts?");

/***/ }),

/***/ "./src/shared/TasksBoard/InstructionList/instructionlist.scss":
/*!********************************************************************!*\
  !*** ./src/shared/TasksBoard/InstructionList/instructionlist.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"instructionlist__title--17Q8V\",\n\t\"list\": \"instructionlist__list--2bCy7\",\n\t\"item\": \"instructionlist__item--AdWAr\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/InstructionList/instructionlist.scss?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/TaskItem.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/TaskItem.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TaskItem = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar taskitem_scss_1 = __importDefault(__webpack_require__(/*! ./taskitem.scss */ \"./src/shared/TasksBoard/TaskItem/taskitem.scss\"));\r\nvar TaskItemContent_1 = __webpack_require__(/*! ./TaskItemContent */ \"./src/shared/TasksBoard/TaskItem/TaskItemContent/index.ts\");\r\nvar TaskMenuList_1 = __webpack_require__(/*! ./TaskMenuList */ \"./src/shared/TasksBoard/TaskItem/TaskMenuList/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nfunction TaskItem(props) {\r\n    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];\r\n    return (react_1.default.createElement(\"li\", { className: taskitem_scss_1.default.item },\r\n        react_1.default.createElement(TaskItemContent_1.TaskItemContent, { id: props.id, index: props.i, content: props.content }),\r\n        isOpen && react_1.default.createElement(TaskMenuList_1.TaskMenuList, { id: props.id, i: props.i }),\r\n        react_1.default.createElement(\"button\", { className: taskitem_scss_1.default.menu + \" menu\", onClick: function (e) { setIsOpen(!isOpen); } },\r\n            react_1.default.createElement(Icon_1.Icon, { name: 'menu', size: 18 }))));\r\n}\r\nexports.TaskItem = TaskItem;\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/TaskItem.tsx?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/TaskItemContent/TaskItemContent.tsx":
/*!****************************************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/TaskItemContent/TaskItemContent.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TaskItemContent = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar taskitemcontent_scss_1 = __importDefault(__webpack_require__(/*! ./taskitemcontent.scss */ \"./src/shared/TasksBoard/TaskItem/TaskItemContent/taskitemcontent.scss\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar reducer_1 = __webpack_require__(/*! ../../../../store/reducer */ \"./src/store/reducer.ts\");\r\nfunction TaskItemContent(props) {\r\n    var _a = (0, react_1.useState)(props.content), value = _a[0], setValue = _a[1];\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var handleChange = function (ev) {\r\n        setValue(ev.target.value);\r\n    };\r\n    var tasks = (0, react_redux_1.useSelector)(function (state) { return state.tasks; });\r\n    return (react_1.default.createElement(\"div\", null, tasks[props.index].isEditting ?\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"input\", { className: taskitemcontent_scss_1.default.input, type: 'text', value: value, onChange: handleChange }),\r\n            react_1.default.createElement(\"button\", { className: taskitemcontent_scss_1.default.button, onClick: function () {\r\n                    dispatch((0, reducer_1.UpdateTaskAction)(props.id, value));\r\n                    dispatch((0, reducer_1.EditTaskAction)(props.id));\r\n                } }, \"\\u0413\\u043E\\u0442\\u043E\\u0432\\u043E\"))\r\n        : react_1.default.createElement(\"span\", null, props.content)));\r\n}\r\nexports.TaskItemContent = TaskItemContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/TaskItemContent/TaskItemContent.tsx?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/TaskItemContent/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/TaskItemContent/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TaskItemContent */ \"./src/shared/TasksBoard/TaskItem/TaskItemContent/TaskItemContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/TaskItemContent/index.ts?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/TaskItemContent/taskitemcontent.scss":
/*!*****************************************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/TaskItemContent/taskitemcontent.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"input\": \"taskitemcontent__input--1u9zU\",\n\t\"button\": \"taskitemcontent__button--3Uioy\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/TaskItemContent/taskitemcontent.scss?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/TaskMenuItem.tsx":
/*!***********************************************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/TaskMenuItem.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TaskMenuItem = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar taskmenuitem_scss_1 = __importDefault(__webpack_require__(/*! ./taskmenuitem.scss */ \"./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/taskmenuitem.scss\"));\r\nfunction TaskMenuItem(props) {\r\n    return (react_1.default.createElement(\"li\", { className: taskmenuitem_scss_1.default.item, onClick: props.onClick },\r\n        react_1.default.createElement(Icon_1.Icon, { name: props.icon, size: 18 }),\r\n        react_1.default.createElement(\"button\", { className: taskmenuitem_scss_1.default.btn }, props.text)));\r\n}\r\nexports.TaskMenuItem = TaskMenuItem;\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/TaskMenuItem.tsx?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/index.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/index.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TaskMenuItem */ \"./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/TaskMenuItem.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/index.ts?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/taskmenuitem.scss":
/*!************************************************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/taskmenuitem.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"taskmenuitem__item--YE8Cy\",\n\t\"btn\": \"taskmenuitem__btn--2VDMa\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/taskmenuitem.scss?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuList.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuList.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TaskMenuList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar taskmenulist_scss_1 = __importDefault(__webpack_require__(/*! ./taskmenulist.scss */ \"./src/shared/TasksBoard/TaskItem/TaskMenuList/taskmenulist.scss\"));\r\nvar TaskMenuItem_1 = __webpack_require__(/*! ./TaskMenuItem */ \"./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuItem/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar reducer_1 = __webpack_require__(/*! ../../../../store/reducer */ \"./src/store/reducer.ts\");\r\nfunction TaskMenuList(props) {\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    return (react_1.default.createElement(\"ul\", { className: taskmenulist_scss_1.default.menu },\r\n        react_1.default.createElement(TaskMenuItem_1.TaskMenuItem, { icon: 'plus', text: 'Увеличить', onClick: function () { dispatch((0, reducer_1.AddDurationAction)(props.id, 25)); } }),\r\n        react_1.default.createElement(TaskMenuItem_1.TaskMenuItem, { icon: 'minus', text: 'Уменьшить', onClick: function () { dispatch((0, reducer_1.AddDurationAction)(props.id, -25)); } }),\r\n        react_1.default.createElement(TaskMenuItem_1.TaskMenuItem, { icon: 'edit', text: 'Редактировать', onClick: function () { dispatch((0, reducer_1.EditTaskAction)(props.id)); } }),\r\n        react_1.default.createElement(TaskMenuItem_1.TaskMenuItem, { icon: 'remove', text: 'Удалить', onClick: function () { dispatch((0, reducer_1.DeleteTaskAction)(props.id)); } })));\r\n}\r\nexports.TaskMenuList = TaskMenuList;\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuList.tsx?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/TaskMenuList/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/TaskMenuList/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TaskMenuList */ \"./src/shared/TasksBoard/TaskItem/TaskMenuList/TaskMenuList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/TaskMenuList/index.ts?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/TaskMenuList/taskmenulist.scss":
/*!***********************************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/TaskMenuList/taskmenulist.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"taskmenulist__menu--2n9Dz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/TaskMenuList/taskmenulist.scss?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TaskItem */ \"./src/shared/TasksBoard/TaskItem/TaskItem.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/index.ts?");

/***/ }),

/***/ "./src/shared/TasksBoard/TaskItem/taskitem.scss":
/*!******************************************************!*\
  !*** ./src/shared/TasksBoard/TaskItem/taskitem.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"taskitem__item--mc21x\",\n\t\"menu\": \"taskitem__menu--3OxAG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TaskItem/taskitem.scss?");

/***/ }),

/***/ "./src/shared/TasksBoard/TasksBoard.tsx":
/*!**********************************************!*\
  !*** ./src/shared/TasksBoard/TasksBoard.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TasksBoard = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar tasksboard_scss_1 = __importDefault(__webpack_require__(/*! ./tasksboard.scss */ \"./src/shared/TasksBoard/tasksboard.scss\"));\r\nvar TasksList_1 = __webpack_require__(/*! ./TasksList */ \"./src/shared/TasksBoard/TasksList/index.ts\");\r\nvar TaskItem_1 = __webpack_require__(/*! ./TaskItem */ \"./src/shared/TasksBoard/TaskItem/index.ts\");\r\nvar InstructionList_1 = __webpack_require__(/*! ./InstructionList */ \"./src/shared/TasksBoard/InstructionList/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar reducer_1 = __webpack_require__(/*! ../../store/reducer */ \"./src/store/reducer.ts\");\r\nfunction TasksBoard() {\r\n    var _a = (0, react_1.useState)(''), value = _a[0], setValue = _a[1];\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var tasks = (0, react_redux_1.useSelector)(function (state) { return state.tasks; });\r\n    var clickHandler = function (ev) {\r\n        ev.preventDefault();\r\n        if (!value)\r\n            return;\r\n        dispatch((0, reducer_1.AddTask)({ name: value }));\r\n        setValue('');\r\n    };\r\n    var handleChange = function (ev) {\r\n        setValue(ev.target.value);\r\n    };\r\n    var initialValue = 0;\r\n    return (react_1.default.createElement(\"div\", { className: tasksboard_scss_1.default.tasksboard },\r\n        react_1.default.createElement(InstructionList_1.InstructionList, null),\r\n        react_1.default.createElement(\"form\", { className: tasksboard_scss_1.default.taskform },\r\n            react_1.default.createElement(\"input\", { className: tasksboard_scss_1.default.input, type: \"text\", placeholder: 'Название задачи', value: value, onChange: handleChange }),\r\n            react_1.default.createElement(\"button\", { className: tasksboard_scss_1.default.button, onClick: clickHandler }, \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\")),\r\n        react_1.default.createElement(TasksList_1.TasksList, null, tasks.map(function (item, index) { return (react_1.default.createElement(TaskItem_1.TaskItem, { id: item.id, key: index, i: index, content: item.name })); })),\r\n        react_1.default.createElement(\"div\", { className: tasksboard_scss_1.default.duration },\r\n            tasks.reduce(function (accum, currentValue) { return accum + currentValue.duration; }, initialValue),\r\n            \" \\u043C\\u0438\\u043D.\")));\r\n}\r\nexports.TasksBoard = TasksBoard;\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TasksBoard.tsx?");

/***/ }),

/***/ "./src/shared/TasksBoard/TasksList/TasksList.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/TasksBoard/TasksList/TasksList.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TasksList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar taskslist_scss_1 = __importDefault(__webpack_require__(/*! ./taskslist.scss */ \"./src/shared/TasksBoard/TasksList/taskslist.scss\"));\r\nfunction TasksList(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"ul\", { className: taskslist_scss_1.default.taskslist }, children));\r\n}\r\nexports.TasksList = TasksList;\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TasksList/TasksList.tsx?");

/***/ }),

/***/ "./src/shared/TasksBoard/TasksList/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/TasksBoard/TasksList/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TasksList */ \"./src/shared/TasksBoard/TasksList/TasksList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TasksList/index.ts?");

/***/ }),

/***/ "./src/shared/TasksBoard/TasksList/taskslist.scss":
/*!********************************************************!*\
  !*** ./src/shared/TasksBoard/TasksList/taskslist.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"taskslist\": \"taskslist__taskslist--_xsI2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/TasksList/taskslist.scss?");

/***/ }),

/***/ "./src/shared/TasksBoard/index.ts":
/*!****************************************!*\
  !*** ./src/shared/TasksBoard/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TasksBoard */ \"./src/shared/TasksBoard/TasksBoard.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/index.ts?");

/***/ }),

/***/ "./src/shared/TasksBoard/tasksboard.scss":
/*!***********************************************!*\
  !*** ./src/shared/TasksBoard/tasksboard.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"tasksboard__form--375oK\",\n\t\"input\": \"tasksboard__input--1ZLuO\",\n\t\"button\": \"tasksboard__button--2E7S0\",\n\t\"duration\": \"tasksboard__duration--3px58\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/TasksBoard/tasksboard.scss?");

/***/ }),

/***/ "./src/shared/Tomato/Tomato.tsx":
/*!**************************************!*\
  !*** ./src/shared/Tomato/Tomato.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Tomato = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar tomato_scss_1 = __importDefault(__webpack_require__(/*! ./tomato.scss */ \"./src/shared/Tomato/tomato.scss\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction Tomato() {\r\n    var _a = (0, react_1.useState)(0), minutes = _a[0], setMinutes = _a[1];\r\n    var _b = (0, react_1.useState)(7), seconds = _b[0], setSeconds = _b[1];\r\n    var _c = (0, react_1.useState)(false), isActive = _c[0], setIsActive = _c[1];\r\n    var _d = (0, react_1.useState)('Старт'), buttonStart = _d[0], setButtonStart = _d[1];\r\n    var _e = (0, react_1.useState)('Стоп'), buttonStop = _e[0], setButtonStop = _e[1];\r\n    var _f = (0, react_1.useState)(false), isBreak = _f[0], setIsBreak = _f[1];\r\n    var _g = (0, react_1.useState)(0), taskId = _g[0], setTaskId = _g[1];\r\n    var tasks = (0, react_redux_1.useSelector)(function (state) { return state.tasks; });\r\n    var settingTimer = function (sec, min) {\r\n        if (sec === void 0) { sec = 7; }\r\n        if (min === void 0) { min = 0; }\r\n        setIsActive(!isActive);\r\n        setIsBreak(!isBreak);\r\n        setSeconds(sec);\r\n        setMinutes(min);\r\n        setButtonStart('Старт');\r\n        setButtonStop('Стоп');\r\n    };\r\n    var toggle = function () {\r\n        setIsActive(!isActive);\r\n        if (!isActive) {\r\n            setButtonStart('Пауза');\r\n            setButtonStop('Стоп');\r\n        }\r\n        else if (isActive && !isBreak) {\r\n            setButtonStart('Продолжить');\r\n            setButtonStop('Сделано');\r\n        }\r\n        else {\r\n            setButtonStart('Продолжить');\r\n            setButtonStop('Пропустить');\r\n        }\r\n    };\r\n    var interval = null;\r\n    var reset = function () {\r\n        clearInterval(interval);\r\n        if (isActive) {\r\n            setIsActive(!isActive);\r\n        }\r\n        setSeconds(7);\r\n        setMinutes(0);\r\n        setButtonStart('Старт');\r\n        setButtonStop('Стоп');\r\n    };\r\n    (0, react_1.useEffect)(function () {\r\n        if (isActive) {\r\n            interval = setInterval(function () {\r\n                clearInterval(interval);\r\n                if (seconds === 0) {\r\n                    if (minutes !== 0) {\r\n                        setSeconds(59);\r\n                        setMinutes(minutes - 1);\r\n                    }\r\n                    else if (isActive && isBreak) {\r\n                        settingTimer();\r\n                        setTaskId(++taskId);\r\n                    }\r\n                    else {\r\n                        settingTimer(5);\r\n                        if (minutes === 0 && seconds === 0 && !isActive) {\r\n                            setIsBreak(!isBreak);\r\n                            setSeconds(7);\r\n                            setMinutes(0);\r\n                        }\r\n                    }\r\n                }\r\n                else {\r\n                    setSeconds(seconds - 1);\r\n                }\r\n            }, 1000);\r\n        }\r\n    }, [isActive, isBreak, seconds, taskId]);\r\n    var timerMinutes = minutes < 10 ? \"0\" + minutes : minutes;\r\n    var timerSeconds = seconds < 10 ? \"0\" + seconds : seconds;\r\n    return (react_1.default.createElement(\"div\", null, tasks.length !== 0 && (react_1.default.createElement(\"div\", { className: tomato_scss_1.default.tomato },\r\n        react_1.default.createElement(\"div\", { className: isActive ? tomato_scss_1.default.tomatoheader + \" active\" : tomato_scss_1.default.tomatoheader },\r\n            react_1.default.createElement(\"div\", { className: tomato_scss_1.default.description }, tasks[taskId].name),\r\n            react_1.default.createElement(\"div\", { className: tomato_scss_1.default.name }, !isBreak ? \"\\u041F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440 \" + (taskId + 1) : \"\\u041F\\u0435\\u0440\\u0435\\u0440\\u044B\\u0432 \" + (taskId + 1))),\r\n        react_1.default.createElement(\"div\", { className: tomato_scss_1.default.tomatotimer },\r\n            react_1.default.createElement(\"div\", { className: tomato_scss_1.default.timer },\r\n                timerMinutes,\r\n                \":\",\r\n                timerSeconds),\r\n            !isBreak ?\r\n                react_1.default.createElement(\"div\", { className: tomato_scss_1.default.task },\r\n                    react_1.default.createElement(\"span\", { className: tomato_scss_1.default.textGray }, \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0430 \" + (taskId + 1)),\r\n                    \" - \",\r\n                    tasks[taskId].name) : react_1.default.createElement(\"div\", { className: tomato_scss_1.default.break }, \"\\u041F\\u0415\\u0420\\u0415\\u0420\\u042B\\u0412\"),\r\n            react_1.default.createElement(\"div\", { className: tomato_scss_1.default.buttons },\r\n                react_1.default.createElement(\"button\", { className: tomato_scss_1.default.start, onClick: toggle }, buttonStart),\r\n                react_1.default.createElement(\"button\", { className: tomato_scss_1.default.stop, onClick: reset }, buttonStop)))))));\r\n}\r\nexports.Tomato = Tomato;\r\n\n\n//# sourceURL=webpack:///./src/shared/Tomato/Tomato.tsx?");

/***/ }),

/***/ "./src/shared/Tomato/index.ts":
/*!************************************!*\
  !*** ./src/shared/Tomato/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Tomato */ \"./src/shared/Tomato/Tomato.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Tomato/index.ts?");

/***/ }),

/***/ "./src/shared/Tomato/tomato.scss":
/*!***************************************!*\
  !*** ./src/shared/Tomato/tomato.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"tomatoheader\": \"tomato__tomatoheader--1TJMP\",\n\t\"description\": \"tomato__description--23Kf6\",\n\t\"tomatotimer\": \"tomato__tomatotimer--2buMt\",\n\t\"timer\": \"tomato__timer--zH-_M\",\n\t\"task\": \"tomato__task--27M5R\",\n\t\"buttons\": \"tomato__buttons--1rHqr\",\n\t\"start\": \"tomato__start--PQIAn\",\n\t\"stop\": \"tomato__stop--3CVgX\",\n\t\"break\": \"tomato__break--3pxyz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Tomato/tomato.scss?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.AddDurationAction = exports.ADD_DURATION = exports.UpdateTaskAction = exports.UPDATE_TASK = exports.EditTaskAction = exports.EDIT_TASK = exports.DeleteTaskAction = exports.DELETE_TASK = exports.AddTask = exports.ADD_TASK = void 0;\r\nvar uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\r\nvar initialState = {\r\n    tasks: [\r\n        {\r\n            id: (0, uuid_1.v4)(),\r\n            name: 'Сверстать сайт',\r\n            isEditting: false,\r\n            duration: 25\r\n        },\r\n        {\r\n            id: (0, uuid_1.v4)(),\r\n            name: 'Сделать анимацию',\r\n            isEditting: false,\r\n            duration: 50\r\n        },\r\n    ]\r\n};\r\nexports.ADD_TASK = 'ADD_TASK';\r\nvar AddTask = function (data) { return ({\r\n    type: exports.ADD_TASK,\r\n    data: data,\r\n}); };\r\nexports.AddTask = AddTask;\r\nexports.DELETE_TASK = 'DELETE_TASK';\r\nvar DeleteTaskAction = function (id) { return ({\r\n    type: exports.DELETE_TASK,\r\n    id: id,\r\n}); };\r\nexports.DeleteTaskAction = DeleteTaskAction;\r\nexports.EDIT_TASK = 'EDIT_TASK';\r\nvar EditTaskAction = function (id) { return ({\r\n    type: exports.EDIT_TASK,\r\n    id: id\r\n}); };\r\nexports.EditTaskAction = EditTaskAction;\r\nexports.UPDATE_TASK = 'UPDATE_TASK';\r\nvar UpdateTaskAction = function (id, name) { return ({\r\n    type: exports.UPDATE_TASK,\r\n    id: id,\r\n    name: name\r\n}); };\r\nexports.UpdateTaskAction = UpdateTaskAction;\r\nexports.ADD_DURATION = 'ADD_DURATION';\r\nvar AddDurationAction = function (id, duration) { return ({\r\n    type: exports.ADD_DURATION,\r\n    id: id,\r\n    duration: duration\r\n}); };\r\nexports.AddDurationAction = AddDurationAction;\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case exports.ADD_TASK:\r\n            return __assign(__assign({}, state), { tasks: __spreadArray(__spreadArray([], state.tasks, true), [{ id: (0, uuid_1.v4)(), name: action.data.name, isEditting: false, duration: 25 }], false) });\r\n        case exports.DELETE_TASK:\r\n            return __assign(__assign({}, state), { tasks: __spreadArray([], state.tasks.filter(function (item) { return item.id !== action.id; }), true) });\r\n        case exports.EDIT_TASK:\r\n            return {\r\n                tasks: state.tasks.map(function (task) { return task.id === action.id ? __assign(__assign({}, task), { isEditting: !task.isEditting }) : task; })\r\n            };\r\n        case exports.UPDATE_TASK:\r\n            return __assign(__assign({}, state), { tasks: state.tasks.map(function (task) { return task.id === action.id ? __assign(__assign({}, task), { name: action.name }) : task; }) });\r\n        case exports.ADD_DURATION:\r\n            return __assign(__assign({}, state), { tasks: state.tasks.map(function (task) { return task.id === action.id ? __assign(__assign({}, task), { duration: task.duration + action.duration }) : task; }) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });