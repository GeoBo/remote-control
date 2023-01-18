/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/http_server/http_server.ts":
/*!****************************************!*\
  !*** ./src/http_server/http_server.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpServer": () => (/* binding */ httpServer)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);



const httpServer = http__WEBPACK_IMPORTED_MODULE_2__.createServer(function (req, res) {
    const __dirname = path__WEBPACK_IMPORTED_MODULE_1__.resolve(path__WEBPACK_IMPORTED_MODULE_1__.dirname(''));
    const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(file_path, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});


/***/ }),

/***/ "./src/lib/mouseMovement.ts":
/*!**********************************!*\
  !*** ./src/lib/mouseMovement.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMousePosition": () => (/* binding */ getMousePosition),
/* harmony export */   "moveMouseDown": () => (/* binding */ moveMouseDown),
/* harmony export */   "moveMouseLeft": () => (/* binding */ moveMouseLeft),
/* harmony export */   "moveMouseRight": () => (/* binding */ moveMouseRight),
/* harmony export */   "moveMouseUp": () => (/* binding */ moveMouseUp)
/* harmony export */ });
/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nut-tree/nut-js */ "@nut-tree/nut-js");
/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__);

//mouse.config.mouseSpeed = 2000;
async function moveMouseLeft(data) {
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.left)(Number(data)));
}
async function moveMouseRight(data) {
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.right)(Number(data)));
}
async function moveMouseUp(data) {
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.up)(Number(data)));
}
async function moveMouseDown(data) {
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.down)(Number(data)));
}
async function getMousePosition() {
    const position = await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.getPosition();
    console.log(`-> mouse_position ${position.x},${position.y}`);
}



/***/ }),

/***/ "./src/lib/parseCommand.ts":
/*!*********************************!*\
  !*** ./src/lib/parseCommand.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mouseMovement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouseMovement */ "./src/lib/mouseMovement.ts");

async function parseCommand(data) {
    const arr = data.split(' ');
    const command = arr[0];
    const value = arr[1];
    //const value = arr.slice(1);
    switch (command) {
        case 'mouse_up':
            await (0,_mouseMovement__WEBPACK_IMPORTED_MODULE_0__.moveMouseUp)(value);
            break;
        case 'mouse_down':
            await (0,_mouseMovement__WEBPACK_IMPORTED_MODULE_0__.moveMouseDown)(value);
            break;
        case 'mouse_left':
            await (0,_mouseMovement__WEBPACK_IMPORTED_MODULE_0__.moveMouseLeft)(value);
            break;
        case 'mouse_right':
            await (0,_mouseMovement__WEBPACK_IMPORTED_MODULE_0__.moveMouseRight)(value);
            break;
        case 'mouse_position':
            await (0,_mouseMovement__WEBPACK_IMPORTED_MODULE_0__.getMousePosition)();
            break;
        default:
            console.log('Unknown command');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseCommand);


/***/ }),

/***/ "@nut-tree/nut-js":
/*!***********************************!*\
  !*** external "@nut-tree/nut-js" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nut-tree/nut-js");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("ws");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_server_http_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_server/http_server */ "./src/http_server/http_server.ts");
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ws */ "ws");
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_parseCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/parseCommand */ "./src/lib/parseCommand.ts");




