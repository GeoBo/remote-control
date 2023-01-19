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
/* harmony export */   "drawCircleMouse": () => (/* binding */ drawCircleMouse),
/* harmony export */   "drawRectangleMouse": () => (/* binding */ drawRectangleMouse),
/* harmony export */   "drawSquareMouse": () => (/* binding */ drawSquareMouse),
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
    return `mouse_position ${position.x},${position.y}`;
}
async function drawCircleMouse(radius) {
    let x;
    let y;
    const r = Number(radius);
    const presicion = 1000;
    const position = await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.getPosition();
    //await mouse.click(Button.LEFT);
    for (let i = 0; i < Math.PI * 2; i += (Math.PI * 2) / presicion) {
        x = position.x + r * Math.sin(i);
        y = position.y + r * Math.cos(i);
        if (!i) {
            await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.setPosition(new _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
            await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.pressButton(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Button.LEFT);
        }
        await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.straightTo)(new _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Point(x, y)));
    }
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.releaseButton(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Button.LEFT);
}
async function drawSquareMouse(width) {
    const w = Number(width);
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.pressButton(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Button.LEFT);
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.right)(w));
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.down)(w));
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.left)(w));
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.up)(w));
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.releaseButton(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Button.LEFT);
}
async function drawRectangleMouse(width, length) {
    const w = Number(width);
    const l = Number(length);
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.pressButton(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Button.LEFT);
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.right)(w));
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.down)(l));
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.left)(w));
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.up)(l));
    await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.releaseButton(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Button.LEFT);
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
    const value2 = arr[2];
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
            return (0,_mouseMovement__WEBPACK_IMPORTED_MODULE_0__.getMousePosition)();
        case 'draw_circle':
            await (0,_mouseMovement__WEBPACK_IMPORTED_MODULE_0__.drawCircleMouse)(value);
            break;
        case 'draw_square':
            await (0,_mouseMovement__WEBPACK_IMPORTED_MODULE_0__.drawSquareMouse)(value);
            break;
        case 'draw_rectangle':
            await (0,_mouseMovement__WEBPACK_IMPORTED_MODULE_0__.drawRectangleMouse)(value, value2);
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
        console.log(`<- ${command}`);
        (0,_lib_parseCommand__WEBPACK_IMPORTED_MODULE_3__["default"])(command).then((answer) => {
            if (typeof answer !== 'string')
                return;
            ws.send(answer);
            console.log(`-> ${answer}`);
        });
    });
    ws.on('close', function () {
        console.log('Client disconnected');
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3RCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM3Qiw2REFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2xDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUTtnQkFBRSxPQUFPO1lBQ3ZDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93c190YXNrLy4vc3JjL2h0dHBfc2VydmVyL2h0dHBfc2VydmVyLnRzIiwid2VicGFjazovL3dzX3Rhc2svLi9zcmMvbGliL21vdXNlTW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vd3NfdGFzay8uL3NyYy9saWIvcGFyc2VDb21tYW5kLnRzIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgY29tbW9uanMgXCJAbnV0LXRyZWUvbnV0LWpzXCIiLCJ3ZWJwYWNrOi8vd3NfdGFzay9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgY29tbW9uanMgXCJ3c1wiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vd3NfdGFzay9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly93c190YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dzX3Rhc2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd3NfdGFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd3NfdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dzX3Rhc2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93c190YXNrLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuXG5leHBvcnQgY29uc3QgaHR0cFNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIGNvbnN0IF9fZGlybmFtZSA9IHBhdGgucmVzb2x2ZShwYXRoLmRpcm5hbWUoJycpKTtcbiAgICBjb25zdCBmaWxlX3BhdGggPSBfX2Rpcm5hbWUgKyAocmVxLnVybCA9PT0gJy8nID8gJy9mcm9udC9pbmRleC5odG1sJyA6ICcvZnJvbnQnICsgcmVxLnVybCk7XG4gICAgZnMucmVhZEZpbGUoZmlsZV9wYXRoLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJlcy53cml0ZUhlYWQoNDA0KTtcbiAgICAgICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzLndyaXRlSGVhZCgyMDApO1xuICAgICAgICByZXMuZW5kKGRhdGEpO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBtb3VzZSwgbGVmdCwgcmlnaHQsIHVwLCBkb3duLCBzdHJhaWdodFRvLCBQb2ludCwgQnV0dG9uIH0gZnJvbSAnQG51dC10cmVlL251dC1qcyc7XHJcblxyXG4vL21vdXNlLmNvbmZpZy5tb3VzZVNwZWVkID0gMjAwMDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1vdmVNb3VzZUxlZnQoZGF0YTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKGxlZnQoTnVtYmVyKGRhdGEpKSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1vdmVNb3VzZVJpZ2h0KGRhdGE6IHN0cmluZykge1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShyaWdodChOdW1iZXIoZGF0YSkpKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbW92ZU1vdXNlVXAoZGF0YTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKHVwKE51bWJlcihkYXRhKSkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtb3ZlTW91c2VEb3duKGRhdGE6IHN0cmluZykge1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShkb3duKE51bWJlcihkYXRhKSkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uKCkge1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBtb3VzZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgcmV0dXJuIGBtb3VzZV9wb3NpdGlvbiAke3Bvc2l0aW9uLnh9LCR7cG9zaXRpb24ueX1gO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkcmF3Q2lyY2xlTW91c2UocmFkaXVzOiBzdHJpbmcpIHtcclxuICAgIGxldCB4OiBudW1iZXI7XHJcbiAgICBsZXQgeTogbnVtYmVyO1xyXG4gICAgY29uc3QgciA9IE51bWJlcihyYWRpdXMpO1xyXG4gICAgY29uc3QgcHJlc2ljaW9uID0gMTAwMDtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgbW91c2UuZ2V0UG9zaXRpb24oKTtcclxuICAgIC8vYXdhaXQgbW91c2UuY2xpY2soQnV0dG9uLkxFRlQpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLlBJICogMjsgaSArPSAoTWF0aC5QSSAqIDIpIC8gcHJlc2ljaW9uKSB7XHJcbiAgICAgICAgeCA9IHBvc2l0aW9uLnggKyByICogTWF0aC5zaW4oaSk7XHJcbiAgICAgICAgeSA9IHBvc2l0aW9uLnkgKyByICogTWF0aC5jb3MoaSk7XHJcbiAgICAgICAgaWYgKCFpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1vdXNlLnNldFBvc2l0aW9uKG5ldyBQb2ludCh4LCB5KSk7XHJcbiAgICAgICAgICAgIGF3YWl0IG1vdXNlLnByZXNzQnV0dG9uKEJ1dHRvbi5MRUZUKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbW91c2UubW92ZShzdHJhaWdodFRvKG5ldyBQb2ludCh4LCB5KSkpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgbW91c2UucmVsZWFzZUJ1dHRvbihCdXR0b24uTEVGVCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRyYXdTcXVhcmVNb3VzZSh3aWR0aDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB3ID0gTnVtYmVyKHdpZHRoKTtcclxuICAgIGF3YWl0IG1vdXNlLnByZXNzQnV0dG9uKEJ1dHRvbi5MRUZUKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUocmlnaHQodykpO1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShkb3duKHcpKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUobGVmdCh3KSk7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKHVwKHcpKTtcclxuICAgIGF3YWl0IG1vdXNlLnJlbGVhc2VCdXR0b24oQnV0dG9uLkxFRlQpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkcmF3UmVjdGFuZ2xlTW91c2Uod2lkdGg6IHN0cmluZywgbGVuZ3RoOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHcgPSBOdW1iZXIod2lkdGgpO1xyXG4gICAgY29uc3QgbCA9IE51bWJlcihsZW5ndGgpO1xyXG5cclxuICAgIGF3YWl0IG1vdXNlLnByZXNzQnV0dG9uKEJ1dHRvbi5MRUZUKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUocmlnaHQodykpO1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShkb3duKGwpKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUobGVmdCh3KSk7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKHVwKGwpKTtcclxuICAgIGF3YWl0IG1vdXNlLnJlbGVhc2VCdXR0b24oQnV0dG9uLkxFRlQpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgbW92ZU1vdXNlTGVmdCxcclxuICAgIG1vdmVNb3VzZVJpZ2h0LFxyXG4gICAgbW92ZU1vdXNlVXAsXHJcbiAgICBtb3ZlTW91c2VEb3duLFxyXG4gICAgZ2V0TW91c2VQb3NpdGlvbixcclxuICAgIGRyYXdDaXJjbGVNb3VzZSxcclxuICAgIGRyYXdTcXVhcmVNb3VzZSxcclxuICAgIGRyYXdSZWN0YW5nbGVNb3VzZSxcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICAgIGRyYXdDaXJjbGVNb3VzZSxcclxuICAgIGRyYXdSZWN0YW5nbGVNb3VzZSxcclxuICAgIGRyYXdTcXVhcmVNb3VzZSxcclxuICAgIGdldE1vdXNlUG9zaXRpb24sXHJcbiAgICBtb3ZlTW91c2VEb3duLFxyXG4gICAgbW92ZU1vdXNlTGVmdCxcclxuICAgIG1vdmVNb3VzZVJpZ2h0LFxyXG4gICAgbW92ZU1vdXNlVXAsXHJcbn0gZnJvbSAnLi9tb3VzZU1vdmVtZW50JztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29tbWFuZChkYXRhOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGFyciA9IGRhdGEuc3BsaXQoJyAnKTtcclxuICAgIGNvbnN0IGNvbW1hbmQgPSBhcnJbMF07XHJcbiAgICBjb25zdCB2YWx1ZSA9IGFyclsxXTtcclxuICAgIGNvbnN0IHZhbHVlMiA9IGFyclsyXTtcclxuXHJcbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgICBjYXNlICdtb3VzZV91cCc6XHJcbiAgICAgICAgICAgIGF3YWl0IG1vdmVNb3VzZVVwKHZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW91c2VfZG93bic6XHJcbiAgICAgICAgICAgIGF3YWl0IG1vdmVNb3VzZURvd24odmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtb3VzZV9sZWZ0JzpcclxuICAgICAgICAgICAgYXdhaXQgbW92ZU1vdXNlTGVmdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21vdXNlX3JpZ2h0JzpcclxuICAgICAgICAgICAgYXdhaXQgbW92ZU1vdXNlUmlnaHQodmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtb3VzZV9wb3NpdGlvbic6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRNb3VzZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgY2FzZSAnZHJhd19jaXJjbGUnOlxyXG4gICAgICAgICAgICBhd2FpdCBkcmF3Q2lyY2xlTW91c2UodmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkcmF3X3NxdWFyZSc6XHJcbiAgICAgICAgICAgIGF3YWl0IGRyYXdTcXVhcmVNb3VzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2RyYXdfcmVjdGFuZ2xlJzpcclxuICAgICAgICAgICAgYXdhaXQgZHJhd1JlY3RhbmdsZU1vdXNlKHZhbHVlLCB2YWx1ZTIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVW5rbm93biBjb21tYW5kJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcnNlQ29tbWFuZDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG51dC10cmVlL251dC1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBodHRwU2VydmVyIH0gZnJvbSAnLi9odHRwX3NlcnZlci9odHRwX3NlcnZlcic7XG5pbXBvcnQgeyBXZWJTb2NrZXRTZXJ2ZXIgfSBmcm9tICd3cyc7XG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCBwYXJzZUNvbW1hbmQgZnJvbSAnLi9saWIvcGFyc2VDb21tYW5kJztcbmRvdGVudi5jb25maWcoKTtcblxuY29uc3QgSFRUUF9QT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MTgxO1xuXG5jb25zb2xlLmxvZyhgU3RhcnQgc3RhdGljIGh0dHAgc2VydmVyIG9uIHRoZSAke0hUVFBfUE9SVH0gcG9ydCFgKTtcbmh0dHBTZXJ2ZXIubGlzdGVuKEhUVFBfUE9SVCk7XG5cbmNvbnN0IHdzcyA9IG5ldyBXZWJTb2NrZXRTZXJ2ZXIoeyBwb3J0OiA4MDgwIH0pO1xuXG53c3Mub24oJ2Nvbm5lY3Rpb24nLCAod3MpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ2xpZW50IGNvbm5lY3RlZCcpO1xuXG4gICAgd3Mub24oJ21lc3NhZ2UnLCAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICBjb25zb2xlLmxvZyhgPC0gJHtjb21tYW5kfWApO1xuICAgICAgICBwYXJzZUNvbW1hbmQoY29tbWFuZCkudGhlbigoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFuc3dlciAhPT0gJ3N0cmluZycpIHJldHVybjtcbiAgICAgICAgICAgIHdzLnNlbmQoYW5zd2VyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAtPiAke2Fuc3dlcn1gKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB3cy5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQgZGlzY29ubmVjdGVkJyk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==