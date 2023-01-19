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
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils */ "./src/lib/utils.ts");





dotenv__WEBPACK_IMPORTED_MODULE_2___default().config();
const HTTP_PORT = process.env.PORT || 8181;
console.log(`Start static http server on the ${HTTP_PORT} port!`);
_http_server_http_server__WEBPACK_IMPORTED_MODULE_0__.httpServer.listen(HTTP_PORT);
const wss = new ws__WEBPACK_IMPORTED_MODULE_1__.WebSocketServer({ port: 8080 });
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (data) => {
        const command = data.toString();
        console.log(`<- ${command}`);
        (0,_lib_parseCommand__WEBPACK_IMPORTED_MODULE_3__["default"])(command)
            .then((answer) => {
            if (typeof answer !== 'string')
                return;
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDSTtBQUNBO0FBRXRCLE1BQU0sVUFBVSxHQUFHLDhDQUFpQixDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUc7SUFDMUQsTUFBTSxTQUFTLEdBQUcseUNBQVksQ0FBQyx5Q0FBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakQsTUFBTSxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNGLHdDQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7UUFDdEMsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE9BQU87U0FDVjtRQUNELEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQndHO0FBQ2hGO0FBQzNCLGlDQUFpQztBQUVqQyxLQUFLLFVBQVUsYUFBYSxDQUFDLElBQVk7SUFDckMsTUFBTSx3REFBVSxDQUFDLHNEQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsS0FBSyxVQUFVLGNBQWMsQ0FBQyxJQUFZO0lBQ3RDLE1BQU0sd0RBQVUsQ0FBQyx1REFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVELEtBQUssVUFBVSxXQUFXLENBQUMsSUFBWTtJQUNuQyxNQUFNLHdEQUFVLENBQUMsb0RBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxLQUFLLFVBQVUsYUFBYSxDQUFDLElBQVk7SUFDckMsTUFBTSx3REFBVSxDQUFDLHNEQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsS0FBSyxVQUFVLGdCQUFnQjtJQUMzQixNQUFNLFFBQVEsR0FBRyxNQUFNLCtEQUFpQixFQUFFLENBQUM7SUFDM0MsT0FBTyxrQkFBa0IsUUFBUSxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDeEQsQ0FBQztBQUVELEtBQUssVUFBVSxlQUFlLENBQUMsTUFBYztJQUN6QyxJQUFJLENBQVMsQ0FBQztJQUNkLElBQUksQ0FBUyxDQUFDO0lBQ2QsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQztJQUN2QixNQUFNLFFBQVEsR0FBRyxNQUFNLCtEQUFpQixFQUFFLENBQUM7SUFFM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFO1FBQzdELENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDSixNQUFNLCtEQUFpQixDQUFDLElBQUksbURBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxNQUFNLCtEQUFpQixDQUFDLHlEQUFXLENBQUMsQ0FBQztTQUN4QztRQUNELE1BQU0sd0RBQVUsQ0FBQyw0REFBVSxDQUFDLElBQUksbURBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pEO0lBQ0QsTUFBTSxpRUFBbUIsQ0FBQyx5REFBVyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVELEtBQUssVUFBVSxlQUFlLENBQUMsS0FBYTtJQUN4QyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsTUFBTSwrREFBaUIsQ0FBQyx5REFBVyxDQUFDLENBQUM7SUFDckMsTUFBTSx3REFBVSxDQUFDLHVEQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixNQUFNLHdEQUFVLENBQUMsc0RBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLE1BQU0sd0RBQVUsQ0FBQyxzREFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsTUFBTSx3REFBVSxDQUFDLG9EQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixNQUFNLGlFQUFtQixDQUFDLHlEQUFXLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsS0FBSyxVQUFVLGtCQUFrQixDQUFDLEtBQWEsRUFBRSxNQUFjO0lBQzNELE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFekIsTUFBTSwrREFBaUIsQ0FBQyx5REFBVyxDQUFDLENBQUM7SUFDckMsTUFBTSx3REFBVSxDQUFDLHVEQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixNQUFNLHdEQUFVLENBQUMsc0RBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLE1BQU0sd0RBQVUsQ0FBQyxzREFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsTUFBTSx3REFBVSxDQUFDLG9EQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixNQUFNLGlFQUFtQixDQUFDLHlEQUFXLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsS0FBSyxVQUFVLGNBQWM7SUFDekIsTUFBTSxRQUFRLEdBQUcsTUFBTSwrREFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUN4QixNQUFNLFlBQVksR0FBRyxHQUFHLENBQUM7SUFFekIsTUFBTSxNQUFNLEdBQUcsSUFBSSxvREFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsV0FBVyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2xILE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sK0RBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEUsTUFBTSxPQUFPLEdBQUcsSUFBSSxnREFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sS0FBSyxHQUFHLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyx5REFBYSxDQUFDLENBQUM7SUFDMUQsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvRCxpQ0FBaUM7SUFDakMsT0FBTyxhQUFhLFVBQVUsRUFBRSxDQUFDO0FBQ3JDLENBQUM7QUFZQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGdUI7QUFFekIsS0FBSyxVQUFVLFlBQVksQ0FBQyxJQUFZO0lBQ3BDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEIsUUFBUSxPQUFPLEVBQUU7UUFDYixLQUFLLFVBQVU7WUFDWCxNQUFNLDJEQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsTUFBTTtRQUNWLEtBQUssWUFBWTtZQUNiLE1BQU0sNkRBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixNQUFNO1FBQ1YsS0FBSyxZQUFZO1lBQ2IsTUFBTSw2REFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLE1BQU07UUFDVixLQUFLLGFBQWE7WUFDZCxNQUFNLDhEQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsTUFBTTtRQUNWLEtBQUssZ0JBQWdCO1lBQ2pCLE9BQU8sZ0VBQWdCLEVBQUUsQ0FBQztRQUM5QixLQUFLLGFBQWE7WUFDZCxNQUFNLCtEQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsTUFBTTtRQUNWLEtBQUssYUFBYTtZQUNkLE1BQU0sK0RBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixNQUFNO1FBQ1YsS0FBSyxnQkFBZ0I7WUFDakIsTUFBTSxrRUFBa0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEMsTUFBTTtRQUNWLEtBQUssV0FBVztZQUNaLE9BQU8sOERBQWMsRUFBRSxDQUFDO1FBQzVCO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ3RDO0FBQ0wsQ0FBQztBQUVELGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakQ1QixTQUFTLGNBQWMsQ0FBQyxHQUFXLEVBQUUsS0FBSyxHQUFHLEVBQUU7SUFDM0MsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3BFLENBQUM7QUFFeUI7Ozs7Ozs7Ozs7O0FDSjFCOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnVEO0FBQ2xCO0FBQ1Q7QUFDa0I7QUFDRDtBQUM3QyxvREFBYSxFQUFFLENBQUM7QUFFaEIsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLFNBQVMsUUFBUSxDQUFDLENBQUM7QUFDbEUsdUVBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSwrQ0FBZSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFFaEQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFFaEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN0QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDN0IsNkRBQVksQ0FBQyxPQUFPLENBQUM7YUFDaEIsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDYixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVE7Z0JBQUUsT0FBTztZQUN2QyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sWUFBWSxHQUFHLDBEQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3NfdGFzay8uL3NyYy9odHRwX3NlcnZlci9odHRwX3NlcnZlci50cyIsIndlYnBhY2s6Ly93c190YXNrLy4vc3JjL2xpYi9tb3VzZU1vdmVtZW50LnRzIiwid2VicGFjazovL3dzX3Rhc2svLi9zcmMvbGliL3BhcnNlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly93c190YXNrLy4vc3JjL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly93c190YXNrL2V4dGVybmFsIGNvbW1vbmpzIFwiQG51dC10cmVlL251dC1qc1wiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly93c190YXNrL2V4dGVybmFsIGNvbW1vbmpzIFwiamltcC9lc1wiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgY29tbW9uanMgXCJ3c1wiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vd3NfdGFzay9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL3dzX3Rhc2svZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly93c190YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dzX3Rhc2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd3NfdGFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd3NfdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dzX3Rhc2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93c190YXNrLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuXG5leHBvcnQgY29uc3QgaHR0cFNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIGNvbnN0IF9fZGlybmFtZSA9IHBhdGgucmVzb2x2ZShwYXRoLmRpcm5hbWUoJycpKTtcbiAgICBjb25zdCBmaWxlX3BhdGggPSBfX2Rpcm5hbWUgKyAocmVxLnVybCA9PT0gJy8nID8gJy9mcm9udC9pbmRleC5odG1sJyA6ICcvZnJvbnQnICsgcmVxLnVybCk7XG4gICAgZnMucmVhZEZpbGUoZmlsZV9wYXRoLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJlcy53cml0ZUhlYWQoNDA0KTtcbiAgICAgICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzLndyaXRlSGVhZCgyMDApO1xuICAgICAgICByZXMuZW5kKGRhdGEpO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBtb3VzZSwgbGVmdCwgcmlnaHQsIHVwLCBkb3duLCBzdHJhaWdodFRvLCBQb2ludCwgQnV0dG9uLCBzY3JlZW4sIFJlZ2lvbiB9IGZyb20gJ0BudXQtdHJlZS9udXQtanMnO1xyXG5pbXBvcnQgSmltcCBmcm9tICdqaW1wL2VzJztcclxuLy9tb3VzZS5jb25maWcubW91c2VTcGVlZCA9IDIwMDA7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtb3ZlTW91c2VMZWZ0KGRhdGE6IHN0cmluZykge1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShsZWZ0KE51bWJlcihkYXRhKSkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtb3ZlTW91c2VSaWdodChkYXRhOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUocmlnaHQoTnVtYmVyKGRhdGEpKSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1vdmVNb3VzZVVwKGRhdGE6IHN0cmluZykge1xyXG4gICAgYXdhaXQgbW91c2UubW92ZSh1cChOdW1iZXIoZGF0YSkpKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbW92ZU1vdXNlRG93bihkYXRhOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUoZG93bihOdW1iZXIoZGF0YSkpKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TW91c2VQb3NpdGlvbigpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgbW91c2UuZ2V0UG9zaXRpb24oKTtcclxuICAgIHJldHVybiBgbW91c2VfcG9zaXRpb24gJHtwb3NpdGlvbi54fSwke3Bvc2l0aW9uLnl9YDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZHJhd0NpcmNsZU1vdXNlKHJhZGl1czogc3RyaW5nKSB7XHJcbiAgICBsZXQgeDogbnVtYmVyO1xyXG4gICAgbGV0IHk6IG51bWJlcjtcclxuICAgIGNvbnN0IHIgPSBOdW1iZXIocmFkaXVzKTtcclxuICAgIGNvbnN0IHByZXNpY2lvbiA9IDEwMDA7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGF3YWl0IG1vdXNlLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLlBJICogMjsgaSArPSAoTWF0aC5QSSAqIDIpIC8gcHJlc2ljaW9uKSB7XHJcbiAgICAgICAgeCA9IHBvc2l0aW9uLnggKyByICogTWF0aC5zaW4oaSk7XHJcbiAgICAgICAgeSA9IHBvc2l0aW9uLnkgKyByICogTWF0aC5jb3MoaSk7XHJcbiAgICAgICAgaWYgKCFpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1vdXNlLnNldFBvc2l0aW9uKG5ldyBQb2ludCh4LCB5KSk7XHJcbiAgICAgICAgICAgIGF3YWl0IG1vdXNlLnByZXNzQnV0dG9uKEJ1dHRvbi5MRUZUKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbW91c2UubW92ZShzdHJhaWdodFRvKG5ldyBQb2ludCh4LCB5KSkpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgbW91c2UucmVsZWFzZUJ1dHRvbihCdXR0b24uTEVGVCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRyYXdTcXVhcmVNb3VzZSh3aWR0aDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB3ID0gTnVtYmVyKHdpZHRoKTtcclxuICAgIGF3YWl0IG1vdXNlLnByZXNzQnV0dG9uKEJ1dHRvbi5MRUZUKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUocmlnaHQodykpO1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShkb3duKHcpKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUobGVmdCh3KSk7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKHVwKHcpKTtcclxuICAgIGF3YWl0IG1vdXNlLnJlbGVhc2VCdXR0b24oQnV0dG9uLkxFRlQpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkcmF3UmVjdGFuZ2xlTW91c2Uod2lkdGg6IHN0cmluZywgbGVuZ3RoOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHcgPSBOdW1iZXIod2lkdGgpO1xyXG4gICAgY29uc3QgbCA9IE51bWJlcihsZW5ndGgpO1xyXG5cclxuICAgIGF3YWl0IG1vdXNlLnByZXNzQnV0dG9uKEJ1dHRvbi5MRUZUKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUocmlnaHQodykpO1xyXG4gICAgYXdhaXQgbW91c2UubW92ZShkb3duKGwpKTtcclxuICAgIGF3YWl0IG1vdXNlLm1vdmUobGVmdCh3KSk7XHJcbiAgICBhd2FpdCBtb3VzZS5tb3ZlKHVwKGwpKTtcclxuICAgIGF3YWl0IG1vdXNlLnJlbGVhc2VCdXR0b24oQnV0dG9uLkxFRlQpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRQcmludFNjcmVlbigpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgbW91c2UuZ2V0UG9zaXRpb24oKTtcclxuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gMjAwO1xyXG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gMjAwO1xyXG5cclxuICAgIGNvbnN0IHJlZ2lvbiA9IG5ldyBSZWdpb24ocG9zaXRpb24ueCAtIGNsaWVudFdpZHRoIC8gMiwgcG9zaXRpb24ueSAtIGNsaWVudEhlaWdodCAvIDIsIGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQpO1xyXG4gICAgY29uc3QgeyBkYXRhLCB3aWR0aCwgaGVpZ2h0IH0gPSBhd2FpdCBzY3JlZW4uZ3JhYlJlZ2lvbihyZWdpb24pO1xyXG5cclxuICAgIGNvbnN0IGppbXBPYmogPSBuZXcgSmltcCh7IGRhdGEsIHdpZHRoLCBoZWlnaHQgfSk7XHJcbiAgICBjb25zdCBwbmc2NCA9IGF3YWl0IGppbXBPYmouZ2V0QmFzZTY0QXN5bmMoSmltcC5NSU1FX1BORyk7XHJcbiAgICBjb25zdCBwbmc2NHNob3J0ID0gcG5nNjQucmVwbGFjZSgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcsICcnKTtcclxuICAgIC8vY29uc29sZS5sb2cocG5nNjRzaG9ydC5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIGBwcm50X3Njcm4gJHtwbmc2NHNob3J0fWA7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBtb3ZlTW91c2VMZWZ0LFxyXG4gICAgbW92ZU1vdXNlUmlnaHQsXHJcbiAgICBtb3ZlTW91c2VVcCxcclxuICAgIG1vdmVNb3VzZURvd24sXHJcbiAgICBnZXRNb3VzZVBvc2l0aW9uLFxyXG4gICAgZHJhd0NpcmNsZU1vdXNlLFxyXG4gICAgZHJhd1NxdWFyZU1vdXNlLFxyXG4gICAgZHJhd1JlY3RhbmdsZU1vdXNlLFxyXG4gICAgZ2V0UHJpbnRTY3JlZW4sXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgICBkcmF3Q2lyY2xlTW91c2UsXHJcbiAgICBkcmF3UmVjdGFuZ2xlTW91c2UsXHJcbiAgICBkcmF3U3F1YXJlTW91c2UsXHJcbiAgICBnZXRNb3VzZVBvc2l0aW9uLFxyXG4gICAgZ2V0UHJpbnRTY3JlZW4sXHJcbiAgICBtb3ZlTW91c2VEb3duLFxyXG4gICAgbW92ZU1vdXNlTGVmdCxcclxuICAgIG1vdmVNb3VzZVJpZ2h0LFxyXG4gICAgbW92ZU1vdXNlVXAsXHJcbn0gZnJvbSAnLi9tb3VzZU1vdmVtZW50JztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29tbWFuZChkYXRhOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGFyciA9IGRhdGEuc3BsaXQoJyAnKTtcclxuICAgIGNvbnN0IGNvbW1hbmQgPSBhcnJbMF07XHJcbiAgICBjb25zdCB2YWx1ZSA9IGFyclsxXTtcclxuICAgIGNvbnN0IHZhbHVlMiA9IGFyclsyXTtcclxuXHJcbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgICBjYXNlICdtb3VzZV91cCc6XHJcbiAgICAgICAgICAgIGF3YWl0IG1vdmVNb3VzZVVwKHZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW91c2VfZG93bic6XHJcbiAgICAgICAgICAgIGF3YWl0IG1vdmVNb3VzZURvd24odmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtb3VzZV9sZWZ0JzpcclxuICAgICAgICAgICAgYXdhaXQgbW92ZU1vdXNlTGVmdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21vdXNlX3JpZ2h0JzpcclxuICAgICAgICAgICAgYXdhaXQgbW92ZU1vdXNlUmlnaHQodmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtb3VzZV9wb3NpdGlvbic6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRNb3VzZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgY2FzZSAnZHJhd19jaXJjbGUnOlxyXG4gICAgICAgICAgICBhd2FpdCBkcmF3Q2lyY2xlTW91c2UodmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkcmF3X3NxdWFyZSc6XHJcbiAgICAgICAgICAgIGF3YWl0IGRyYXdTcXVhcmVNb3VzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2RyYXdfcmVjdGFuZ2xlJzpcclxuICAgICAgICAgICAgYXdhaXQgZHJhd1JlY3RhbmdsZU1vdXNlKHZhbHVlLCB2YWx1ZTIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdwcm50X3Njcm4nOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UHJpbnRTY3JlZW4oKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVW5rbm93biBjb21tYW5kJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcnNlQ29tbWFuZDtcclxuIiwiZnVuY3Rpb24gdHJ1bmNhdGVTdHJpbmcoc3RyOiBzdHJpbmcsIGxpbWl0ID0gNTApIHtcclxuICAgIHJldHVybiBzdHIubGVuZ3RoID4gbGltaXQgPyBzdHIuc2xpY2UoMCwgbGltaXQgLSAxKSArICfigKYnIDogc3RyO1xyXG59XHJcblxyXG5leHBvcnQgeyB0cnVuY2F0ZVN0cmluZyB9O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbnV0LXRyZWUvbnV0LWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqaW1wL2VzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaHR0cFNlcnZlciB9IGZyb20gJy4vaHR0cF9zZXJ2ZXIvaHR0cF9zZXJ2ZXInO1xuaW1wb3J0IHsgV2ViU29ja2V0U2VydmVyIH0gZnJvbSAnd3MnO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHBhcnNlQ29tbWFuZCBmcm9tICcuL2xpYi9wYXJzZUNvbW1hbmQnO1xuaW1wb3J0IHsgdHJ1bmNhdGVTdHJpbmcgfSBmcm9tICcuL2xpYi91dGlscyc7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IEhUVFBfUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODE4MTtcblxuY29uc29sZS5sb2coYFN0YXJ0IHN0YXRpYyBodHRwIHNlcnZlciBvbiB0aGUgJHtIVFRQX1BPUlR9IHBvcnQhYCk7XG5odHRwU2VydmVyLmxpc3RlbihIVFRQX1BPUlQpO1xuXG5jb25zdCB3c3MgPSBuZXcgV2ViU29ja2V0U2VydmVyKHsgcG9ydDogODA4MCB9KTtcblxud3NzLm9uKCdjb25uZWN0aW9uJywgKHdzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0NsaWVudCBjb25uZWN0ZWQnKTtcblxuICAgIHdzLm9uKCdtZXNzYWdlJywgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc29sZS5sb2coYDwtICR7Y29tbWFuZH1gKTtcbiAgICAgICAgcGFyc2VDb21tYW5kKGNvbW1hbmQpXG4gICAgICAgICAgICAudGhlbigoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhbnN3ZXIgIT09ICdzdHJpbmcnKSByZXR1cm47XG4gICAgICAgICAgICAgICAgd3Muc2VuZChhbnN3ZXIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdEFuc3dlciA9IHRydW5jYXRlU3RyaW5nKGFuc3dlcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYC0+ICR7Zm9ybWF0QW5zd2VyfWApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICB9KTtcblxuICAgIHdzLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NsaWVudCBkaXNjb25uZWN0ZWQnKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9