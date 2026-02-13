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

/***/ "./src/server/data.js"
/*!****************************!*\
  !*** ./src/server/data.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData)\n/* harmony export */ });\nvar mockData = [{\n  id: 1,\n  title: \"Server-Side Rendering\",\n  description: \"React components rendered to HTML on the server for fast initial page loads.\",\n  category: \"Architecture\"\n}, {\n  id: 2,\n  title: \"Client-Side Hydration\",\n  description: \"React attaches event listeners to server-rendered HTML making it interactive.\",\n  category: \"React\"\n}, {\n  id: 3,\n  title: \"Express.js Backend\",\n  description: \"A minimal Node.js framework serving both API endpoints and SSR pages.\",\n  category: \"Backend\"\n}, {\n  id: 4,\n  title: \"Webpack Bundling\",\n  description: \"Separate webpack configs for client and server bundles.\",\n  category: \"Tooling\"\n}, {\n  id: 5,\n  title: \"SEO Benefits\",\n  description: \"Search engines receive complete HTML instead of empty divs.\",\n  category: \"SEO\"\n}];\nfunction getData() {\n  return JSON.parse(JSON.stringify(mockData));\n}\n\n//# sourceURL=webpack://ssr-react-app/./src/server/data.js?\n}");

/***/ },

/***/ "./src/server/index.js"
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer.js */ \"./src/server/renderer.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.js */ \"./src/server/data.js\");\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar PORT = 3000;\n\n/*\r\n  Serve static files from real project folder\r\n*/\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), \"build/public\")));\n\n/*\r\n  API\r\n*/\napp.get(\"/api/data\", function (req, res) {\n  var data = (0,_data_js__WEBPACK_IMPORTED_MODULE_3__.getData)();\n  res.json({\n    success: true,\n    count: data.length,\n    data: data\n  });\n});\n\n/*\r\n  SSR\r\n*/\napp.get(\"*\", function (req, res) {\n  try {\n    var data = (0,_data_js__WEBPACK_IMPORTED_MODULE_3__.getData)();\n    var html = (0,_renderer_js__WEBPACK_IMPORTED_MODULE_2__.renderPage)(data);\n    res.send(html);\n  } catch (err) {\n    console.error(err);\n    res.status(500).send(\"Server Error\");\n  }\n});\napp.listen(PORT, function () {\n  console.log(\"SSR running at http://localhost:\".concat(PORT));\n});\n\n//# sourceURL=webpack://ssr-react-app/./src/server/index.js?\n}");

/***/ },

/***/ "./src/server/renderer.js"
/*!********************************!*\
  !*** ./src/server/renderer.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPage: () => (/* binding */ renderPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/App.js */ \"./src/shared/App.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction renderPage(data) {\n  var appHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_shared_App_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    initialData: data\n  }));\n  var serializedData = JSON.stringify(data).replace(/</g, \"\\\\u003c\");\n  return \"\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <meta charset=\\\"UTF-8\\\" />\\n        <title>SSR React App</title>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\".concat(appHtml, \"</div>\\n\\n        <script>\\n          window.__INITIAL_DATA__ = \").concat(serializedData, \";\\n        </script>\\n\\n        <script src=\\\"/bundle.js\\\"></script>\\n      </body>\\n    </html>\\n  \");\n}\n\n//# sourceURL=webpack://ssr-react-app/./src/server/renderer.js?\n}");

/***/ },

