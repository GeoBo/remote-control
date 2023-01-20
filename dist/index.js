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

_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.config.mouseSpeed = 500;
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
    _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.config.mouseSpeed = 10000;
    for (let i = 0; i < Math.PI * 2; i += (Math.PI * 2) / presicion) {
        x = position.x + r * Math.sin(i);
        y = position.y + r * Math.cos(i);
        if (!i) {
            await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.setPosition(new _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
            await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.pressButton(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Button.LEFT);
        }
        await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.straightTo)(new _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Point(x, y)));
    }
    _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.config.mouseSpeed = 500;
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
/* harmony import */ var _screenControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenControl */ "./src/lib/screenControl.ts");


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
        case 'prnt_scrn':
            return (0,_screenControl__WEBPACK_IMPORTED_MODULE_1__.getPrintScreen)();
        default:
            console.log('Unknown command');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseCommand);


/***/ }),

/***/ "./src/lib/screenControl.ts":
/*!**********************************!*\
  !*** ./src/lib/screenControl.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrintScreen": () => (/* binding */ getPrintScreen)
/* harmony export */ });
/* harmony import */ var jimp_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimp/es */ "jimp/es");
/* harmony import */ var jimp_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jimp_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nut-tree/nut-js */ "@nut-tree/nut-js");
/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_1__);


async function getPrintScreen() {
    const position = await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_1__.mouse.getPosition();
    const clientWidth = 200;
    const clientHeight = 200;
    const region = new _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_1__.Region(position.x - clientWidth / 2, position.y - clientHeight / 2, clientWidth, clientHeight);
    const BGRImage = await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_1__.screen.grabRegion(region);
    const { data, width, height } = await BGRImage.toRGB();
    const jimpObj = new (jimp_es__WEBPACK_IMPORTED_MODULE_0___default())({ data, width, height });
    const png64 = await jimpObj.getBase64Async((jimp_es__WEBPACK_IMPORTED_MODULE_0___default().MIME_PNG));
    const png64short = png64.replace('data:image/png;base64,', '');
    return `prnt_scrn ${png64short}`;
}



/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "truncateString": () => (/* binding */ truncateString)
/* harmony export */ });
function truncateString(str, limit = 50) {
    return str.length > limit ? str.slice(0, limit - 1) + '…' : str;
}



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

/***/ "jimp/es":
/*!**************************!*\
  !*** external "jimp/es" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("jimp/es");

/***/ }),

/***/ "nodemon":
/*!**************************!*\
  !*** external "nodemon" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nodemon");

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
/* harmony import */ var nodemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nodemon */ "nodemon");
/* harmony import */ var nodemon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nodemon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_parseCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/parseCommand */ "./src/lib/parseCommand.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils */ "./src/lib/utils.ts");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_5__);






