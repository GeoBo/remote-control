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
/* harmony export */   "getPrintScreen": () => (/* binding */ getPrintScreen),
/* harmony export */   "moveMouseDown": () => (/* binding */ moveMouseDown),
/* harmony export */   "moveMouseLeft": () => (/* binding */ moveMouseLeft),
/* harmony export */   "moveMouseRight": () => (/* binding */ moveMouseRight),
/* harmony export */   "moveMouseUp": () => (/* binding */ moveMouseUp)
/* harmony export */ });
/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nut-tree/nut-js */ "@nut-tree/nut-js");
/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jimp_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimp/es */ "jimp/es");
/* harmony import */ var jimp_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jimp_es__WEBPACK_IMPORTED_MODULE_1__);


_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.config.mouseSpeed = 2000;
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
    _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.config.mouseSpeed = 2000;
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
async function getPrintScreen() {
    const position = await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.getPosition();
    const clientWidth = 200;
    const clientHeight = 200;
    const region = new _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Region(position.x - clientWidth / 2, position.y - clientHeight / 2, clientWidth, clientHeight);
    const { data, width, height } = await _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.screen.grabRegion(region);
    const jimpObj = new (jimp_es__WEBPACK_IMPORTED_MODULE_1___default())({ data, width, height });
    const png64 = await jimpObj.getBase64Async((jimp_es__WEBPACK_IMPORTED_MODULE_1___default().MIME_PNG));
    const png64short = png64.replace('data:image/png;base64,', '');
    //console.log(png64short.length);
    return `prnt_scrn ${png64short}`;
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
        case 'prnt_scrn':
            return (0,_mouseMovement__WEBPACK_IMPORTED_MODULE_0__.getPrintScreen)();
        default:
            console.log('Unknown command');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseCommand);


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
    ws.on('message', (data) => {
        const command = data.toString();
        console.log(`<- ${command}`);
        (0,_lib_parseCommand__WEBPACK_IMPORTED_MODULE_3__["default"])(command)
            .then((answer) => {
            if (typeof answer !== 'string') {
                ws.send(command);
                return;
            }
            ws.send(answer);
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
    console.log('!!!');
    wss.clients.forEach((socket) => {
        console.log('!!!');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsQ0FBQztBQUVILHlDQUF5QztBQUN6QyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUMzRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDdEIsbURBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUN4QixtREFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93c190YXNrLy4vc3JjL2h0dHBfc2VydmVyL2h0dHBfc2VydmVyLnRzIiwid2VicGFjazovL3dzX3Rhc2svLi9zcmMvbGliL21vdXNlTW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vd3NfdGFzay8uL3NyYy9saWIvcGFyc2VDb21tYW5kLnRzIiwid2VicGFjazovL3dzX3Rhc2svLi9zcmMvbGliL3V0aWxzLnRzIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgY29tbW9uanMgXCJAbnV0LXRyZWUvbnV0LWpzXCIiLCJ3ZWJwYWNrOi8vd3NfdGFzay9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgY29tbW9uanMgXCJqaW1wL2VzXCIiLCJ3ZWJwYWNrOi8vd3NfdGFzay9leHRlcm5hbCBjb21tb25qcyBcIm5vZGVtb25cIiIsIndlYnBhY2s6Ly93c190YXNrL2V4dGVybmFsIGNvbW1vbmpzIFwid3NcIiIsIndlYnBhY2s6Ly93c190YXNrL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImh0dHBcIiIsIndlYnBhY2s6Ly93c190YXNrL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vd3NfdGFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93c190YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dzX3Rhc2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dzX3Rhc2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93c190YXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd3NfdGFzay8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcblxuZXhwb3J0IGNvbnN0IGh0dHBTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICBjb25zdCBfX2Rpcm5hbWUgPSBwYXRoLnJlc29sdmUocGF0aC5kaXJuYW1lKCcnKSk7XG4gICAgY29uc3QgZmlsZV9wYXRoID0gX19kaXJuYW1lICsgKHJlcS51cmwgPT09ICcvJyA/ICcvZnJvbnQvaW5kZXguaHRtbCcgOiAnL2Zyb250JyArIHJlcS51cmwpO1xuICAgIGZzLnJlYWRGaWxlKGZpbGVfcGF0aCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXMud3JpdGVIZWFkKDQwNCk7XG4gICAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlcy53cml0ZUhlYWQoMjAwKTtcbiAgICAgICAgcmVzLmVuZChkYXRhKTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgbW91c2UsIGxlZnQsIHJpZ2h0LCB1cCwgZG93biwgc3RyYWlnaHRUbywgUG9pbnQsIEJ1dHRvbiwgc2NyZWVuLCBSZWdpb24gfSBmcm9tICdAbnV0LXRyZWUvbnV0LWpzJztcclxuaW1wb3J0IEppbXAgZnJvbSAnamltcC9lcyc7XHJcbm1vdXNlLmNvbmZpZy5tb3VzZVNwZWVkID0gMjAwMDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1vdmVNb3VzZUxlZnQoZGF0YTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKGxlZnQoTnVtYmVyKGRhdGEpKSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1vdmVNb3VzZVJpZ2h0KGRhdGE6IHN0cmluZykge1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShyaWdodChOdW1iZXIoZGF0YSkpKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbW92ZU1vdXNlVXAoZGF0YTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKHVwKE51bWJlcihkYXRhKSkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtb3ZlTW91c2VEb3duKGRhdGE6IHN0cmluZykge1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShkb3duKE51bWJlcihkYXRhKSkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uKCkge1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBtb3VzZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgcmV0dXJuIGBtb3VzZV9wb3NpdGlvbiAke3Bvc2l0aW9uLnh9LCR7cG9zaXRpb24ueX1gO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkcmF3Q2lyY2xlTW91c2UocmFkaXVzOiBzdHJpbmcpIHtcclxuICAgIGxldCB4OiBudW1iZXI7XHJcbiAgICBsZXQgeTogbnVtYmVyO1xyXG4gICAgY29uc3QgciA9IE51bWJlcihyYWRpdXMpO1xyXG4gICAgY29uc3QgcHJlc2ljaW9uID0gMTAwMDtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgbW91c2UuZ2V0UG9zaXRpb24oKTtcclxuICAgIG1vdXNlLmNvbmZpZy5tb3VzZVNwZWVkID0gMTAwMDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGguUEkgKiAyOyBpICs9IChNYXRoLlBJICogMikgLyBwcmVzaWNpb24pIHtcclxuICAgICAgICB4ID0gcG9zaXRpb24ueCArIHIgKiBNYXRoLnNpbihpKTtcclxuICAgICAgICB5ID0gcG9zaXRpb24ueSArIHIgKiBNYXRoLmNvcyhpKTtcclxuICAgICAgICBpZiAoIWkpIHtcclxuICAgICAgICAgICAgYXdhaXQgbW91c2Uuc2V0UG9zaXRpb24obmV3IFBvaW50KHgsIHkpKTtcclxuICAgICAgICAgICAgYXdhaXQgbW91c2UucHJlc3NCdXR0b24oQnV0dG9uLkxFRlQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBtb3VzZS5tb3ZlKHN0cmFpZ2h0VG8obmV3IFBvaW50KHgsIHkpKSk7XHJcbiAgICB9XHJcbiAgICBtb3VzZS5jb25maWcubW91c2VTcGVlZCA9IDIwMDA7XHJcbiAgICBhd2FpdCBtb3VzZS5yZWxlYXNlQnV0dG9uKEJ1dHRvbi5MRUZUKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZHJhd1NxdWFyZU1vdXNlKHdpZHRoOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHcgPSBOdW1iZXIod2lkdGgpO1xyXG4gICAgYXdhaXQgbW91c2UucHJlc3NCdXR0b24oQnV0dG9uLkxFRlQpO1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShyaWdodCh3KSk7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKGRvd24odykpO1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShsZWZ0KHcpKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUodXAodykpO1xyXG4gICAgYXdhaXQgbW91c2UucmVsZWFzZUJ1dHRvbihCdXR0b24uTEVGVCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRyYXdSZWN0YW5nbGVNb3VzZSh3aWR0aDogc3RyaW5nLCBsZW5ndGg6IHN0cmluZykge1xyXG4gICAgY29uc3QgdyA9IE51bWJlcih3aWR0aCk7XHJcbiAgICBjb25zdCBsID0gTnVtYmVyKGxlbmd0aCk7XHJcblxyXG4gICAgYXdhaXQgbW91c2UucHJlc3NCdXR0b24oQnV0dG9uLkxFRlQpO1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShyaWdodCh3KSk7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKGRvd24obCkpO1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShsZWZ0KHcpKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUodXAobCkpO1xyXG4gICAgYXdhaXQgbW91c2UucmVsZWFzZUJ1dHRvbihCdXR0b24uTEVGVCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFByaW50U2NyZWVuKCkge1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBtb3VzZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgY29uc3QgY2xpZW50V2lkdGggPSAyMDA7XHJcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSAyMDA7XHJcblxyXG4gICAgY29uc3QgcmVnaW9uID0gbmV3IFJlZ2lvbihwb3NpdGlvbi54IC0gY2xpZW50V2lkdGggLyAyLCBwb3NpdGlvbi55IC0gY2xpZW50SGVpZ2h0IC8gMiwgY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIHdpZHRoLCBoZWlnaHQgfSA9IGF3YWl0IHNjcmVlbi5ncmFiUmVnaW9uKHJlZ2lvbik7XHJcblxyXG4gICAgY29uc3QgamltcE9iaiA9IG5ldyBKaW1wKHsgZGF0YSwgd2lkdGgsIGhlaWdodCB9KTtcclxuICAgIGNvbnN0IHBuZzY0ID0gYXdhaXQgamltcE9iai5nZXRCYXNlNjRBc3luYyhKaW1wLk1JTUVfUE5HKTtcclxuICAgIGNvbnN0IHBuZzY0c2hvcnQgPSBwbmc2NC5yZXBsYWNlKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsJywgJycpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhwbmc2NHNob3J0Lmxlbmd0aCk7XHJcbiAgICByZXR1cm4gYHBybnRfc2NybiAke3BuZzY0c2hvcnR9YDtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIG1vdmVNb3VzZUxlZnQsXHJcbiAgICBtb3ZlTW91c2VSaWdodCxcclxuICAgIG1vdmVNb3VzZVVwLFxyXG4gICAgbW92ZU1vdXNlRG93bixcclxuICAgIGdldE1vdXNlUG9zaXRpb24sXHJcbiAgICBkcmF3Q2lyY2xlTW91c2UsXHJcbiAgICBkcmF3U3F1YXJlTW91c2UsXHJcbiAgICBkcmF3UmVjdGFuZ2xlTW91c2UsXHJcbiAgICBnZXRQcmludFNjcmVlbixcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICAgIGRyYXdDaXJjbGVNb3VzZSxcclxuICAgIGRyYXdSZWN0YW5nbGVNb3VzZSxcclxuICAgIGRyYXdTcXVhcmVNb3VzZSxcclxuICAgIGdldE1vdXNlUG9zaXRpb24sXHJcbiAgICBnZXRQcmludFNjcmVlbixcclxuICAgIG1vdmVNb3VzZURvd24sXHJcbiAgICBtb3ZlTW91c2VMZWZ0LFxyXG4gICAgbW92ZU1vdXNlUmlnaHQsXHJcbiAgICBtb3ZlTW91c2VVcCxcclxufSBmcm9tICcuL21vdXNlTW92ZW1lbnQnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VDb21tYW5kKGRhdGE6IHN0cmluZykge1xyXG4gICAgY29uc3QgYXJyID0gZGF0YS5zcGxpdCgnICcpO1xyXG4gICAgY29uc3QgY29tbWFuZCA9IGFyclswXTtcclxuICAgIGNvbnN0IHZhbHVlID0gYXJyWzFdO1xyXG4gICAgY29uc3QgdmFsdWUyID0gYXJyWzJdO1xyXG5cclxuICAgIHN3aXRjaCAoY29tbWFuZCkge1xyXG4gICAgICAgIGNhc2UgJ21vdXNlX3VwJzpcclxuICAgICAgICAgICAgYXdhaXQgbW92ZU1vdXNlVXAodmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtb3VzZV9kb3duJzpcclxuICAgICAgICAgICAgYXdhaXQgbW92ZU1vdXNlRG93bih2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21vdXNlX2xlZnQnOlxyXG4gICAgICAgICAgICBhd2FpdCBtb3ZlTW91c2VMZWZ0KHZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW91c2VfcmlnaHQnOlxyXG4gICAgICAgICAgICBhd2FpdCBtb3ZlTW91c2VSaWdodCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21vdXNlX3Bvc2l0aW9uJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldE1vdXNlUG9zaXRpb24oKTtcclxuICAgICAgICBjYXNlICdkcmF3X2NpcmNsZSc6XHJcbiAgICAgICAgICAgIGF3YWl0IGRyYXdDaXJjbGVNb3VzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2RyYXdfc3F1YXJlJzpcclxuICAgICAgICAgICAgYXdhaXQgZHJhd1NxdWFyZU1vdXNlKHZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZHJhd19yZWN0YW5nbGUnOlxyXG4gICAgICAgICAgICBhd2FpdCBkcmF3UmVjdGFuZ2xlTW91c2UodmFsdWUsIHZhbHVlMik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3BybnRfc2Nybic6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRQcmludFNjcmVlbigpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVbmtub3duIGNvbW1hbmQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFyc2VDb21tYW5kO1xyXG4iLCJmdW5jdGlvbiB0cnVuY2F0ZVN0cmluZyhzdHI6IHN0cmluZywgbGltaXQgPSA1MCkge1xyXG4gICAgcmV0dXJuIHN0ci5sZW5ndGggPiBsaW1pdCA/IHN0ci5zbGljZSgwLCBsaW1pdCAtIDEpICsgJ+KApicgOiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRydW5jYXRlU3RyaW5nIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBudXQtdHJlZS9udXQtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImppbXAvZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGh0dHBTZXJ2ZXIgfSBmcm9tICcuL2h0dHBfc2VydmVyL2h0dHBfc2VydmVyJztcbmltcG9ydCB7IFdlYlNvY2tldFNlcnZlciB9IGZyb20gJ3dzJztcbmltcG9ydCBub2RlbW9uIGZyb20gJ25vZGVtb24nO1xuaW1wb3J0IHBhcnNlQ29tbWFuZCBmcm9tICcuL2xpYi9wYXJzZUNvbW1hbmQnO1xuaW1wb3J0IHsgdHJ1bmNhdGVTdHJpbmcgfSBmcm9tICcuL2xpYi91dGlscyc7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IEhUVFBfUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODE4MTtcbmNvbnN0IFdFQlNPQ0tFVF9QT1JUID0gTnVtYmVyKHByb2Nlc3MuZW52LldFQl9TT0NLRVRfUE9SVCkgfHwgODA4MDtcbmNvbnNvbGUubG9nKGBTdGFydCBIVFRQIFNlcnZlciBvbiB0aGUgJHtIVFRQX1BPUlR9IHBvcnQhIChodHRwOi8vbG9jYWxob3N0OiR7SFRUUF9QT1JUfSlgKTtcblxuaHR0cFNlcnZlci5saXN0ZW4oSFRUUF9QT1JUKTtcblxuY29uc3Qgd3NzID0gbmV3IFdlYlNvY2tldFNlcnZlcih7IHBvcnQ6IFdFQlNPQ0tFVF9QT1JUIH0pO1xuY29uc29sZS5sb2coYFN0YXJ0IFdlYlNvY2tldCBTZXJ2ZXIgb24gdGhlICR7V0VCU09DS0VUX1BPUlR9IHBvcnQhIChodHRwOi8vbG9jYWxob3N0OiR7V0VCU09DS0VUX1BPUlR9KWApO1xuXG53c3Mub24oJ2Nvbm5lY3Rpb24nLCAod3MpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgQ2xpZW50cyBjb25uZWN0ZWQ6ICR7d3NzLmNsaWVudHMuc2l6ZX1gKTtcbiAgICB3cy5vbignbWVzc2FnZScsIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGA8LSAke2NvbW1hbmR9YCk7XG4gICAgICAgIHBhcnNlQ29tbWFuZChjb21tYW5kKVxuICAgICAgICAgICAgLnRoZW4oKGFuc3dlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYW5zd2VyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB3cy5zZW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdzLnNlbmQoYW5zd2VyKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXRBbnN3ZXIgPSB0cnVuY2F0ZVN0cmluZyhhbnN3ZXIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAtPiAke2Zvcm1hdEFuc3dlcn1gKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICAgfSk7XG5cbiAgICB3cy5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQgZGlzY29ubmVjdGVkJyk7XG4gICAgfSk7XG59KTtcblxuLy9oYXJkIGRpc2Nvbm5lY3QgY2xpZW50cyBmcm9tIHdlYiBzb2NrZXRcbndzcy5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJyEhIScpO1xuICAgIHdzcy5jbGllbnRzLmZvckVhY2goKHNvY2tldCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnISEhJyk7XG4gICAgICAgIHNvY2tldC5jbG9zZSgpO1xuXG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNvY2tldC5yZWFkeVN0YXRlID09PSBzb2NrZXQuT1BFTiB8fCBzb2NrZXQucmVhZHlTdGF0ZSA9PT0gc29ja2V0LkNMT1NJTkcpIHtcbiAgICAgICAgICAgICAgICBzb2NrZXQudGVybWluYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbnByb2Nlc3Mub24oJ1NJR0lOVCcsICgpID0+IHtcbiAgICBub2RlbW9uLmVtaXQoJ3F1aXQnKTtcbiAgICBwcm9jZXNzLmV4aXQoMCk7XG59KTtcblxucHJvY2Vzcy5vbignZXhpdCcsIChjb2RlKSA9PiB7XG4gICAgbm9kZW1vbi5lbWl0KCdxdWl0Jyk7XG4gICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=