/***/ "./src/shared/App.js"
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header.js */ \"./src/shared/components/Header.js\");\n/* harmony import */ var _components_DataList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DataList.js */ \"./src/shared/components/DataList.js\");\n/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer.js */ \"./src/shared/components/Footer.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction App(props) {\n  var initialData = props.initialData || [];\n  var dataState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialData);\n  var data = dataState[0];\n  var setData = dataState[1];\n  var loadingState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialData.length === 0);\n  var loading = loadingState[0];\n  var setLoading = loadingState[1];\n  var counterState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  var counter = counterState[0];\n  var setCounter = counterState[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (initialData.length === 0) {\n      fetch(\"/api/data\").then(function (res) {\n        return res.json();\n      }).then(function (result) {\n        setData(result.data);\n        setLoading(false);\n      })[\"catch\"](function (err) {\n        console.error(\"Fetch error:\", err);\n        setLoading(false);\n      });\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"div\", {\n    style: {\n      maxWidth: 820,\n      margin: \"0 auto\",\n      padding: \"24px 16px\",\n      minHeight: \"100vh\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"main\", {\n      style: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        gap: 24\n      },\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"section\", {\n        style: {\n          background: \"#fff\",\n          borderRadius: 14,\n          padding: \"28px 32px\",\n          boxShadow: \"0 1px 4px rgba(0,0,0,0.08)\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"h2\", {\n          style: {\n            fontSize: \"1.35rem\",\n            marginBottom: 8\n          },\n          children: \"Interactive Counter\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"p\", {\n          style: {\n            color: \"#555\",\n            marginBottom: 20\n          },\n          children: \"Click buttons below. If they work, hydration is successful.\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"div\", {\n          style: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            gap: 24\n          },\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"button\", {\n            onClick: function onClick() {\n              setCounter(function (c) {\n                return c - 1;\n              });\n            },\n            style: {\n              width: 52,\n              height: 52,\n              fontSize: \"1.6rem\",\n              border: \"none\",\n              borderRadius: \"50%\",\n              cursor: \"pointer\",\n              fontWeight: 700,\n              color: \"#fff\",\n              background: \"#f44336\"\n            },\n            children: \"-\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"span\", {\n            style: {\n              fontSize: \"2.4rem\",\n              fontWeight: 700,\n              minWidth: 64,\n              textAlign: \"center\"\n            },\n            children: counter\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"button\", {\n            onClick: function onClick() {\n              setCounter(function (c) {\n                return c + 1;\n              });\n            },\n            style: {\n              width: 52,\n              height: 52,\n              fontSize: \"1.6rem\",\n              border: \"none\",\n              borderRadius: \"50%\",\n              cursor: \"pointer\",\n              fontWeight: 700,\n              color: \"#fff\",\n              background: \"#4caf50\"\n            },\n            children: \"+\"\n          })]\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"section\", {\n        style: {\n          background: \"#fff\",\n          borderRadius: 14,\n          padding: \"28px 32px\",\n          boxShadow: \"0 1px 4px rgba(0,0,0,0.08)\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"h2\", {\n          style: {\n            fontSize: \"1.35rem\",\n            marginBottom: 8\n          },\n          children: \"Data from Express API\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"p\", {\n          style: {\n            color: \"#555\",\n            marginBottom: 20\n          },\n          children: [\"Fetched server-side, served at \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"code\", {\n            children: \"/api/data\"\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_DataList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          data: data,\n          loading: loading\n        })]\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {})]\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://ssr-react-app/./src/shared/App.js?\n}");

/***/ },

/***/ "./src/shared/components/DataList.js"
/*!*******************************************!*\
  !*** ./src/shared/components/DataList.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction DataList(props) {\n  var data = props.data;\n  var loading = props.loading;\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n      style: {\n        textAlign: \"center\",\n        padding: 32,\n        color: \"#888\"\n      },\n      children: \"Loading...\"\n    });\n  }\n  if (!data || data.length === 0) {\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n      style: {\n        textAlign: \"center\",\n        padding: 32,\n        color: \"#888\"\n      },\n      children: \"No data.\"\n    });\n  }\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"ul\", {\n    style: {\n      listStyle: \"none\",\n      padding: 0,\n      margin: 0\n    },\n    children: data.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"li\", {\n        style: {\n          padding: \"18px 0\",\n          borderBottom: \"1px solid #eee\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n          style: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"space-between\",\n            flexWrap: \"wrap\",\n            gap: 8,\n            marginBottom: 6\n          },\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n            style: {\n              fontSize: \"1.1rem\",\n              color: \"#1a1a2e\"\n            },\n            children: item.title\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n            style: {\n              padding: \"2px 12px\",\n              background: \"#e8f4fd\",\n              color: \"#0f3460\",\n              borderRadius: 14,\n              fontSize: \"0.78rem\",\n              fontWeight: 600\n            },\n            children: item.category\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n          style: {\n            color: \"#666\",\n            fontSize: \"0.95rem\"\n          },\n          children: item.description\n        })]\n      }, item.id);\n    })\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataList);\n\n//# sourceURL=webpack://ssr-react-app/./src/shared/components/DataList.js?\n}");

/***/ },