dotenv__WEBPACK_IMPORTED_MODULE_5___default().config();
const HTTP_PORT = process.env.PORT || 8181;
const WEBSOCKET_PORT = Number(process.env.WEB_SOCKET_PORT) || 8080;
console.log(`Start HTTP Server on the ${HTTP_PORT} port! (http://localhost:${HTTP_PORT})`);
_http_server_http_server__WEBPACK_IMPORTED_MODULE_0__.httpServer.listen(HTTP_PORT);
const wss = new ws__WEBPACK_IMPORTED_MODULE_1__.WebSocketServer({ port: WEBSOCKET_PORT });
console.log(`Start WebSocket Server on the ${WEBSOCKET_PORT} port! (http://localhost:${WEBSOCKET_PORT})`);
wss.on('connection', (ws) => {
    console.log(`Clients connected: ${wss.clients.size}`);
    const duplex = (0,ws__WEBPACK_IMPORTED_MODULE_1__.createWebSocketStream)(ws, {
        encoding: 'utf-8',
        decodeStrings: false,
        readableObjectMode: true,
        writableObjectMode: true,
    });
    duplex.on('data', (chunk) => {
        const command = chunk.toString();
        console.log(`<- ${command}`);
        (0,_lib_parseCommand__WEBPACK_IMPORTED_MODULE_3__["default"])(command)
            .then((answer) => {
            if (typeof answer !== 'string') {
                duplex.write(command); //echo
                return;
            }
            duplex.write(answer);
            const formatAnswer = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.truncateString)(answer);
            console.log(`-> ${formatAnswer}`);
        })
            .catch((error) => console.error(error));
    });
    ws.on('close', function () {
        console.log('Client disconnected');
    });
});
//hard disconnect clients from web socket
wss.on('close', () => {
    wss.clients.forEach((socket) => {
        socket.close();
        process.nextTick(() => {
            if (socket.readyState === socket.OPEN || socket.readyState === socket.CLOSING) {
                socket.terminate();
            }
        });
    });
});
process.on('SIGINT', () => {
    nodemon__WEBPACK_IMPORTED_MODULE_2___default().emit('quit');
    process.exit(0);
});
process.on('exit', (code) => {
    nodemon__WEBPACK_IMPORTED_MODULE_2___default().emit('quit');
    process.exit(code);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93c190YXNrLy4vc3JjL2h0dHBfc2VydmVyL2h0dHBfc2VydmVyLnRzIiwid2VicGFjazovL3dzX3Rhc2svLi9zcmMvbGliL21vdXNlTW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vd3NfdGFzay8uL3NyYy9saWIvcGFyc2VDb21tYW5kLnRzIiwid2VicGFjazovL3dzX3Rhc2svLi9zcmMvbGliL3NjcmVlbkNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vd3NfdGFzay8uL3NyYy9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vd3NfdGFzay9leHRlcm5hbCBjb21tb25qcyBcIkBudXQtdHJlZS9udXQtanNcIiIsIndlYnBhY2s6Ly93c190YXNrL2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vd3NfdGFzay9leHRlcm5hbCBjb21tb25qcyBcImppbXAvZXNcIiIsIndlYnBhY2s6Ly93c190YXNrL2V4dGVybmFsIGNvbW1vbmpzIFwibm9kZW1vblwiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgY29tbW9uanMgXCJ3c1wiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vd3NfdGFzay9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly93c190YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dzX3Rhc2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd3NfdGFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd3NfdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dzX3Rhc2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93c190YXNrLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuXG5leHBvcnQgY29uc3QgaHR0cFNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIGNvbnN0IF9fZGlybmFtZSA9IHBhdGgucmVzb2x2ZShwYXRoLmRpcm5hbWUoJycpKTtcbiAgICBjb25zdCBmaWxlX3BhdGggPSBfX2Rpcm5hbWUgKyAocmVxLnVybCA9PT0gJy8nID8gJy9mcm9udC9pbmRleC5odG1sJyA6ICcvZnJvbnQnICsgcmVxLnVybCk7XG4gICAgZnMucmVhZEZpbGUoZmlsZV9wYXRoLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJlcy53cml0ZUhlYWQoNDA0KTtcbiAgICAgICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzLndyaXRlSGVhZCgyMDApO1xuICAgICAgICByZXMuZW5kKGRhdGEpO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBtb3VzZSwgbGVmdCwgcmlnaHQsIHVwLCBkb3duLCBzdHJhaWdodFRvLCBQb2ludCwgQnV0dG9uIH0gZnJvbSAnQG51dC10cmVlL251dC1qcyc7XHJcblxyXG5tb3VzZS5jb25maWcubW91c2VTcGVlZCA9IDUwMDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1vdmVNb3VzZUxlZnQoZGF0YTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKGxlZnQoTnVtYmVyKGRhdGEpKSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1vdmVNb3VzZVJpZ2h0KGRhdGE6IHN0cmluZykge1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShyaWdodChOdW1iZXIoZGF0YSkpKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbW92ZU1vdXNlVXAoZGF0YTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKHVwKE51bWJlcihkYXRhKSkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtb3ZlTW91c2VEb3duKGRhdGE6IHN0cmluZykge1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShkb3duKE51bWJlcihkYXRhKSkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uKCkge1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBtb3VzZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgcmV0dXJuIGBtb3VzZV9wb3NpdGlvbiAke3Bvc2l0aW9uLnh9LCR7cG9zaXRpb24ueX1gO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkcmF3Q2lyY2xlTW91c2UocmFkaXVzOiBzdHJpbmcpIHtcclxuICAgIGxldCB4OiBudW1iZXI7XHJcbiAgICBsZXQgeTogbnVtYmVyO1xyXG4gICAgY29uc3QgciA9IE51bWJlcihyYWRpdXMpO1xyXG4gICAgY29uc3QgcHJlc2ljaW9uID0gMTAwMDtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgbW91c2UuZ2V0UG9zaXRpb24oKTtcclxuICAgIG1vdXNlLmNvbmZpZy5tb3VzZVNwZWVkID0gMTAwMDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGguUEkgKiAyOyBpICs9IChNYXRoLlBJICogMikgLyBwcmVzaWNpb24pIHtcclxuICAgICAgICB4ID0gcG9zaXRpb24ueCArIHIgKiBNYXRoLnNpbihpKTtcclxuICAgICAgICB5ID0gcG9zaXRpb24ueSArIHIgKiBNYXRoLmNvcyhpKTtcclxuICAgICAgICBpZiAoIWkpIHtcclxuICAgICAgICAgICAgYXdhaXQgbW91c2Uuc2V0UG9zaXRpb24obmV3IFBvaW50KHgsIHkpKTtcclxuICAgICAgICAgICAgYXdhaXQgbW91c2UucHJlc3NCdXR0b24oQnV0dG9uLkxFRlQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBtb3VzZS5tb3ZlKHN0cmFpZ2h0VG8obmV3IFBvaW50KHgsIHkpKSk7XHJcbiAgICB9XHJcbiAgICBtb3VzZS5jb25maWcubW91c2VTcGVlZCA9IDUwMDtcclxuICAgIGF3YWl0IG1vdXNlLnJlbGVhc2VCdXR0b24oQnV0dG9uLkxFRlQpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkcmF3U3F1YXJlTW91c2Uod2lkdGg6IHN0cmluZykge1xyXG4gICAgY29uc3QgdyA9IE51bWJlcih3aWR0aCk7XHJcbiAgICBhd2FpdCBtb3VzZS5wcmVzc0J1dHRvbihCdXR0b24uTEVGVCk7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKHJpZ2h0KHcpKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUoZG93bih3KSk7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKGxlZnQodykpO1xyXG4gICAgYXdhaXQgbW91c2UubW92ZSh1cCh3KSk7XHJcbiAgICBhd2FpdCBtb3VzZS5yZWxlYXNlQnV0dG9uKEJ1dHRvbi5MRUZUKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZHJhd1JlY3RhbmdsZU1vdXNlKHdpZHRoOiBzdHJpbmcsIGxlbmd0aDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB3ID0gTnVtYmVyKHdpZHRoKTtcclxuICAgIGNvbnN0IGwgPSBOdW1iZXIobGVuZ3RoKTtcclxuXHJcbiAgICBhd2FpdCBtb3VzZS5wcmVzc0J1dHRvbihCdXR0b24uTEVGVCk7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKHJpZ2h0KHcpKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUoZG93bihsKSk7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKGxlZnQodykpO1xyXG4gICAgYXdhaXQgbW91c2UubW92ZSh1cChsKSk7XHJcbiAgICBhd2FpdCBtb3VzZS5yZWxlYXNlQnV0dG9uKEJ1dHRvbi5MRUZUKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIG1vdmVNb3VzZUxlZnQsXHJcbiAgICBtb3ZlTW91c2VSaWdodCxcclxuICAgIG1vdmVNb3VzZVVwLFxyXG4gICAgbW92ZU1vdXNlRG93bixcclxuICAgIGdldE1vdXNlUG9zaXRpb24sXHJcbiAgICBkcmF3Q2lyY2xlTW91c2UsXHJcbiAgICBkcmF3U3F1YXJlTW91c2UsXHJcbiAgICBkcmF3UmVjdGFuZ2xlTW91c2UsXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgICBkcmF3Q2lyY2xlTW91c2UsXHJcbiAgICBkcmF3UmVjdGFuZ2xlTW91c2UsXHJcbiAgICBkcmF3U3F1YXJlTW91c2UsXHJcbiAgICBnZXRNb3VzZVBvc2l0aW9uLFxyXG4gICAgbW92ZU1vdXNlRG93bixcclxuICAgIG1vdmVNb3VzZUxlZnQsXHJcbiAgICBtb3ZlTW91c2VSaWdodCxcclxuICAgIG1vdmVNb3VzZVVwLFxyXG59IGZyb20gJy4vbW91c2VNb3ZlbWVudCc7XHJcbmltcG9ydCB7IGdldFByaW50U2NyZWVuIH0gZnJvbSAnLi9zY3JlZW5Db250cm9sJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29tbWFuZChkYXRhOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGFyciA9IGRhdGEuc3BsaXQoJyAnKTtcclxuICAgIGNvbnN0IGNvbW1hbmQgPSBhcnJbMF07XHJcbiAgICBjb25zdCB2YWx1ZSA9IGFyclsxXTtcclxuICAgIGNvbnN0IHZhbHVlMiA9IGFyclsyXTtcclxuXHJcbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgICBjYXNlICdtb3VzZV91cCc6XHJcbiAgICAgICAgICAgIGF3YWl0IG1vdmVNb3VzZVVwKHZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW91c2VfZG93bic6XHJcbiAgICAgICAgICAgIGF3YWl0IG1vdmVNb3VzZURvd24odmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtb3VzZV9sZWZ0JzpcclxuICAgICAgICAgICAgYXdhaXQgbW92ZU1vdXNlTGVmdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21vdXNlX3JpZ2h0JzpcclxuICAgICAgICAgICAgYXdhaXQgbW92ZU1vdXNlUmlnaHQodmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtb3VzZV9wb3NpdGlvbic6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRNb3VzZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgY2FzZSAnZHJhd19jaXJjbGUnOlxyXG4gICAgICAgICAgICBhd2FpdCBkcmF3Q2lyY2xlTW91c2UodmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkcmF3X3NxdWFyZSc6XHJcbiAgICAgICAgICAgIGF3YWl0IGRyYXdTcXVhcmVNb3VzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2RyYXdfcmVjdGFuZ2xlJzpcclxuICAgICAgICAgICAgYXdhaXQgZHJhd1JlY3RhbmdsZU1vdXNlKHZhbHVlLCB2YWx1ZTIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdwcm50X3Njcm4nOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UHJpbnRTY3JlZW4oKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVW5rbm93biBjb21tYW5kJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcnNlQ29tbWFuZDtcclxuIiwiaW1wb3J0IEppbXAgZnJvbSAnamltcC9lcyc7XHJcbmltcG9ydCB7IFJlZ2lvbiwgbW91c2UsIHNjcmVlbiB9IGZyb20gJ0BudXQtdHJlZS9udXQtanMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UHJpbnRTY3JlZW4oKSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGF3YWl0IG1vdXNlLmdldFBvc2l0aW9uKCk7XHJcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IDIwMDtcclxuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IDIwMDtcclxuXHJcbiAgICBjb25zdCByZWdpb24gPSBuZXcgUmVnaW9uKHBvc2l0aW9uLnggLSBjbGllbnRXaWR0aCAvIDIsIHBvc2l0aW9uLnkgLSBjbGllbnRIZWlnaHQgLyAyLCBjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0KTtcclxuICAgIGNvbnN0IEJHUkltYWdlID0gYXdhaXQgc2NyZWVuLmdyYWJSZWdpb24ocmVnaW9uKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIHdpZHRoLCBoZWlnaHQgfSA9IGF3YWl0IEJHUkltYWdlLnRvUkdCKCk7XHJcblxyXG4gICAgY29uc3QgamltcE9iaiA9IG5ldyBKaW1wKHsgZGF0YSwgd2lkdGgsIGhlaWdodCB9KTtcclxuICAgIGNvbnN0IHBuZzY0ID0gYXdhaXQgamltcE9iai5nZXRCYXNlNjRBc3luYyhKaW1wLk1JTUVfUE5HKTtcclxuICAgIGNvbnN0IHBuZzY0c2hvcnQgPSBwbmc2NC5yZXBsYWNlKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsJywgJycpO1xyXG5cclxuICAgIHJldHVybiBgcHJudF9zY3JuICR7cG5nNjRzaG9ydH1gO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRQcmludFNjcmVlbiB9O1xyXG4iLCJmdW5jdGlvbiB0cnVuY2F0ZVN0cmluZyhzdHI6IHN0cmluZywgbGltaXQgPSA1MCkge1xyXG4gICAgcmV0dXJuIHN0ci5sZW5ndGggPiBsaW1pdCA/IHN0ci5zbGljZSgwLCBsaW1pdCAtIDEpICsgJ+KApicgOiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRydW5jYXRlU3RyaW5nIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBudXQtdHJlZS9udXQtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImppbXAvZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGh0dHBTZXJ2ZXIgfSBmcm9tICcuL2h0dHBfc2VydmVyL2h0dHBfc2VydmVyJztcbmltcG9ydCB7IGNyZWF0ZVdlYlNvY2tldFN0cmVhbSwgV2ViU29ja2V0U2VydmVyIH0gZnJvbSAnd3MnO1xuaW1wb3J0IG5vZGVtb24gZnJvbSAnbm9kZW1vbic7XG5pbXBvcnQgcGFyc2VDb21tYW5kIGZyb20gJy4vbGliL3BhcnNlQ29tbWFuZCc7XG5pbXBvcnQgeyB0cnVuY2F0ZVN0cmluZyB9IGZyb20gJy4vbGliL3V0aWxzJztcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmRvdGVudi5jb25maWcoKTtcblxuY29uc3QgSFRUUF9QT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MTgxO1xuY29uc3QgV0VCU09DS0VUX1BPUlQgPSBOdW1iZXIocHJvY2Vzcy5lbnYuV0VCX1NPQ0tFVF9QT1JUKSB8fCA4MDgwO1xuY29uc29sZS5sb2coYFN0YXJ0IEhUVFAgU2VydmVyIG9uIHRoZSAke0hUVFBfUE9SVH0gcG9ydCEgKGh0dHA6Ly9sb2NhbGhvc3Q6JHtIVFRQX1BPUlR9KWApO1xuXG5odHRwU2VydmVyLmxpc3RlbihIVFRQX1BPUlQpO1xuXG5jb25zdCB3c3MgPSBuZXcgV2ViU29ja2V0U2VydmVyKHsgcG9ydDogV0VCU09DS0VUX1BPUlQgfSk7XG5jb25zb2xlLmxvZyhgU3RhcnQgV2ViU29ja2V0IFNlcnZlciBvbiB0aGUgJHtXRUJTT0NLRVRfUE9SVH0gcG9ydCEgKGh0dHA6Ly9sb2NhbGhvc3Q6JHtXRUJTT0NLRVRfUE9SVH0pYCk7XG5cbndzcy5vbignY29ubmVjdGlvbicsICh3cykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBDbGllbnRzIGNvbm5lY3RlZDogJHt3c3MuY2xpZW50cy5zaXplfWApO1xuXG4gICAgY29uc3QgZHVwbGV4ID0gY3JlYXRlV2ViU29ja2V0U3RyZWFtKHdzLCB7XG4gICAgICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICAgICAgICBkZWNvZGVTdHJpbmdzOiBmYWxzZSxcbiAgICAgICAgcmVhZGFibGVPYmplY3RNb2RlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZU9iamVjdE1vZGU6IHRydWUsXG4gICAgfSk7XG5cbiAgICBkdXBsZXgub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNodW5rLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGA8LSAke2NvbW1hbmR9YCk7XG5cbiAgICAgICAgcGFyc2VDb21tYW5kKGNvbW1hbmQpXG4gICAgICAgICAgICAudGhlbigoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhbnN3ZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1cGxleC53cml0ZShjb21tYW5kKTsgLy9lY2hvXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHVwbGV4LndyaXRlKGFuc3dlcik7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0QW5zd2VyID0gdHJ1bmNhdGVTdHJpbmcoYW5zd2VyKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgLT4gJHtmb3JtYXRBbnN3ZXJ9YCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgIH0pO1xuXG4gICAgd3Mub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2xpZW50IGRpc2Nvbm5lY3RlZCcpO1xuICAgIH0pO1xufSk7XG5cbi8vaGFyZCBkaXNjb25uZWN0IGNsaWVudHMgZnJvbSB3ZWIgc29ja2V0XG53c3Mub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgIHdzcy5jbGllbnRzLmZvckVhY2goKHNvY2tldCkgPT4ge1xuICAgICAgICBzb2NrZXQuY2xvc2UoKTtcblxuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChzb2NrZXQucmVhZHlTdGF0ZSA9PT0gc29ja2V0Lk9QRU4gfHwgc29ja2V0LnJlYWR5U3RhdGUgPT09IHNvY2tldC5DTE9TSU5HKSB7XG4gICAgICAgICAgICAgICAgc29ja2V0LnRlcm1pbmF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5wcm9jZXNzLm9uKCdTSUdJTlQnLCAoKSA9PiB7XG4gICAgbm9kZW1vbi5lbWl0KCdxdWl0Jyk7XG4gICAgcHJvY2Vzcy5leGl0KDApO1xufSk7XG5cbnByb2Nlc3Mub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xuICAgIG5vZGVtb24uZW1pdCgncXVpdCcpO1xuICAgIHByb2Nlc3MuZXhpdChjb2RlKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9