dotenv__WEBPACK_IMPORTED_MODULE_2__.config();
const HTTP_PORT = process.env.PORT || 8181;
console.log(`Start static http server on the ${HTTP_PORT} port!`);
_http_server_http_server__WEBPACK_IMPORTED_MODULE_0__.httpServer.listen(HTTP_PORT);
const wss = new ws__WEBPACK_IMPORTED_MODULE_1__.WebSocketServer({ port: 8080 });
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (data) => {
        const command = data.toString();
        (0,_lib_parseCommand__WEBPACK_IMPORTED_MODULE_3__["default"])(command);
        console.log(`<- ${command}`);
    });
    ws.on('close', function () {
        console.log('Client disconnected');
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDdEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLDZEQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3NfdGFzay8uL3NyYy9odHRwX3NlcnZlci9odHRwX3NlcnZlci50cyIsIndlYnBhY2s6Ly93c190YXNrLy4vc3JjL2xpYi9tb3VzZU1vdmVtZW50LnRzIiwid2VicGFjazovL3dzX3Rhc2svLi9zcmMvbGliL3BhcnNlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly93c190YXNrL2V4dGVybmFsIGNvbW1vbmpzIFwiQG51dC10cmVlL251dC1qc1wiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly93c190YXNrL2V4dGVybmFsIGNvbW1vbmpzIFwid3NcIiIsIndlYnBhY2s6Ly93c190YXNrL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImh0dHBcIiIsIndlYnBhY2s6Ly93c190YXNrL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vd3NfdGFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93c190YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dzX3Rhc2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dzX3Rhc2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93c190YXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd3NfdGFzay8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcblxuZXhwb3J0IGNvbnN0IGh0dHBTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICBjb25zdCBfX2Rpcm5hbWUgPSBwYXRoLnJlc29sdmUocGF0aC5kaXJuYW1lKCcnKSk7XG4gICAgY29uc3QgZmlsZV9wYXRoID0gX19kaXJuYW1lICsgKHJlcS51cmwgPT09ICcvJyA/ICcvZnJvbnQvaW5kZXguaHRtbCcgOiAnL2Zyb250JyArIHJlcS51cmwpO1xuICAgIGZzLnJlYWRGaWxlKGZpbGVfcGF0aCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXMud3JpdGVIZWFkKDQwNCk7XG4gICAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlcy53cml0ZUhlYWQoMjAwKTtcbiAgICAgICAgcmVzLmVuZChkYXRhKTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgbW91c2UsIGxlZnQsIHJpZ2h0LCB1cCwgZG93biB9IGZyb20gJ0BudXQtdHJlZS9udXQtanMnO1xyXG5cclxuLy9tb3VzZS5jb25maWcubW91c2VTcGVlZCA9IDIwMDA7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtb3ZlTW91c2VMZWZ0KGRhdGE6IHN0cmluZykge1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShsZWZ0KE51bWJlcihkYXRhKSkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtb3ZlTW91c2VSaWdodChkYXRhOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUocmlnaHQoTnVtYmVyKGRhdGEpKSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1vdmVNb3VzZVVwKGRhdGE6IHN0cmluZykge1xyXG4gICAgYXdhaXQgbW91c2UubW92ZSh1cChOdW1iZXIoZGF0YSkpKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbW92ZU1vdXNlRG93bihkYXRhOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUoZG93bihOdW1iZXIoZGF0YSkpKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TW91c2VQb3NpdGlvbigpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgbW91c2UuZ2V0UG9zaXRpb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGAtPiBtb3VzZV9wb3NpdGlvbiAke3Bvc2l0aW9uLnh9LCR7cG9zaXRpb24ueX1gKTtcclxufVxyXG5cclxuZXhwb3J0IHsgbW92ZU1vdXNlTGVmdCwgbW92ZU1vdXNlUmlnaHQsIG1vdmVNb3VzZVVwLCBtb3ZlTW91c2VEb3duLCBnZXRNb3VzZVBvc2l0aW9uIH07XHJcbiIsImltcG9ydCB7IGdldE1vdXNlUG9zaXRpb24sIG1vdmVNb3VzZURvd24sIG1vdmVNb3VzZUxlZnQsIG1vdmVNb3VzZVJpZ2h0LCBtb3ZlTW91c2VVcCB9IGZyb20gJy4vbW91c2VNb3ZlbWVudCc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwYXJzZUNvbW1hbmQoZGF0YTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhcnIgPSBkYXRhLnNwbGl0KCcgJyk7XHJcbiAgICBjb25zdCBjb21tYW5kID0gYXJyWzBdO1xyXG4gICAgY29uc3QgdmFsdWUgPSBhcnJbMV07XHJcbiAgICAvL2NvbnN0IHZhbHVlID0gYXJyLnNsaWNlKDEpO1xyXG5cclxuICAgIHN3aXRjaCAoY29tbWFuZCkge1xyXG4gICAgICAgIGNhc2UgJ21vdXNlX3VwJzpcclxuICAgICAgICAgICAgYXdhaXQgbW92ZU1vdXNlVXAodmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtb3VzZV9kb3duJzpcclxuICAgICAgICAgICAgYXdhaXQgbW92ZU1vdXNlRG93bih2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21vdXNlX2xlZnQnOlxyXG4gICAgICAgICAgICBhd2FpdCBtb3ZlTW91c2VMZWZ0KHZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW91c2VfcmlnaHQnOlxyXG4gICAgICAgICAgICBhd2FpdCBtb3ZlTW91c2VSaWdodCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21vdXNlX3Bvc2l0aW9uJzpcclxuICAgICAgICAgICAgYXdhaXQgZ2V0TW91c2VQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVW5rbm93biBjb21tYW5kJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcnNlQ29tbWFuZDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG51dC10cmVlL251dC1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBodHRwU2VydmVyIH0gZnJvbSAnLi9odHRwX3NlcnZlci9odHRwX3NlcnZlcic7XG5pbXBvcnQgeyBXZWJTb2NrZXRTZXJ2ZXIgfSBmcm9tICd3cyc7XG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCBwYXJzZUNvbW1hbmQgZnJvbSAnLi9saWIvcGFyc2VDb21tYW5kJztcbmRvdGVudi5jb25maWcoKTtcblxuY29uc3QgSFRUUF9QT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MTgxO1xuXG5jb25zb2xlLmxvZyhgU3RhcnQgc3RhdGljIGh0dHAgc2VydmVyIG9uIHRoZSAke0hUVFBfUE9SVH0gcG9ydCFgKTtcbmh0dHBTZXJ2ZXIubGlzdGVuKEhUVFBfUE9SVCk7XG5cbmNvbnN0IHdzcyA9IG5ldyBXZWJTb2NrZXRTZXJ2ZXIoeyBwb3J0OiA4MDgwIH0pO1xuXG53c3Mub24oJ2Nvbm5lY3Rpb24nLCAod3MpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ2xpZW50IGNvbm5lY3RlZCcpO1xuXG4gICAgd3Mub24oJ21lc3NhZ2UnLCAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICBwYXJzZUNvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGA8LSAke2NvbW1hbmR9YCk7XG4gICAgfSk7XG5cbiAgICB3cy5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQgZGlzY29ubmVjdGVkJyk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==