/***/ "./src/shared/components/Footer.js"
/*!*****************************************!*\
  !*** ./src/shared/components/Footer.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Footer() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"footer\", {\n    style: {\n      textAlign: \"center\",\n      padding: \"36px 16px\",\n      marginTop: 32,\n      color: \"#999\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n      style: {\n        marginBottom: 4\n      },\n      children: \"SSR React App \\u2014 Server-Side Rendering Demo\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n      style: {\n        fontSize: \"0.85rem\",\n        opacity: 0.7\n      },\n      children: \"View page source to confirm HTML was rendered on the server.\"\n    })]\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://ssr-react-app/./src/shared/components/Footer.js?\n}");

/***/ },

/***/ "./src/shared/components/Header.js"
/*!*****************************************!*\
  !*** ./src/shared/components/Header.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Header() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"header\", {\n    style: {\n      textAlign: \"center\",\n      padding: \"48px 24px 40px\",\n      background: \"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)\",\n      color: \"#fff\",\n      borderRadius: 14,\n      marginBottom: 24\n    },\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n      style: {\n        fontSize: \"2.6rem\",\n        marginBottom: 8\n      },\n      children: \"SSR React App\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n      style: {\n        fontSize: \"1.05rem\",\n        opacity: 0.75,\n        marginBottom: 20\n      },\n      children: \"Server-Side Rendered with Express and React 18\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      style: {\n        display: \"flex\",\n        justifyContent: \"center\",\n        flexWrap: \"wrap\",\n        gap: 10\n      },\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n        style: {\n          padding: \"4px 14px\",\n          borderRadius: 20,\n          fontSize: \"0.8rem\",\n          fontWeight: 600,\n          color: \"#1a1a2e\",\n          background: \"#61dafb\"\n        },\n        children: \"React 18\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n        style: {\n          padding: \"4px 14px\",\n          borderRadius: 20,\n          fontSize: \"0.8rem\",\n          fontWeight: 600,\n          color: \"#1a1a2e\",\n          background: \"#68a063\"\n        },\n        children: \"Node.js\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n        style: {\n          padding: \"4px 14px\",\n          borderRadius: 20,\n          fontSize: \"0.8rem\",\n          fontWeight: 600,\n          color: \"#1a1a2e\",\n          background: \"#f5c518\"\n        },\n        children: \"Webpack 5\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n        style: {\n          padding: \"4px 14px\",\n          borderRadius: 20,\n          fontSize: \"0.8rem\",\n          fontWeight: 600,\n          color: \"#fff\",\n          background: \"#8b5cf6\"\n        },\n        children: \"SSR\"\n      })]\n    })]\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://ssr-react-app/./src/shared/components/Header.js?\n}");

/***/ },

/***/ "express"
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
(module) {

module.exports = require("express");

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "react" ***!
  \************************/
(module) {

module.exports = require("react");

/***/ },

/***/ "react-dom/server"
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
(module) {

module.exports = require("react-dom/server");

/***/ },

/***/ "react/jsx-runtime"
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
(module) {

module.exports = require("react/jsx-runtime");

/***/ },

/***/ "path"
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
(module) {

module.exports = require("path");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;