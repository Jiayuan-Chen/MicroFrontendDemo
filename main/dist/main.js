(self["webpackChunkmain"] = self["webpackChunkmain"] || []).push([["main"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var qiankun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qiankun */ "./node_modules/_qiankun@2.10.16@qiankun/es/apis.js");


(0,qiankun__WEBPACK_IMPORTED_MODULE_0__.registerMicroApps)([
]);

(0,qiankun__WEBPACK_IMPORTED_MODULE_0__.start)();

/***/ }),

/***/ "./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/allSettledButCanBreak.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/allSettledButCanBreak.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allSettledButCanBreak: () => (/* binding */ allSettledButCanBreak)
/* harmony export */ });
function allSettledButCanBreak(promises, shouldBreakWhileError) {
  return Promise.all(promises.map(function (promise, i) {
    return promise.then(function (value) {
      return {
        status: 'fulfilled',
        value: value
      };
    })["catch"](function (reason) {
      if (shouldBreakWhileError !== null && shouldBreakWhileError !== void 0 && shouldBreakWhileError(i)) {
        throw reason;
      }
      return {
        status: 'rejected',
        reason: reason
      };
    });
  }));
  ;
}

/***/ }),

/***/ "./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ importHTML),
/* harmony export */   execScripts: () => (/* binding */ _execScripts),
/* harmony export */   getExternalScripts: () => (/* binding */ _getExternalScripts),
/* harmony export */   getExternalStyleSheets: () => (/* binding */ _getExternalStyleSheets),
/* harmony export */   importEntry: () => (/* binding */ importEntry)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _allSettledButCanBreak__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allSettledButCanBreak */ "./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/allSettledButCanBreak.js");
/* harmony import */ var _process_tpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-tpl */ "./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/process-tpl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/utils.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018-08-15 11:37
 */




var styleCache = {};
var scriptCache = {};
var embedHTMLCache = {};
if (!window.fetch) {
  throw new Error('[import-html-entry] Here is no "fetch" on the window env, you need to polyfill it');
}
var defaultFetch = window.fetch.bind(window);
function defaultGetTemplate(tpl) {
  return tpl;
}

/**
 * convert external css link to inline style for performance optimization
 * @param template
 * @param styles
 * @param opts
 * @return embedHTML
 */
function getEmbedHTML(template, styles) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _opts$fetch = opts.fetch,
    fetch = _opts$fetch === void 0 ? defaultFetch : _opts$fetch;
  var embedHTML = template;
  return _getExternalStyleSheets(styles, fetch).then(function (styleSheets) {
    embedHTML = styleSheets.reduce(function (html, styleSheet) {
      var styleSrc = styleSheet.src;
      var styleSheetContent = styleSheet.value;
      html = html.replace((0,_process_tpl__WEBPACK_IMPORTED_MODULE_3__.genLinkReplaceSymbol)(styleSrc), isInlineCode(styleSrc) ? "".concat(styleSrc) : "<style>/* ".concat(styleSrc, " */").concat(styleSheetContent, "</style>"));
      return html;
    }, embedHTML);
    return embedHTML;
  });
}
var isInlineCode = function isInlineCode(code) {
  return code.startsWith('<');
};
function getExecutableScript(scriptSrc, scriptText) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var proxy = opts.proxy,
    strictGlobal = opts.strictGlobal,
    _opts$scopedGlobalVar = opts.scopedGlobalVariables,
    scopedGlobalVariables = _opts$scopedGlobalVar === void 0 ? [] : _opts$scopedGlobalVar;
  var sourceUrl = isInlineCode(scriptSrc) ? '' : "//# sourceURL=".concat(scriptSrc, "\n");

  // 将 scopedGlobalVariables 拼接成变量声明，用于缓存全局变量，避免每次使用时都走一遍代理
  var scopedGlobalVariableDefinition = scopedGlobalVariables.length ? "const {".concat(scopedGlobalVariables.join(','), "}=this;") : '';

  // 通过这种方式获取全局 window，因为 script 也是在全局作用域下运行的，所以我们通过 window.proxy 绑定时也必须确保绑定到全局 window 上
  // 否则在嵌套场景下， window.proxy 设置的是内层应用的 window，而代码其实是在全局作用域运行的，会导致闭包里的 window.proxy 取的是最外层的微应用的 proxy
  var globalWindow = (0, eval)('window');
  globalWindow.proxy = proxy;
  // TODO 通过 strictGlobal 方式切换 with 闭包，待 with 方式坑趟平后再合并
  return strictGlobal ? scopedGlobalVariableDefinition ? ";(function(){with(this){".concat(scopedGlobalVariableDefinition).concat(scriptText, "\n").concat(sourceUrl, "}}).bind(window.proxy)();") : ";(function(window, self, globalThis){with(window){;".concat(scriptText, "\n").concat(sourceUrl, "}}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);") : ";(function(window, self, globalThis){;".concat(scriptText, "\n").concat(sourceUrl, "}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);");
}

// for prefetch
function _getExternalStyleSheets(styles) {
  var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFetch;
  return (0,_allSettledButCanBreak__WEBPACK_IMPORTED_MODULE_4__.allSettledButCanBreak)(styles.map( /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(styleLink) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!isInlineCode(styleLink)) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getInlineCode)(styleLink));
          case 4:
            return _context.abrupt("return", styleCache[styleLink] || (styleCache[styleLink] = fetch(styleLink).then(function (response) {
              if (response.status >= 400) {
                throw new Error("".concat(styleLink, " load failed with status ").concat(response.status));
              }
              return response.text();
            })["catch"](function (e) {
              try {
                if (e.message.indexOf(styleLink) === -1) {
                  e.message = "".concat(styleLink, " ").concat(e.message);
                }
              } catch (_) {
                // e.message 可能是 readonly，此时会触发异常
              }
              throw e;
            })));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }())).then(function (results) {
    return results.map(function (result, i) {
      if (result.status === 'fulfilled') {
        result.value = {
          src: styles[i],
          value: result.value
        };
      }
      return result;
    }).filter(function (result) {
      // 忽略失败的请求，避免异常下载阻塞后续资源加载
      if (result.status === 'rejected') {
        Promise.reject(result.reason);
      }
      return result.status === 'fulfilled';
    }).map(function (result) {
      return result.value;
    });
  });
}

// for prefetch

function _getExternalScripts(scripts) {
  var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFetch;
  var entry = arguments.length > 2 ? arguments[2] : undefined;
  var fetchScript = function fetchScript(scriptUrl, opts) {
    return scriptCache[scriptUrl] || (scriptCache[scriptUrl] = fetch(scriptUrl, opts).then(function (response) {
      // usually browser treats 4xx and 5xx response of script loading as an error and will fire a script error event
      // https://stackoverflow.com/questions/5625420/what-http-headers-responses-trigger-the-onerror-handler-on-a-script-tag/5625603
      if (response.status >= 400) {
        throw new Error("".concat(scriptUrl, " load failed with status ").concat(response.status));
      }
      return response.text();
    })["catch"](function (e) {
      try {
        if (e.message.indexOf(scriptUrl) === -1) {
          e.message = "".concat(scriptUrl, " ").concat(e.message);
        }
      } catch (_) {
        // e.message 可能是 readonly，此时会触发异常
      }
      throw e;
    }));
  };

  // entry js 下载失败应该直接 break
  var shouldBreakWhileError = function shouldBreakWhileError(i) {
    return scripts[i] === entry;
  };
  return (0,_allSettledButCanBreak__WEBPACK_IMPORTED_MODULE_4__.allSettledButCanBreak)(scripts.map( /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(script) {
      var src, async, crossOrigin, fetchOpts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(typeof script === 'string')) {
              _context2.next = 8;
              break;
            }
            if (!isInlineCode(script)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getInlineCode)(script));
          case 5:
            return _context2.abrupt("return", fetchScript(script));
          case 6:
            _context2.next = 13;
            break;
          case 8:
            // use idle time to load async script
            src = script.src, async = script.async, crossOrigin = script.crossOrigin;
            fetchOpts = crossOrigin ? {
              credentials: 'include'
            } : {};
            if (!async) {
              _context2.next = 12;
              break;
            }
            return _context2.abrupt("return", {
              src: src,
              async: true,
              content: new Promise(function (resolve, reject) {
                return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.requestIdleCallback)(function () {
                  return fetchScript(src, fetchOpts).then(resolve, reject);
                });
              })
            });
          case 12:
            return _context2.abrupt("return", fetchScript(src, fetchOpts));
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }()), shouldBreakWhileError).then(function (results) {
    return results.map(function (result, i) {
      if (result.status === 'fulfilled') {
        result.value = {
          src: scripts[i],
          value: result.value
        };
      }
      return result;
    }).filter(function (result) {
      // 忽略失败的请求，避免异常下载阻塞后续资源加载
      if (result.status === 'rejected') {
        Promise.reject(result.reason);
      }
      return result.status === 'fulfilled';
    }).map(function (result) {
      return result.value;
    });
  });
}

function throwNonBlockingError(error, msg) {
  setTimeout(function () {
    console.error(msg);
    throw error;
  });
}
var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

/**
 * FIXME to consistent with browser behavior, we should only provide callback way to invoke success and error event
 * @param entry
 * @param scripts
 * @param proxy
 * @param opts
 * @returns {Promise<unknown>}
 */
function _execScripts(entry, scripts) {
  var proxy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _opts$fetch2 = opts.fetch,
    fetch = _opts$fetch2 === void 0 ? defaultFetch : _opts$fetch2,
    _opts$strictGlobal = opts.strictGlobal,
    strictGlobal = _opts$strictGlobal === void 0 ? false : _opts$strictGlobal,
    success = opts.success,
    _opts$error = opts.error,
    error = _opts$error === void 0 ? function () {} : _opts$error,
    _opts$beforeExec = opts.beforeExec,
    beforeExec = _opts$beforeExec === void 0 ? function () {} : _opts$beforeExec,
    _opts$afterExec = opts.afterExec,
    afterExec = _opts$afterExec === void 0 ? function () {} : _opts$afterExec,
    _opts$scopedGlobalVar2 = opts.scopedGlobalVariables,
    scopedGlobalVariables = _opts$scopedGlobalVar2 === void 0 ? [] : _opts$scopedGlobalVar2;
  return _getExternalScripts(scripts, fetch, entry).then(function (scriptsText) {
    var geval = function geval(scriptSrc, inlineScript) {
      var rawCode = beforeExec(inlineScript, scriptSrc) || inlineScript;
      var code = getExecutableScript(scriptSrc, rawCode, {
        proxy: proxy,
        strictGlobal: strictGlobal,
        scopedGlobalVariables: scopedGlobalVariables
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_5__.evalCode)(scriptSrc, code);
      afterExec(inlineScript, scriptSrc);
    };
    function exec(scriptSrc, inlineScript, resolve) {
      var markName = "Evaluating script ".concat(scriptSrc);
      var measureName = "Evaluating Time Consuming: ".concat(scriptSrc);
      if ( true && supportsUserTiming) {
        performance.mark(markName);
      }
      if (scriptSrc === entry) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_5__.noteGlobalProps)(strictGlobal ? proxy : window);
        try {
          geval(scriptSrc, inlineScript);
          var exports = proxy[(0,_utils__WEBPACK_IMPORTED_MODULE_5__.getGlobalProp)(strictGlobal ? proxy : window)] || {};
          resolve(exports);
        } catch (e) {
          // entry error must be thrown to make the promise settled
          console.error("[import-html-entry]: error occurs while executing entry script ".concat(scriptSrc));
          throw e;
        }
      } else {
        if (typeof inlineScript === 'string') {
          try {
            if (scriptSrc !== null && scriptSrc !== void 0 && scriptSrc.src) {
              geval(scriptSrc.src, inlineScript);
            } else {
              geval(scriptSrc, inlineScript);
            }
          } catch (e) {
            // consistent with browser behavior, any independent script evaluation error should not block the others
            throwNonBlockingError(e, "[import-html-entry]: error occurs while executing normal script ".concat(scriptSrc));
          }
        } else {
          // external script marked with async
          inlineScript.async && (inlineScript === null || inlineScript === void 0 ? void 0 : inlineScript.content.then(function (downloadedScriptText) {
            return geval(inlineScript.src, downloadedScriptText);
          })["catch"](function (e) {
            throwNonBlockingError(e, "[import-html-entry]: error occurs while executing async script ".concat(inlineScript.src));
          }));
        }
      }
      if ( true && supportsUserTiming) {
        performance.measure(measureName, markName);
        performance.clearMarks(markName);
        performance.clearMeasures(measureName);
      }
    }
    function schedule(i, resolvePromise) {
      if (i < scriptsText.length) {
        var script = scriptsText[i];
        var scriptSrc = script.src;
        var inlineScript = script.value;
        exec(scriptSrc, inlineScript, resolvePromise);
        // resolve the promise while the last script executed and entry not provided
        if (!entry && i === scriptsText.length - 1) {
          resolvePromise();
        } else {
          schedule(i + 1, resolvePromise);
        }
      }
    }
    return new Promise(function (resolve) {
      return schedule(0, success || resolve);
    });
  })["catch"](function (e) {
    error();
    throw e;
  });
}

function importHTML(url) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fetch = defaultFetch;
  var autoDecodeResponse = false;
  var getPublicPath = _utils__WEBPACK_IMPORTED_MODULE_5__.defaultGetPublicPath;
  var getTemplate = defaultGetTemplate;
  var postProcessTemplate = opts.postProcessTemplate;

  // compatible with the legacy importHTML api
  if (typeof opts === 'function') {
    fetch = opts;
  } else {
    // fetch option is availble
    if (opts.fetch) {
      // fetch is a funciton
      if (typeof opts.fetch === 'function') {
        fetch = opts.fetch;
      } else {
        // configuration
        fetch = opts.fetch.fn || defaultFetch;
        autoDecodeResponse = !!opts.fetch.autoDecodeResponse;
      }
    }
    getPublicPath = opts.getPublicPath || opts.getDomain || _utils__WEBPACK_IMPORTED_MODULE_5__.defaultGetPublicPath;
    getTemplate = opts.getTemplate || defaultGetTemplate;
  }
  return embedHTMLCache[url] || (embedHTMLCache[url] = fetch(url).then(function (response) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.readResAsString)(response, autoDecodeResponse);
  }).then(function (html) {
    var assetPublicPath = getPublicPath(url);
    var _processTpl = (0,_process_tpl__WEBPACK_IMPORTED_MODULE_3__["default"])(getTemplate(html), assetPublicPath, postProcessTemplate),
      template = _processTpl.template,
      scripts = _processTpl.scripts,
      entry = _processTpl.entry,
      styles = _processTpl.styles;
    return getEmbedHTML(template, styles, {
      fetch: fetch
    }).then(function (embedHTML) {
      return {
        template: embedHTML,
        assetPublicPath: assetPublicPath,
        getExternalScripts: function getExternalScripts() {
          return _getExternalScripts(scripts, fetch);
        },
        getExternalStyleSheets: function getExternalStyleSheets() {
          return _getExternalStyleSheets(styles, fetch);
        },
        execScripts: function execScripts(proxy, strictGlobal) {
          var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          if (!scripts.length) {
            return Promise.resolve();
          }
          return _execScripts(entry, scripts, proxy, _objectSpread({
            fetch: fetch,
            strictGlobal: strictGlobal
          }, opts));
        }
      };
    });
  }));
}
function importEntry(entry) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _opts$fetch3 = opts.fetch,
    fetch = _opts$fetch3 === void 0 ? defaultFetch : _opts$fetch3,
    _opts$getTemplate = opts.getTemplate,
    getTemplate = _opts$getTemplate === void 0 ? defaultGetTemplate : _opts$getTemplate,
    postProcessTemplate = opts.postProcessTemplate;
  var getPublicPath = opts.getPublicPath || opts.getDomain || _utils__WEBPACK_IMPORTED_MODULE_5__.defaultGetPublicPath;
  if (!entry) {
    throw new SyntaxError('entry should not be empty!');
  }

  // html entry
  if (typeof entry === 'string') {
    return importHTML(entry, {
      fetch: fetch,
      getPublicPath: getPublicPath,
      getTemplate: getTemplate,
      postProcessTemplate: postProcessTemplate
    });
  }

  // config entry
  if (Array.isArray(entry.scripts) || Array.isArray(entry.styles)) {
    var _entry$scripts = entry.scripts,
      scripts = _entry$scripts === void 0 ? [] : _entry$scripts,
      _entry$styles = entry.styles,
      styles = _entry$styles === void 0 ? [] : _entry$styles,
      _entry$html = entry.html,
      html = _entry$html === void 0 ? '' : _entry$html;
    var getHTMLWithStylePlaceholder = function getHTMLWithStylePlaceholder(tpl) {
      return styles.reduceRight(function (html, styleSrc) {
        return "".concat((0,_process_tpl__WEBPACK_IMPORTED_MODULE_3__.genLinkReplaceSymbol)(styleSrc)).concat(html);
      }, tpl);
    };
    var getHTMLWithScriptPlaceholder = function getHTMLWithScriptPlaceholder(tpl) {
      return scripts.reduce(function (html, scriptSrc) {
        return "".concat(html).concat((0,_process_tpl__WEBPACK_IMPORTED_MODULE_3__.genScriptReplaceSymbol)(scriptSrc));
      }, tpl);
    };
    return getEmbedHTML(getTemplate(getHTMLWithScriptPlaceholder(getHTMLWithStylePlaceholder(html))), styles, {
      fetch: fetch
    }).then(function (embedHTML) {
      return {
        template: embedHTML,
        assetPublicPath: getPublicPath(entry),
        getExternalScripts: function getExternalScripts() {
          return _getExternalScripts(scripts, fetch);
        },
        getExternalStyleSheets: function getExternalStyleSheets() {
          return _getExternalStyleSheets(styles, fetch);
        },
        execScripts: function execScripts(proxy, strictGlobal) {
          var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          if (!scripts.length) {
            return Promise.resolve();
          }
          return _execScripts(scripts[scripts.length - 1], scripts, proxy, _objectSpread({
            fetch: fetch,
            strictGlobal: strictGlobal
          }, opts));
        }
      };
    });
  } else {
    throw new SyntaxError('entry scripts or styles should be array!');
  }
}

/***/ }),

/***/ "./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/process-tpl.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/process-tpl.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ processTpl),
/* harmony export */   genIgnoreAssetReplaceSymbol: () => (/* binding */ genIgnoreAssetReplaceSymbol),
/* harmony export */   genLinkReplaceSymbol: () => (/* binding */ genLinkReplaceSymbol),
/* harmony export */   genModuleScriptReplaceSymbol: () => (/* binding */ genModuleScriptReplaceSymbol),
/* harmony export */   genScriptReplaceSymbol: () => (/* binding */ genScriptReplaceSymbol),
/* harmony export */   inlineScriptReplaceSymbol: () => (/* binding */ inlineScriptReplaceSymbol)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/utils.js");

/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018-09-03 15:04
 */

var ALL_SCRIPT_REGEX = /(<script[\s\S]*?>)[\s\S]*?<\/script>/gi;
var SCRIPT_TAG_REGEX = /<(script)\s+((?!type=('|")text\/ng\x2Dtemplate\3)[\s\S])*?>[\s\S]*?<\/\1>/i;
var SCRIPT_SRC_REGEX = /.*\ssrc=('|")?([^>'"\s]+)/;
var SCRIPT_TYPE_REGEX = /.*\stype=('|")?([^>'"\s]+)/;
var SCRIPT_ENTRY_REGEX = /.*\sentry\s*.*/;
var SCRIPT_ASYNC_REGEX = /.*\sasync\s*.*/;
var SCRIPT_CROSSORIGIN_REGEX = /.*\scrossorigin=('|")?use-credentials\1/;
var SCRIPT_NO_MODULE_REGEX = /.*\snomodule\s*.*/;
var SCRIPT_MODULE_REGEX = /.*\stype=('|")?module('|")?\s*.*/;
var LINK_TAG_REGEX = /<(link)\s+[\s\S]*?>/ig;
var LINK_PRELOAD_OR_PREFETCH_REGEX = /\srel=('|")?(preload|prefetch)\1/;
var LINK_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
var LINK_AS_FONT = /.*\sas=('|")?font\1.*/;
var STYLE_TAG_REGEX = /<style[^>]*>[\s\S]*?<\/style>/gi;
var STYLE_TYPE_REGEX = /\s+rel=('|")?stylesheet\1.*/;
var STYLE_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
var HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g;
var LINK_IGNORE_REGEX = /<link(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
var STYLE_IGNORE_REGEX = /<style(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
var SCRIPT_IGNORE_REGEX = /<script(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
function hasProtocol(url) {
  return url.startsWith('http://') || url.startsWith('https://');
}
function getEntirePath(path, baseURI) {
  return new URL(path, baseURI).toString();
}
function isValidJavaScriptType(type) {
  var handleTypes = ['text/javascript', 'module', 'application/javascript', 'text/ecmascript', 'application/ecmascript'];
  return !type || handleTypes.indexOf(type) !== -1;
}
var genLinkReplaceSymbol = function genLinkReplaceSymbol(linkHref) {
  var preloadOrPrefetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "<!-- ".concat(preloadOrPrefetch ? 'prefetch/preload' : '', " link ").concat(linkHref, " replaced by import-html-entry -->");
};
var genScriptReplaceSymbol = function genScriptReplaceSymbol(scriptSrc) {
  var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var crossOrigin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return "<!-- ".concat(crossOrigin ? 'cors' : '', " ").concat(async ? 'async' : '', " script ").concat(scriptSrc, " replaced by import-html-entry -->");
};
var inlineScriptReplaceSymbol = "<!-- inline scripts replaced by import-html-entry -->";
var genIgnoreAssetReplaceSymbol = function genIgnoreAssetReplaceSymbol(url) {
  return "<!-- ignore asset ".concat(url || 'file', " replaced by import-html-entry -->");
};
var genModuleScriptReplaceSymbol = function genModuleScriptReplaceSymbol(scriptSrc, moduleSupport) {
  return "<!-- ".concat(moduleSupport ? 'nomodule' : 'module', " script ").concat(scriptSrc, " ignored by import-html-entry -->");
};

/**
 * parse the script link from the template
 * 1. collect stylesheets
 * 2. use global eval to evaluate the inline scripts
 *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#Difference_between_Function_constructor_and_function_declaration
 *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!
 * @param tpl
 * @param baseURI
 * @param postProcessTemplate
 * @stripStyles whether to strip the css links
 * @returns {{template: void | string | *, scripts: *[], entry: *}}
 */
function processTpl(tpl, baseURI, postProcessTemplate) {
  var scripts = [];
  var styles = [];
  var entry = null;
  var moduleSupport = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isModuleScriptSupported)();
  var template = tpl

  /*
  remove html comment first
  */.replace(HTML_COMMENT_REGEX, '').replace(LINK_TAG_REGEX, function (match) {
    /*
    change the css link
    */
    var styleType = !!match.match(STYLE_TYPE_REGEX);
    if (styleType) {
      var styleHref = match.match(STYLE_HREF_REGEX);
      var styleIgnore = match.match(LINK_IGNORE_REGEX);
      if (styleHref) {
        var href = styleHref && styleHref[2];
        var newHref = href;
        if (href && !hasProtocol(href)) {
          newHref = getEntirePath(href, baseURI);
        }
        if (styleIgnore) {
          return genIgnoreAssetReplaceSymbol(newHref);
        }
        newHref = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseUrl)(newHref);
        styles.push(newHref);
        return genLinkReplaceSymbol(newHref);
      }
    }
    var preloadOrPrefetchType = match.match(LINK_PRELOAD_OR_PREFETCH_REGEX) && match.match(LINK_HREF_REGEX) && !match.match(LINK_AS_FONT);
    if (preloadOrPrefetchType) {
      var _match$match = match.match(LINK_HREF_REGEX),
        _match$match2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_match$match, 3),
        linkHref = _match$match2[2];
      return genLinkReplaceSymbol(linkHref, true);
    }
    return match;
  }).replace(STYLE_TAG_REGEX, function (match) {
    if (STYLE_IGNORE_REGEX.test(match)) {
      return genIgnoreAssetReplaceSymbol('style file');
    }
    return match;
  }).replace(ALL_SCRIPT_REGEX, function (match, scriptTag) {
    var scriptIgnore = scriptTag.match(SCRIPT_IGNORE_REGEX);
    var moduleScriptIgnore = moduleSupport && !!scriptTag.match(SCRIPT_NO_MODULE_REGEX) || !moduleSupport && !!scriptTag.match(SCRIPT_MODULE_REGEX);
    // in order to keep the exec order of all javascripts

    var matchedScriptTypeMatch = scriptTag.match(SCRIPT_TYPE_REGEX);
    var matchedScriptType = matchedScriptTypeMatch && matchedScriptTypeMatch[2];
    if (!isValidJavaScriptType(matchedScriptType)) {
      return match;
    }

    // if it is a external script
    if (SCRIPT_TAG_REGEX.test(match) && scriptTag.match(SCRIPT_SRC_REGEX)) {
      /*
      collect scripts and replace the ref
      */

      var matchedScriptEntry = scriptTag.match(SCRIPT_ENTRY_REGEX);
      var matchedScriptSrcMatch = scriptTag.match(SCRIPT_SRC_REGEX);
      var matchedScriptSrc = matchedScriptSrcMatch && matchedScriptSrcMatch[2];
      if (entry && matchedScriptEntry) {
        throw new SyntaxError('You should not set multiply entry script!');
      }
      if (matchedScriptSrc) {
        // append the domain while the script not have a protocol prefix
        if (!hasProtocol(matchedScriptSrc)) {
          matchedScriptSrc = getEntirePath(matchedScriptSrc, baseURI);
        }
        matchedScriptSrc = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseUrl)(matchedScriptSrc);
      }
      entry = entry || matchedScriptEntry && matchedScriptSrc;
      if (scriptIgnore) {
        return genIgnoreAssetReplaceSymbol(matchedScriptSrc || 'js file');
      }
      if (moduleScriptIgnore) {
        return genModuleScriptReplaceSymbol(matchedScriptSrc || 'js file', moduleSupport);
      }
      if (matchedScriptSrc) {
        var asyncScript = !!scriptTag.match(SCRIPT_ASYNC_REGEX);
        var crossOriginScript = !!scriptTag.match(SCRIPT_CROSSORIGIN_REGEX);
        scripts.push(asyncScript || crossOriginScript ? {
          async: asyncScript,
          src: matchedScriptSrc,
          crossOrigin: crossOriginScript
        } : matchedScriptSrc);
        return genScriptReplaceSymbol(matchedScriptSrc, asyncScript, crossOriginScript);
      }
      return match;
    } else {
      if (scriptIgnore) {
        return genIgnoreAssetReplaceSymbol('js file');
      }
      if (moduleScriptIgnore) {
        return genModuleScriptReplaceSymbol('js file', moduleSupport);
      }

      // if it is an inline script
      var code = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getInlineCode)(match);

      // remove script blocks when all of these lines are comments.
      var isPureCommentBlock = code.split(/[\r\n]+/).every(function (line) {
        return !line.trim() || line.trim().startsWith('//');
      });
      if (!isPureCommentBlock) {
        scripts.push(match);
      }
      return inlineScriptReplaceSymbol;
    }
  });
  scripts = scripts.filter(function (script) {
    // filter empty script
    return !!script;
  });
  var tplResult = {
    template: template,
    scripts: scripts,
    styles: styles,
    // set the last script as entry if have not set
    entry: entry || scripts[scripts.length - 1]
  };
  if (typeof postProcessTemplate === 'function') {
    tplResult = postProcessTemplate(tplResult);
  }
  return tplResult;
}

/***/ }),

/***/ "./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/utils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/utils.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultGetPublicPath: () => (/* binding */ defaultGetPublicPath),
/* harmony export */   evalCode: () => (/* binding */ evalCode),
/* harmony export */   getGlobalProp: () => (/* binding */ getGlobalProp),
/* harmony export */   getInlineCode: () => (/* binding */ getInlineCode),
/* harmony export */   isModuleScriptSupported: () => (/* binding */ isModuleScriptSupported),
/* harmony export */   noteGlobalProps: () => (/* binding */ noteGlobalProps),
/* harmony export */   parseUrl: () => (/* binding */ parseUrl),
/* harmony export */   readResAsString: () => (/* binding */ readResAsString),
/* harmony export */   requestIdleCallback: () => (/* binding */ requestIdleCallback)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/typeof.js");


/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2019-02-25
 * fork from https://github.com/systemjs/systemjs/blob/master/src/extras/global.js
 */

var isIE11 = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Trident') !== -1;
function shouldSkipProperty(global, p) {
  if (!global.hasOwnProperty(p) || !isNaN(p) && p < global.length) return true;
  if (isIE11) {
    // https://github.com/kuitos/import-html-entry/pull/32，最小化 try 范围
    try {
      return global[p] && typeof window !== 'undefined' && global[p].parent === window;
    } catch (err) {
      return true;
    }
  } else {
    return false;
  }
}

// safari unpredictably lists some new globals first or second in object order
var firstGlobalProp, secondGlobalProp, lastGlobalProp;
function getGlobalProp(global) {
  var cnt = 0;
  var lastProp;
  var hasIframe = false;
  for (var p in global) {
    if (shouldSkipProperty(global, p)) continue;

    // 遍历 iframe，检查 window 上的属性值是否是 iframe，是则跳过后面的 first 和 second 判断
    for (var i = 0; i < window.frames.length && !hasIframe; i++) {
      var frame = window.frames[i];
      if (frame === global[p]) {
        hasIframe = true;
        break;
      }
    }
    if (!hasIframe && (cnt === 0 && p !== firstGlobalProp || cnt === 1 && p !== secondGlobalProp)) return p;
    cnt++;
    lastProp = p;
  }
  if (lastProp !== lastGlobalProp) return lastProp;
}
function noteGlobalProps(global) {
  // alternatively Object.keys(global).pop()
  // but this may be faster (pending benchmarks)
  firstGlobalProp = secondGlobalProp = undefined;
  for (var p in global) {
    if (shouldSkipProperty(global, p)) continue;
    if (!firstGlobalProp) firstGlobalProp = p;else if (!secondGlobalProp) secondGlobalProp = p;
    lastGlobalProp = p;
  }
  return lastGlobalProp;
}
function getInlineCode(match) {
  var start = match.indexOf('>') + 1;
  var end = match.lastIndexOf('<');
  return match.substring(start, end);
}
function defaultGetPublicPath(entry) {
  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(entry) === 'object') {
    return '/';
  }
  try {
    var _URL = new URL(entry, location.href),
      origin = _URL.origin,
      pathname = _URL.pathname;
    var paths = pathname.split('/');
    // 移除最后一个元素
    paths.pop();
    return "".concat(origin).concat(paths.join('/'), "/");
  } catch (e) {
    console.warn(e);
    return '';
  }
}

// Detect whether browser supports `<script type=module>` or not
function isModuleScriptSupported() {
  var s = document.createElement('script');
  return 'noModule' in s;
}

// RIC and shim for browsers setTimeout() without it
var requestIdleCallback = window.requestIdleCallback || function requestIdleCallback(cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};
function readResAsString(response, autoDetectCharset) {
  // 未启用自动检测
  if (!autoDetectCharset) {
    return response.text();
  }

  // 如果没headers，发生在test环境下的mock数据，为兼容原有测试用例
  if (!response.headers) {
    return response.text();
  }

  // 如果没返回content-type，走默认逻辑
  var contentType = response.headers.get('Content-Type');
  if (!contentType) {
    return response.text();
  }

  // 解析content-type内的charset
  // Content-Type: text/html; charset=utf-8
  // Content-Type: multipart/form-data; boundary=something
  // GET请求下不会出现第二种content-type
  var charset = 'utf-8';
  var parts = contentType.split(';');
  if (parts.length === 2) {
    var _parts$1$split = parts[1].split('='),
      _parts$1$split2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_parts$1$split, 2),
      value = _parts$1$split2[1];
    var encoding = value && value.trim();
    if (encoding) {
      charset = encoding;
    }
  }

  // 如果还是utf-8，那么走默认，兼容原有逻辑，这段代码删除也应该工作
  if (charset.toUpperCase() === 'UTF-8') {
    return response.text();
  }

  // 走流读取，编码可能是gbk，gb2312等，比如sofa 3默认是gbk编码
  return response.blob().then(function (file) {
    return new Promise(function (resolve, reject) {
      var reader = new window.FileReader();
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsText(file, charset);
    });
  });
}
var evalCache = {};
function evalCode(scriptSrc, code) {
  var key = scriptSrc;
  if (!evalCache[key]) {
    var functionWrappedCode = "(function(){".concat(code, "})");
    evalCache[key] = (0, eval)(functionWrappedCode);
  }
  var evalFunc = evalCache[key];
  evalFunc.call(window);
}

// 转换 url 中的转义字符，例如 &amp; => &
function parseUrl(url) {
  var parser = new DOMParser();
  var html = "<script src=\"".concat(url, "\"></script>");
  var doc = parser.parseFromString(html, "text/html");
  return doc.scripts[0].src;
}

/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_DataView.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_DataView.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/_lodash@4.17.21@lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.21@lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_Hash.js":
/*!******************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_Hash.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/_lodash@4.17.21@lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/_lodash@4.17.21@lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/_lodash@4.17.21@lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/_lodash@4.17.21@lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/_lodash@4.17.21@lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_ListCache.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_ListCache.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/_lodash@4.17.21@lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/_lodash@4.17.21@lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/_lodash@4.17.21@lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/_lodash@4.17.21@lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/_lodash@4.17.21@lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_Map.js":
/*!*****************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_Map.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/_lodash@4.17.21@lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.21@lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_MapCache.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_MapCache.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/_lodash@4.17.21@lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/_lodash@4.17.21@lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/_lodash@4.17.21@lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/_lodash@4.17.21@lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/_lodash@4.17.21@lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_Promise.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_Promise.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/_lodash@4.17.21@lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.21@lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_Set.js":
/*!*****************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_Set.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/_lodash@4.17.21@lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.21@lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_SetCache.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_SetCache.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/_lodash@4.17.21@lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/_lodash@4.17.21@lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/_lodash@4.17.21@lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_Stack.js":
/*!*******************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_Stack.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/_lodash@4.17.21@lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/_lodash@4.17.21@lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/_lodash@4.17.21@lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/_lodash@4.17.21@lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/_lodash@4.17.21@lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/_lodash@4.17.21@lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_Symbol.js":
/*!********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_Symbol.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.21@lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_Uint8Array.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_Uint8Array.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.21@lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_WeakMap.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_WeakMap.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/_lodash@4.17.21@lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.21@lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_apply.js":
/*!*******************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_apply.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_arrayEach.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_arrayEach.js ***!
  \***********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_arrayFilter.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_arrayFilter.js ***!
  \*************************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_arrayIncludes.js":
/*!***************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_arrayIncludes.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/_lodash@4.17.21@lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_arrayIncludesWith.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_arrayIncludesWith.js ***!
  \*******************************************************************/
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_arrayLikeKeys.js":
/*!***************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_arrayLikeKeys.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/_lodash@4.17.21@lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/_lodash@4.17.21@lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/_lodash@4.17.21@lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/_lodash@4.17.21@lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/_lodash@4.17.21@lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/_lodash@4.17.21@lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_arrayMap.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_arrayMap.js ***!
  \**********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_arrayPush.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_arrayPush.js ***!
  \***********************************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_arrayReduce.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_arrayReduce.js ***!
  \*************************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_asciiWords.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_asciiWords.js ***!
  \************************************************************/
/***/ ((module) => {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_assignMergeValue.js":
/*!******************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_assignMergeValue.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/_lodash@4.17.21@lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/_lodash@4.17.21@lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_assignValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_assignValue.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/_lodash@4.17.21@lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/_lodash@4.17.21@lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_assocIndexOf.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_assocIndexOf.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/_lodash@4.17.21@lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseAssign.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseAssign.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/_lodash@4.17.21@lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/_lodash@4.17.21@lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseAssignIn.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseAssignIn.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/_lodash@4.17.21@lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/_lodash@4.17.21@lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseAssignValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseAssignValue.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/_lodash@4.17.21@lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseClone.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseClone.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/_lodash@4.17.21@lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/_lodash@4.17.21@lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/_lodash@4.17.21@lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/_lodash@4.17.21@lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/_lodash@4.17.21@lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/_lodash@4.17.21@lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/_lodash@4.17.21@lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/_lodash@4.17.21@lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/_lodash@4.17.21@lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/_lodash@4.17.21@lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/_lodash@4.17.21@lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/_lodash@4.17.21@lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/_lodash@4.17.21@lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/_lodash@4.17.21@lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/_lodash@4.17.21@lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/_lodash@4.17.21@lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/_lodash@4.17.21@lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/_lodash@4.17.21@lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/_lodash@4.17.21@lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/_lodash@4.17.21@lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/_lodash@4.17.21@lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/_lodash@4.17.21@lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseCreate.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseCreate.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/_lodash@4.17.21@lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseDifference.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseDifference.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/_lodash@4.17.21@lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/_lodash@4.17.21@lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/_lodash@4.17.21@lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/_lodash@4.17.21@lodash/_arrayMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/_lodash@4.17.21@lodash/_baseUnary.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/_lodash@4.17.21@lodash/_cacheHas.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseEach.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseEach.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/_lodash@4.17.21@lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/_lodash@4.17.21@lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseFindIndex.js":
/*!***************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseFindIndex.js ***!
  \***************************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseFlatten.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseFlatten.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/_lodash@4.17.21@lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/_lodash@4.17.21@lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseFor.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseFor.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/_lodash@4.17.21@lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseForOwn.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseForOwn.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/_lodash@4.17.21@lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/_lodash@4.17.21@lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseGetAllKeys.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseGetAllKeys.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/_lodash@4.17.21@lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/_lodash@4.17.21@lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseGetTag.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseGetTag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.21@lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/_lodash@4.17.21@lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/_lodash@4.17.21@lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseIndexOf.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseIndexOf.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/_lodash@4.17.21@lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/_lodash@4.17.21@lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/_lodash@4.17.21@lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseIsArguments.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseIsArguments.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/_lodash@4.17.21@lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.21@lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseIsMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseIsMap.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/_lodash@4.17.21@lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.21@lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseIsNaN.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseIsNaN.js ***!
  \***********************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseIsNative.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseIsNative.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/_lodash@4.17.21@lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/_lodash@4.17.21@lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/_lodash@4.17.21@lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/_lodash@4.17.21@lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseIsSet.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseIsSet.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/_lodash@4.17.21@lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.21@lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseIsTypedArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseIsTypedArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/_lodash@4.17.21@lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/_lodash@4.17.21@lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.21@lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseKeys.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseKeys.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/_lodash@4.17.21@lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/_lodash@4.17.21@lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseKeysIn.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseKeysIn.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/_lodash@4.17.21@lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/_lodash@4.17.21@lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/_lodash@4.17.21@lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseMerge.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseMerge.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/_lodash@4.17.21@lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/_lodash@4.17.21@lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/_lodash@4.17.21@lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/_lodash@4.17.21@lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/_lodash@4.17.21@lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/_lodash@4.17.21@lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/_lodash@4.17.21@lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseMergeDeep.js":
/*!***************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseMergeDeep.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/_lodash@4.17.21@lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/_lodash@4.17.21@lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/_lodash@4.17.21@lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/_lodash@4.17.21@lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/_lodash@4.17.21@lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/_lodash@4.17.21@lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/_lodash@4.17.21@lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/_lodash@4.17.21@lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/_lodash@4.17.21@lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/_lodash@4.17.21@lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/_lodash@4.17.21@lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/_lodash@4.17.21@lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/_lodash@4.17.21@lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/_lodash@4.17.21@lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/_lodash@4.17.21@lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_basePropertyOf.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_basePropertyOf.js ***!
  \****************************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseRest.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseRest.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/_lodash@4.17.21@lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/_lodash@4.17.21@lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/_lodash@4.17.21@lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseSetToString.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseSetToString.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/_lodash@4.17.21@lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/_lodash@4.17.21@lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/_lodash@4.17.21@lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseTimes.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseTimes.js ***!
  \***********************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseToString.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseToString.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.21@lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/_lodash@4.17.21@lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/_lodash@4.17.21@lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/_lodash@4.17.21@lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseTrim.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseTrim.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/_lodash@4.17.21@lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_baseUnary.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_baseUnary.js ***!
  \***********************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_cacheHas.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_cacheHas.js ***!
  \**********************************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_castFunction.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_castFunction.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/_lodash@4.17.21@lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_cloneArrayBuffer.js":
/*!******************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_cloneArrayBuffer.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/_lodash@4.17.21@lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_cloneBuffer.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_cloneBuffer.js ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.21@lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_cloneDataView.js":
/*!***************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_cloneDataView.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/_lodash@4.17.21@lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_cloneRegExp.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_cloneRegExp.js ***!
  \*************************************************************/
/***/ ((module) => {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_cloneSymbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_cloneSymbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.21@lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_cloneTypedArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_cloneTypedArray.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/_lodash@4.17.21@lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_copyArray.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_copyArray.js ***!
  \***********************************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_copyObject.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_copyObject.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/_lodash@4.17.21@lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/_lodash@4.17.21@lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_copySymbols.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_copySymbols.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/_lodash@4.17.21@lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/_lodash@4.17.21@lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_copySymbolsIn.js":
/*!***************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_copySymbolsIn.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/_lodash@4.17.21@lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/_lodash@4.17.21@lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_coreJsData.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_coreJsData.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.21@lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_createAssigner.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_createAssigner.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/_lodash@4.17.21@lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/_lodash@4.17.21@lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_createBaseEach.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_createBaseEach.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/_lodash@4.17.21@lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_createBaseFor.js":
/*!***************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_createBaseFor.js ***!
  \***************************************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_createCompounder.js":
/*!******************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_createCompounder.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/_lodash@4.17.21@lodash/_arrayReduce.js"),
    deburr = __webpack_require__(/*! ./deburr */ "./node_modules/_lodash@4.17.21@lodash/deburr.js"),
    words = __webpack_require__(/*! ./words */ "./node_modules/_lodash@4.17.21@lodash/words.js");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_deburrLetter.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_deburrLetter.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/_lodash@4.17.21@lodash/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_defineProperty.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_defineProperty.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/_lodash@4.17.21@lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_freeGlobal.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_freeGlobal.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_getAllKeys.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_getAllKeys.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/_lodash@4.17.21@lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/_lodash@4.17.21@lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/_lodash@4.17.21@lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_getAllKeysIn.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_getAllKeysIn.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/_lodash@4.17.21@lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/_lodash@4.17.21@lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/_lodash@4.17.21@lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_getMapData.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_getMapData.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/_lodash@4.17.21@lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_getNative.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_getNative.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/_lodash@4.17.21@lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/_lodash@4.17.21@lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_getPrototype.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_getPrototype.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/_lodash@4.17.21@lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_getRawTag.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_getRawTag.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.21@lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_getSymbols.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_getSymbols.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/_lodash@4.17.21@lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/_lodash@4.17.21@lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_getSymbolsIn.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_getSymbolsIn.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/_lodash@4.17.21@lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/_lodash@4.17.21@lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/_lodash@4.17.21@lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/_lodash@4.17.21@lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_getTag.js":
/*!********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_getTag.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/_lodash@4.17.21@lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/_lodash@4.17.21@lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/_lodash@4.17.21@lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/_lodash@4.17.21@lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/_lodash@4.17.21@lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/_lodash@4.17.21@lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/_lodash@4.17.21@lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_getValue.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_getValue.js ***!
  \**********************************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_hasUnicodeWord.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_hasUnicodeWord.js ***!
  \****************************************************************/
/***/ ((module) => {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_hashClear.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_hashClear.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/_lodash@4.17.21@lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_hashDelete.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_hashDelete.js ***!
  \************************************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_hashGet.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_hashGet.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/_lodash@4.17.21@lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_hashHas.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_hashHas.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/_lodash@4.17.21@lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_hashSet.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_hashSet.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/_lodash@4.17.21@lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_initCloneArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_initCloneArray.js ***!
  \****************************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_initCloneByTag.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_initCloneByTag.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/_lodash@4.17.21@lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/_lodash@4.17.21@lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/_lodash@4.17.21@lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/_lodash@4.17.21@lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/_lodash@4.17.21@lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_initCloneObject.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_initCloneObject.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/_lodash@4.17.21@lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/_lodash@4.17.21@lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/_lodash@4.17.21@lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_isFlattenable.js":
/*!***************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_isFlattenable.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.21@lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/_lodash@4.17.21@lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/_lodash@4.17.21@lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_isIndex.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_isIndex.js ***!
  \*********************************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_isIterateeCall.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_isIterateeCall.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/_lodash@4.17.21@lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/_lodash@4.17.21@lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/_lodash@4.17.21@lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/_lodash@4.17.21@lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_isKeyable.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_isKeyable.js ***!
  \***********************************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_isMasked.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_isMasked.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/_lodash@4.17.21@lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_isPrototype.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_isPrototype.js ***!
  \*************************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_listCacheClear.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_listCacheClear.js ***!
  \****************************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_listCacheDelete.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_listCacheDelete.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/_lodash@4.17.21@lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_listCacheGet.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_listCacheGet.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/_lodash@4.17.21@lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_listCacheHas.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_listCacheHas.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/_lodash@4.17.21@lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_listCacheSet.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_listCacheSet.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/_lodash@4.17.21@lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_mapCacheClear.js":
/*!***************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_mapCacheClear.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/_lodash@4.17.21@lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/_lodash@4.17.21@lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/_lodash@4.17.21@lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_mapCacheDelete.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_mapCacheDelete.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/_lodash@4.17.21@lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_mapCacheGet.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_mapCacheGet.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/_lodash@4.17.21@lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_mapCacheHas.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_mapCacheHas.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/_lodash@4.17.21@lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_mapCacheSet.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_mapCacheSet.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/_lodash@4.17.21@lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_nativeCreate.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_nativeCreate.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/_lodash@4.17.21@lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_nativeKeys.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_nativeKeys.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/_lodash@4.17.21@lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_nativeKeysIn.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_nativeKeysIn.js ***!
  \**************************************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_nodeUtil.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_nodeUtil.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/_lodash@4.17.21@lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_objectToString.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_objectToString.js ***!
  \****************************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_overArg.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_overArg.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_overRest.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_overRest.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/_lodash@4.17.21@lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_root.js":
/*!******************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_root.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/_lodash@4.17.21@lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_safeGet.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_safeGet.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_setCacheAdd.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_setCacheAdd.js ***!
  \*************************************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_setCacheHas.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_setCacheHas.js ***!
  \*************************************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_setToString.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_setToString.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/_lodash@4.17.21@lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/_lodash@4.17.21@lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_shortOut.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_shortOut.js ***!
  \**********************************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_stackClear.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_stackClear.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/_lodash@4.17.21@lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_stackDelete.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_stackDelete.js ***!
  \*************************************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_stackGet.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_stackGet.js ***!
  \**********************************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_stackHas.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_stackHas.js ***!
  \**********************************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_stackSet.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_stackSet.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/_lodash@4.17.21@lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/_lodash@4.17.21@lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/_lodash@4.17.21@lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_strictIndexOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_strictIndexOf.js ***!
  \***************************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_toSource.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_toSource.js ***!
  \**********************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_trimmedEndIndex.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_trimmedEndIndex.js ***!
  \*****************************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/_unicodeWords.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/_unicodeWords.js ***!
  \**************************************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/before.js":
/*!*******************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/before.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/_lodash@4.17.21@lodash/toInteger.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/cloneDeep.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/cloneDeep.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/_lodash@4.17.21@lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/concat.js":
/*!*******************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/concat.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/_lodash@4.17.21@lodash/_arrayPush.js"),
    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/_lodash@4.17.21@lodash/_baseFlatten.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/_lodash@4.17.21@lodash/_copyArray.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/_lodash@4.17.21@lodash/isArray.js");

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

module.exports = concat;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/constant.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/constant.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/deburr.js":
/*!*******************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/deburr.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ "./node_modules/_lodash@4.17.21@lodash/_deburrLetter.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/_lodash@4.17.21@lodash/toString.js");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/eq.js":
/*!***************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/eq.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/forEach.js":
/*!********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/forEach.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/_lodash@4.17.21@lodash/_arrayEach.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/_lodash@4.17.21@lodash/_baseEach.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/_lodash@4.17.21@lodash/_castFunction.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/_lodash@4.17.21@lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/identity.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/identity.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isArguments.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isArguments.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/_lodash@4.17.21@lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.21@lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isArray.js":
/*!********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isArray.js ***!
  \********************************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isArrayLike.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isArrayLike.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/_lodash@4.17.21@lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/_lodash@4.17.21@lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isArrayLikeObject.js":
/*!******************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isArrayLikeObject.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/_lodash@4.17.21@lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.21@lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isBuffer.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isBuffer.js ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.21@lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/_lodash@4.17.21@lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isFunction.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isFunction.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/_lodash@4.17.21@lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/_lodash@4.17.21@lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isLength.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isLength.js ***!
  \*********************************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isMap.js":
/*!******************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isMap.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/_lodash@4.17.21@lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/_lodash@4.17.21@lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/_lodash@4.17.21@lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isObject.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isObject.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isObjectLike.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isObjectLike.js ***!
  \*************************************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isPlainObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isPlainObject.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/_lodash@4.17.21@lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/_lodash@4.17.21@lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.21@lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isSet.js":
/*!******************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isSet.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/_lodash@4.17.21@lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/_lodash@4.17.21@lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/_lodash@4.17.21@lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isSymbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isSymbol.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/_lodash@4.17.21@lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.21@lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/isTypedArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/isTypedArray.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/_lodash@4.17.21@lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/_lodash@4.17.21@lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/_lodash@4.17.21@lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/keys.js":
/*!*****************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/keys.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/_lodash@4.17.21@lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/_lodash@4.17.21@lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/_lodash@4.17.21@lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/keysIn.js":
/*!*******************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/keysIn.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/_lodash@4.17.21@lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/_lodash@4.17.21@lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/_lodash@4.17.21@lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/memoize.js":
/*!********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/memoize.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/_lodash@4.17.21@lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/mergeWith.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/mergeWith.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/_lodash@4.17.21@lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/_lodash@4.17.21@lodash/_createAssigner.js");

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/noop.js":
/*!*****************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/noop.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/once.js":
/*!*****************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/once.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var before = __webpack_require__(/*! ./before */ "./node_modules/_lodash@4.17.21@lodash/before.js");

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/snakeCase.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/snakeCase.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/_lodash@4.17.21@lodash/_createCompounder.js");

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
var snakeCase = createCompounder(function(result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

module.exports = snakeCase;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/stubArray.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/stubArray.js ***!
  \**********************************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/stubFalse.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/stubFalse.js ***!
  \**********************************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/toFinite.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/toFinite.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/_lodash@4.17.21@lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/toInteger.js":
/*!**********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/toInteger.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/_lodash@4.17.21@lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/toNumber.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/toNumber.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/_lodash@4.17.21@lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/_lodash@4.17.21@lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/_lodash@4.17.21@lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/toPlainObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/toPlainObject.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/_lodash@4.17.21@lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/_lodash@4.17.21@lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/toString.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/toString.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/_lodash@4.17.21@lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/without.js":
/*!********************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/without.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(/*! ./_baseDifference */ "./node_modules/_lodash@4.17.21@lodash/_baseDifference.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/_lodash@4.17.21@lodash/_baseRest.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/_lodash@4.17.21@lodash/isArrayLikeObject.js");

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),

/***/ "./node_modules/_lodash@4.17.21@lodash/words.js":
/*!******************************************************!*\
  !*** ./node_modules/_lodash@4.17.21@lodash/words.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ "./node_modules/_lodash@4.17.21@lodash/_asciiWords.js"),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ "./node_modules/_lodash@4.17.21@lodash/_hasUnicodeWord.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/_lodash@4.17.21@lodash/toString.js"),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ "./node_modules/_lodash@4.17.21@lodash/_unicodeWords.js");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/addons/engineFlag.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/addons/engineFlag.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAddOn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @author Kuitos
 * @since 2020-05-15
 */
function getAddOn(global) {
  return {
    beforeLoad: function beforeLoad() {
      return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // eslint-disable-next-line no-param-reassign
              global.__POWERED_BY_QIANKUN__ = true;
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    beforeMount: function beforeMount() {
      return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // eslint-disable-next-line no-param-reassign
              global.__POWERED_BY_QIANKUN__ = true;
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    beforeUnmount: function beforeUnmount() {
      return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              // eslint-disable-next-line no-param-reassign
              delete global.__POWERED_BY_QIANKUN__;
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  };
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/addons/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/addons/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAddOns)
/* harmony export */ });
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/concat */ "./node_modules/_lodash@4.17.21@lodash/concat.js");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/mergeWith */ "./node_modules/_lodash@4.17.21@lodash/mergeWith.js");
/* harmony import */ var lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _engineFlag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engineFlag */ "./node_modules/_qiankun@2.10.16@qiankun/es/addons/engineFlag.js");
/* harmony import */ var _runtimePublicPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runtimePublicPath */ "./node_modules/_qiankun@2.10.16@qiankun/es/addons/runtimePublicPath.js");


/**
 * @author Kuitos
 * @since 2020-03-02
 */


function getAddOns(global, publicPath) {
  return lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1___default()({}, (0,_engineFlag__WEBPACK_IMPORTED_MODULE_2__["default"])(global), (0,_runtimePublicPath__WEBPACK_IMPORTED_MODULE_3__["default"])(global, publicPath), function (v1, v2) {
    return lodash_concat__WEBPACK_IMPORTED_MODULE_0___default()(v1 !== null && v1 !== void 0 ? v1 : [], v2 !== null && v2 !== void 0 ? v2 : []);
  });
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/addons/runtimePublicPath.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/addons/runtimePublicPath.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAddOn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var rawPublicPath = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
function getAddOn(global) {
  var publicPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  var hasMountedOnce = false;
  return {
    beforeLoad: function beforeLoad() {
      return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // eslint-disable-next-line no-param-reassign
              global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = publicPath;
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    beforeMount: function beforeMount() {
      return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (hasMountedOnce) {
                // eslint-disable-next-line no-param-reassign
                global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = publicPath;
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    beforeUnmount: function beforeUnmount() {
      return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (rawPublicPath === undefined) {
                // eslint-disable-next-line no-param-reassign
                delete global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
              } else {
                // eslint-disable-next-line no-param-reassign
                global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = rawPublicPath;
              }
              hasMountedOnce = true;
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  };
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/apis.js":
/*!**********************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/apis.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   frameworkConfiguration: () => (/* binding */ frameworkConfiguration),
/* harmony export */   loadMicroApp: () => (/* binding */ loadMicroApp),
/* harmony export */   registerMicroApps: () => (/* binding */ registerMicroApps),
/* harmony export */   start: () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/_lodash@4.17.21@lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! single-spa */ "./node_modules/_single-spa@5.9.5@single-spa/lib/esm/single-spa.min.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader */ "./node_modules/_qiankun@2.10.16@qiankun/es/loader.js");
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prefetch */ "./node_modules/_qiankun@2.10.16@qiankun/es/prefetch.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/_qiankun@2.10.16@qiankun/es/utils.js");






var _excluded = ["name", "activeRule", "loader", "props"],
  _excluded2 = ["mount"],
  _excluded3 = ["prefetch", "urlRerouteOnly"];





var microApps = [];
var frameworkConfiguration = {};
var started = false;
var defaultUrlRerouteOnly = true;
var frameworkStartedDefer = new _utils__WEBPACK_IMPORTED_MODULE_8__.Deferred();
var autoDowngradeForLowVersionBrowser = function autoDowngradeForLowVersionBrowser(configuration) {
  var _configuration$sandbo = configuration.sandbox,
    sandbox = _configuration$sandbo === void 0 ? true : _configuration$sandbo,
    singular = configuration.singular;
  if (sandbox) {
    if (!window.Proxy) {
      console.warn('[qiankun] Missing window.Proxy, proxySandbox will degenerate into snapshotSandbox');
      if (singular === false) {
        console.warn('[qiankun] Setting singular as false may cause unexpected behavior while your browser not support window.Proxy');
      }
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, configuration), {}, {
        sandbox: (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(sandbox) === 'object' ? (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, sandbox), {}, {
          loose: true
        }) : {
          loose: true
        }
      });
    }
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.isConstDestructAssignmentSupported)() && (sandbox === true || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(sandbox) === 'object' && sandbox.speedy !== false)) {
      console.warn('[qiankun] Speedy mode will turn off as const destruct assignment not supported in current browser!');
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, configuration), {}, {
        sandbox: (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(sandbox) === 'object' ? (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, sandbox), {}, {
          speedy: false
        }) : {
          speedy: false
        }
      });
    }
  }
  return configuration;
};
function registerMicroApps(apps, lifeCycles) {
  // Each app only needs to be registered once
  var unregisteredApps = apps.filter(function (app) {
    return !microApps.some(function (registeredApp) {
      return registeredApp.name === app.name;
    });
  });
  microApps = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(microApps), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(unregisteredApps));
  unregisteredApps.forEach(function (app) {
    var name = app.name,
      activeRule = app.activeRule,
      _app$loader = app.loader,
      loader = _app$loader === void 0 ? (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()) : _app$loader,
      props = app.props,
      appConfig = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(app, _excluded);
    (0,single_spa__WEBPACK_IMPORTED_MODULE_7__.registerApplication)({
      name: name,
      app: function () {
        var _app = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee3() {
          var _yield$loadApp, mount, otherMicroAppConfigs;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                loader(true);
                _context3.next = 3;
                return frameworkStartedDefer.promise;
              case 3:
                _context3.next = 5;
                return (0,_loader__WEBPACK_IMPORTED_MODULE_9__.loadApp)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({
                  name: name,
                  props: props
                }, appConfig), frameworkConfiguration, lifeCycles);
              case 5:
                _context3.t0 = _context3.sent;
                _yield$loadApp = (0, _context3.t0)();
                mount = _yield$loadApp.mount;
                otherMicroAppConfigs = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_yield$loadApp, _excluded2);
                return _context3.abrupt("return", (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({
                  mount: [/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          return _context.abrupt("return", loader(true));
                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }))].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toArray)(mount)), [/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee2() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          return _context2.abrupt("return", loader(false));
                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  }))])
                }, otherMicroAppConfigs));
              case 10:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        function app() {
          return _app.apply(this, arguments);
        }
        return app;
      }(),
      activeWhen: activeRule,
      customProps: props
    });
  });
}
var appConfigPromiseGetterMap = new Map();
var containerMicroAppsMap = new Map();
function loadMicroApp(app, configuration, lifeCycles) {
  var props = app.props,
    name = app.name;
  var container = 'container' in app ? app.container : undefined;
  // Must compute the container xpath at beginning to keep it consist around app running
  // If we compute it every time, the container dom structure most probably been changed and result in a different xpath value
  var containerXPath = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getContainerXPath)(container);
  var appContainerXPathKey = "".concat(name, "-").concat(containerXPath);
  var microApp;
  var wrapParcelConfigForRemount = function wrapParcelConfigForRemount(config) {
    var microAppConfig = config;
    if (container) {
      if (containerXPath) {
        var containerMicroApps = containerMicroAppsMap.get(appContainerXPathKey);
        if (containerMicroApps === null || containerMicroApps === void 0 ? void 0 : containerMicroApps.length) {
          var mount = [/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee4() {
            var prevLoadMicroApps, prevLoadMicroAppsWhichNotBroken;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  // While there are multiple micro apps mounted on the same container, we must wait until the prev instances all had unmounted
                  // Otherwise it will lead some concurrent issues
                  prevLoadMicroApps = containerMicroApps.slice(0, containerMicroApps.indexOf(microApp));
                  prevLoadMicroAppsWhichNotBroken = prevLoadMicroApps.filter(function (v) {
                    return v.getStatus() !== 'LOAD_ERROR' && v.getStatus() !== 'SKIP_BECAUSE_BROKEN';
                  });
                  _context4.next = 4;
                  return Promise.all(prevLoadMicroAppsWhichNotBroken.map(function (v) {
                    return v.unmountPromise;
                  }));
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }))].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toArray)(microAppConfig.mount)));
          microAppConfig = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, config), {}, {
            mount: mount
          });
        }
      }
    }
    return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, microAppConfig), {}, {
      // empty bootstrap hook which should not run twice while it calling from cached micro app
      bootstrap: function bootstrap() {
        return Promise.resolve();
      }
    });
  };
  /**
   * using name + container xpath as the micro app instance id,
   * it means if you rendering a micro app to a dom which have been rendered before,
   * the micro app would not load and evaluate its lifecycles again
   */
  var memorizedLoadingFn = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee5() {
      var userConfiguration, $$cacheLifecycleByAppName, parcelConfigGetterPromise, _parcelConfigGetterPromise, parcelConfigObjectGetterPromise;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            userConfiguration = autoDowngradeForLowVersionBrowser(configuration !== null && configuration !== void 0 ? configuration : (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, frameworkConfiguration), {}, {
              singular: false
            }));
            $$cacheLifecycleByAppName = userConfiguration.$$cacheLifecycleByAppName;
            if (!container) {
              _context5.next = 21;
              break;
            }
            if (!$$cacheLifecycleByAppName) {
              _context5.next = 12;
              break;
            }
            parcelConfigGetterPromise = appConfigPromiseGetterMap.get(name);
            if (!parcelConfigGetterPromise) {
              _context5.next = 12;
              break;
            }
            _context5.t0 = wrapParcelConfigForRemount;
            _context5.next = 9;
            return parcelConfigGetterPromise;
          case 9:
            _context5.t1 = _context5.sent;
            _context5.t2 = (0, _context5.t1)(container);
            return _context5.abrupt("return", (0, _context5.t0)(_context5.t2));
          case 12:
            if (!containerXPath) {
              _context5.next = 21;
              break;
            }
            _parcelConfigGetterPromise = appConfigPromiseGetterMap.get(appContainerXPathKey);
            if (!_parcelConfigGetterPromise) {
              _context5.next = 21;
              break;
            }
            _context5.t3 = wrapParcelConfigForRemount;
            _context5.next = 18;
            return _parcelConfigGetterPromise;
          case 18:
            _context5.t4 = _context5.sent;
            _context5.t5 = (0, _context5.t4)(container);
            return _context5.abrupt("return", (0, _context5.t3)(_context5.t5));
          case 21:
            parcelConfigObjectGetterPromise = (0,_loader__WEBPACK_IMPORTED_MODULE_9__.loadApp)(app, userConfiguration, lifeCycles);
            if (container) {
              if ($$cacheLifecycleByAppName) {
                appConfigPromiseGetterMap.set(name, parcelConfigObjectGetterPromise);
              } else if (containerXPath) appConfigPromiseGetterMap.set(appContainerXPathKey, parcelConfigObjectGetterPromise);
            }
            _context5.next = 25;
            return parcelConfigObjectGetterPromise;
          case 25:
            _context5.t6 = _context5.sent;
            return _context5.abrupt("return", (0, _context5.t6)(container));
          case 27:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function memorizedLoadingFn() {
      return _ref4.apply(this, arguments);
    };
  }();
  if (!started && (configuration === null || configuration === void 0 ? void 0 : configuration.autoStart) !== false) {
    var _frameworkConfigurati;
    // We need to invoke start method of single-spa as the popstate event should be dispatched while the main app calling pushState/replaceState automatically,
    // but in single-spa it will check the start status before it dispatch popstate
    // see https://github.com/single-spa/single-spa/blob/f28b5963be1484583a072c8145ac0b5a28d91235/src/navigation/navigation-events.js#L101
    // ref https://github.com/umijs/qiankun/pull/1071
    (0,single_spa__WEBPACK_IMPORTED_MODULE_7__.start)({
      urlRerouteOnly: (_frameworkConfigurati = frameworkConfiguration.urlRerouteOnly) !== null && _frameworkConfigurati !== void 0 ? _frameworkConfigurati : defaultUrlRerouteOnly
    });
  }
  microApp = (0,single_spa__WEBPACK_IMPORTED_MODULE_7__.mountRootParcel)(memorizedLoadingFn, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({
    domElement: document.createElement('div')
  }, props));
  if (container) {
    if (containerXPath) {
      // Store the microApps which they mounted on the same container
      var microAppsRef = containerMicroAppsMap.get(appContainerXPathKey) || [];
      microAppsRef.push(microApp);
      containerMicroAppsMap.set(appContainerXPathKey, microAppsRef);
      var cleanup = function cleanup() {
        var index = microAppsRef.indexOf(microApp);
        microAppsRef.splice(index, 1);
        // @ts-ignore
        microApp = null;
      };
      // gc after unmount
      microApp.unmountPromise.then(cleanup).catch(cleanup);
    }
  }
  return microApp;
}
function start() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  frameworkConfiguration = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({
    prefetch: true,
    singular: true,
    sandbox: true
  }, opts);
  var _frameworkConfigurati2 = frameworkConfiguration,
    prefetch = _frameworkConfigurati2.prefetch,
    _frameworkConfigurati3 = _frameworkConfigurati2.urlRerouteOnly,
    urlRerouteOnly = _frameworkConfigurati3 === void 0 ? defaultUrlRerouteOnly : _frameworkConfigurati3,
    importEntryOpts = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_frameworkConfigurati2, _excluded3);
  if (prefetch) {
    (0,_prefetch__WEBPACK_IMPORTED_MODULE_10__.doPrefetchStrategy)(microApps, prefetch, importEntryOpts);
  }
  frameworkConfiguration = autoDowngradeForLowVersionBrowser(frameworkConfiguration);
  (0,single_spa__WEBPACK_IMPORTED_MODULE_7__.start)({
    urlRerouteOnly: urlRerouteOnly
  });
  started = true;
  frameworkStartedDefer.resolve();
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/error.js":
/*!***********************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/error.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QiankunError: () => (/* binding */ QiankunError)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/wrapNativeSuper.js");





var QiankunError = /*#__PURE__*/function (_Error) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(QiankunError, _Error);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(QiankunError);
  function QiankunError(message) {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, QiankunError);
    return _super.call(this, "[qiankun]: ".concat(message));
  }
  return (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(QiankunError);
}( /*#__PURE__*/(0,_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Error));

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/globalState.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/globalState.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMicroAppStateActions: () => (/* binding */ getMicroAppStateActions),
/* harmony export */   initGlobalState: () => (/* binding */ initGlobalState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/_lodash@4.17.21@lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @author dbkillerf6
 * @since 2020-04-10
 */
var globalState = {};
var deps = {};
// 触发全局监听
function emitGlobal(state, prevState) {
  Object.keys(deps).forEach(function (id) {
    if (deps[id] instanceof Function) {
      deps[id](lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(prevState));
    }
  });
}
function initGlobalState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (true) {
    console.warn("[qiankun] globalState tools will be removed in 3.0, pls don't use it!");
  }
  if (state === globalState) {
    console.warn('[qiankun] state has not changed！');
  } else {
    var prevGlobalState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(globalState);
    globalState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(state);
    emitGlobal(globalState, prevGlobalState);
  }
  return getMicroAppStateActions("global-".concat(+new Date()), true);
}
function getMicroAppStateActions(id, isMaster) {
  return {
    /**
     * onGlobalStateChange 全局依赖监听
     *
     * 收集 setState 时所需要触发的依赖
     *
     * 限制条件：每个子应用只有一个激活状态的全局监听，新监听覆盖旧监听，若只是监听部分属性，请使用 onGlobalStateChange
     *
     * 这么设计是为了减少全局监听滥用导致的内存爆炸
     *
     * 依赖数据结构为：
     * {
     *   {id}: callback
     * }
     *
     * @param callback
     * @param fireImmediately
     */
    onGlobalStateChange: function onGlobalStateChange(callback, fireImmediately) {
      if (!(callback instanceof Function)) {
        console.error('[qiankun] callback must be function!');
        return;
      }
      if (deps[id]) {
        console.warn("[qiankun] '".concat(id, "' global listener already exists before this, new listener will overwrite it."));
      }
      deps[id] = callback;
      if (fireImmediately) {
        var cloneState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(globalState);
        callback(cloneState, cloneState);
      }
    },
    /**
     * setGlobalState 更新 store 数据
     *
     * 1. 对输入 state 的第一层属性做校验，只有初始化时声明过的第一层（bucket）属性才会被更改
     * 2. 修改 store 并触发全局监听
     *
     * @param state
     */
    setGlobalState: function setGlobalState() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (state === globalState) {
        console.warn('[qiankun] state has not changed！');
        return false;
      }
      var changeKeys = [];
      var prevGlobalState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(globalState);
      globalState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(Object.keys(state).reduce(function (_globalState, changeKey) {
        if (isMaster || _globalState.hasOwnProperty(changeKey)) {
          changeKeys.push(changeKey);
          return Object.assign(_globalState, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, changeKey, state[changeKey]));
        }
        console.warn("[qiankun] '".concat(changeKey, "' not declared when init state\uFF01"));
        return _globalState;
      }, globalState));
      if (changeKeys.length === 0) {
        console.warn('[qiankun] state has not changed！');
        return false;
      }
      emitGlobal(globalState, prevGlobalState);
      return true;
    },
    // 注销该应用下的依赖
    offGlobalStateChange: function offGlobalStateChange() {
      delete deps[id];
      return true;
    }
  };
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/interfaces.js":
/*!****************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/interfaces.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SandBoxType: () => (/* binding */ SandBoxType)
/* harmony export */ });
var SandBoxType;
(function (SandBoxType) {
  SandBoxType["Proxy"] = "Proxy";
  SandBoxType["Snapshot"] = "Snapshot";
  // for legacy sandbox
  // https://github.com/umijs/qiankun/blob/0d1d3f0c5ed1642f01854f96c3fabf0a2148bd26/src/sandbox/legacy/sandbox.ts#L22...L25
  SandBoxType["LegacyProxy"] = "LegacyProxy";
})(SandBoxType || (SandBoxType = {}));

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/loader.js":
/*!************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/loader.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadApp: () => (/* binding */ loadApp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/concat */ "./node_modules/_lodash@4.17.21@lodash/concat.js");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_mergeWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/mergeWith */ "./node_modules/_lodash@4.17.21@lodash/mergeWith.js");
/* harmony import */ var lodash_mergeWith__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_mergeWith__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/_lodash@4.17.21@lodash/forEach.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var import_html_entry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! import-html-entry */ "./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/index.js");
/* harmony import */ var _addons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addons */ "./node_modules/_qiankun@2.10.16@qiankun/es/addons/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error */ "./node_modules/_qiankun@2.10.16@qiankun/es/error.js");
/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./globalState */ "./node_modules/_qiankun@2.10.16@qiankun/es/globalState.js");
/* harmony import */ var _sandbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sandbox */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/css.js");
/* harmony import */ var _sandbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sandbox */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/index.js");
/* harmony import */ var _sandbox_proxySandbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sandbox/proxySandbox */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/proxySandbox.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./node_modules/_qiankun@2.10.16@qiankun/es/utils.js");







var _excluded = ["singular", "sandbox", "excludeAssetFilter", "globalContext"];

/**
 * @author Kuitos
 * @since 2020-04-01
 */







function assertElementExist(element, msg) {
  if (!element) {
    if (msg) {
      throw new _error__WEBPACK_IMPORTED_MODULE_8__.QiankunError(msg);
    }
    throw new _error__WEBPACK_IMPORTED_MODULE_8__.QiankunError('element not existed!');
  }
}
function execHooksChain(hooks, app) {
  var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  if (hooks.length) {
    return hooks.reduce(function (chain, hook) {
      return chain.then(function () {
        return hook(app, global);
      });
    }, Promise.resolve());
  }
  return Promise.resolve();
}
function validateSingularMode(_x, _x2) {
  return _validateSingularMode.apply(this, arguments);
}
function _validateSingularMode() {
  _validateSingularMode = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee(validate, app) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", typeof validate === 'function' ? validate(app) : !!validate);
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _validateSingularMode.apply(this, arguments);
}
var supportShadowDOM = !!document.head.attachShadow || !!document.head.createShadowRoot;
function createElement(appContent, strictStyleIsolation, scopedCSS, appInstanceId) {
  var containerElement = document.createElement('div');
  containerElement.innerHTML = appContent;
  // appContent always wrapped with a singular div
  var appElement = containerElement.firstChild;
  if (strictStyleIsolation) {
    if (!supportShadowDOM) {
      console.warn('[qiankun]: As current browser not support shadow dom, your strictStyleIsolation configuration will be ignored!');
    } else {
      var innerHTML = appElement.innerHTML;
      appElement.innerHTML = '';
      var shadow;
      if (appElement.attachShadow) {
        shadow = appElement.attachShadow({
          mode: 'open'
        });
      } else {
        // createShadowRoot was proposed in initial spec, which has then been deprecated
        shadow = appElement.createShadowRoot();
      }
      shadow.innerHTML = innerHTML;
    }
  }
  if (scopedCSS) {
    var attr = appElement.getAttribute(_sandbox__WEBPACK_IMPORTED_MODULE_9__.QiankunCSSRewriteAttr);
    if (!attr) {
      appElement.setAttribute(_sandbox__WEBPACK_IMPORTED_MODULE_9__.QiankunCSSRewriteAttr, appInstanceId);
    }
    var styleNodes = appElement.querySelectorAll('style') || [];
    lodash_forEach__WEBPACK_IMPORTED_MODULE_5___default()(styleNodes, function (stylesheetElement) {
      _sandbox__WEBPACK_IMPORTED_MODULE_9__.process(appElement, stylesheetElement, appInstanceId);
    });
  }
  return appElement;
}
/** generate app wrapper dom getter */
function getAppWrapperGetter(appInstanceId, useLegacyRender, strictStyleIsolation, scopedCSS, elementGetter) {
  return function () {
    if (useLegacyRender) {
      if (strictStyleIsolation) throw new _error__WEBPACK_IMPORTED_MODULE_8__.QiankunError('strictStyleIsolation can not be used with legacy render!');
      if (scopedCSS) throw new _error__WEBPACK_IMPORTED_MODULE_8__.QiankunError('experimentalStyleIsolation can not be used with legacy render!');
      var appWrapper = document.getElementById((0,_utils__WEBPACK_IMPORTED_MODULE_10__.getWrapperId)(appInstanceId));
      assertElementExist(appWrapper, "Wrapper element for ".concat(appInstanceId, " is not existed!"));
      return appWrapper;
    }
    var element = elementGetter();
    assertElementExist(element, "Wrapper element for ".concat(appInstanceId, " is not existed!"));
    if (strictStyleIsolation && supportShadowDOM) {
      return element.shadowRoot;
    }
    return element;
  };
}
var rawAppendChild = HTMLElement.prototype.appendChild;
var rawRemoveChild = HTMLElement.prototype.removeChild;
/**
 * Get the render function
 * If the legacy render function is provide, used as it, otherwise we will insert the app element to target container by qiankun
 * @param appInstanceId
 * @param appContent
 * @param legacyRender
 */
function getRender(appInstanceId, appContent, legacyRender) {
  var render = function render(_ref, phase) {
    var element = _ref.element,
      loading = _ref.loading,
      container = _ref.container;
    if (legacyRender) {
      if (true) {
        console.error('[qiankun] Custom rendering function is deprecated and will be removed in 3.0, you can use the container element setting instead!');
      }
      return legacyRender({
        loading: loading,
        appContent: element ? appContent : ''
      });
    }
    var containerElement = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getContainer)(container);
    // The container might have be removed after micro app unmounted.
    // Such as the micro app unmount lifecycle called by a react componentWillUnmount lifecycle, after micro app unmounted, the react component might also be removed
    if (phase !== 'unmounted') {
      var errorMsg = function () {
        switch (phase) {
          case 'loading':
          case 'mounting':
            return "Target container with ".concat(container, " not existed while ").concat(appInstanceId, " ").concat(phase, "!");
          case 'mounted':
            return "Target container with ".concat(container, " not existed after ").concat(appInstanceId, " ").concat(phase, "!");
          default:
            return "Target container with ".concat(container, " not existed while ").concat(appInstanceId, " rendering!");
        }
      }();
      assertElementExist(containerElement, errorMsg);
    }
    if (containerElement && !containerElement.contains(element)) {
      // clear the container
      while (containerElement.firstChild) {
        rawRemoveChild.call(containerElement, containerElement.firstChild);
      }
      // append the element to container if it exist
      if (element) {
        rawAppendChild.call(containerElement, element);
      }
    }
    return undefined;
  };
  return render;
}
function getLifecyclesFromExports(scriptExports, appName, global, globalLatestSetProp) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_10__.validateExportLifecycle)(scriptExports)) {
    return scriptExports;
  }
  // fallback to sandbox latest set property if it had
  if (globalLatestSetProp) {
    var lifecycles = global[globalLatestSetProp];
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_10__.validateExportLifecycle)(lifecycles)) {
      return lifecycles;
    }
  }
  if (true) {
    console.warn("[qiankun] lifecycle not found from ".concat(appName, " entry exports, fallback to get from window['").concat(appName, "']"));
  }
  // fallback to global variable who named with ${appName} while module exports not found
  var globalVariableExports = global[appName];
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_10__.validateExportLifecycle)(globalVariableExports)) {
    return globalVariableExports;
  }
  throw new _error__WEBPACK_IMPORTED_MODULE_8__.QiankunError("You need to export lifecycle functions in ".concat(appName, " entry"));
}
var prevAppUnmountedDeferred;
function loadApp(_x3) {
  return _loadApp.apply(this, arguments);
}
function _loadApp() {
  _loadApp = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee17(app) {
    var _sandboxContainer, _sandboxContainer$ins;
    var configuration,
      lifeCycles,
      entry,
      appName,
      appInstanceId,
      markName,
      _configuration$singul,
      singular,
      _configuration$sandbo,
      sandbox,
      excludeAssetFilter,
      _configuration$global,
      globalContext,
      importEntryOpts,
      _yield$importEntry,
      template,
      execScripts,
      assetPublicPath,
      getExternalScripts,
      appContent,
      strictStyleIsolation,
      scopedCSS,
      initialAppWrapperElement,
      initialContainer,
      legacyRender,
      render,
      initialAppWrapperGetter,
      global,
      mountSandbox,
      unmountSandbox,
      useLooseSandbox,
      speedySandbox,
      sandboxContainer,
      _mergeWith,
      _mergeWith$beforeUnmo,
      beforeUnmount,
      _mergeWith$afterUnmou,
      afterUnmount,
      _mergeWith$afterMount,
      afterMount,
      _mergeWith$beforeMoun,
      beforeMount,
      _mergeWith$beforeLoad,
      beforeLoad,
      scriptExports,
      _getLifecyclesFromExp,
      bootstrap,
      mount,
      unmount,
      update,
      _getMicroAppStateActi,
      onGlobalStateChange,
      setGlobalState,
      offGlobalStateChange,
      syncAppWrapperElement2Sandbox,
      parcelConfigGetter,
      _args17 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          configuration = _args17.length > 1 && _args17[1] !== undefined ? _args17[1] : {};
          lifeCycles = _args17.length > 2 ? _args17[2] : undefined;
          entry = app.entry, appName = app.name;
          appInstanceId = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.genAppInstanceIdByName)(appName);
          markName = "[qiankun] App ".concat(appInstanceId, " Loading");
          if (true) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_10__.performanceMark)(markName);
          }
          _configuration$singul = configuration.singular, singular = _configuration$singul === void 0 ? false : _configuration$singul, _configuration$sandbo = configuration.sandbox, sandbox = _configuration$sandbo === void 0 ? true : _configuration$sandbo, excludeAssetFilter = configuration.excludeAssetFilter, _configuration$global = configuration.globalContext, globalContext = _configuration$global === void 0 ? window : _configuration$global, importEntryOpts = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(configuration, _excluded); // get the entry html content and script executor
          _context17.next = 9;
          return (0,import_html_entry__WEBPACK_IMPORTED_MODULE_11__.importEntry)(entry, importEntryOpts);
        case 9:
          _yield$importEntry = _context17.sent;
          template = _yield$importEntry.template;
          execScripts = _yield$importEntry.execScripts;
          assetPublicPath = _yield$importEntry.assetPublicPath;
          getExternalScripts = _yield$importEntry.getExternalScripts;
          _context17.next = 16;
          return getExternalScripts();
        case 16:
          _context17.next = 18;
          return validateSingularMode(singular, app);
        case 18:
          if (!_context17.sent) {
            _context17.next = 21;
            break;
          }
          _context17.next = 21;
          return prevAppUnmountedDeferred && prevAppUnmountedDeferred.promise;
        case 21:
          appContent = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getDefaultTplWrapper)(appInstanceId, sandbox)(template);
          strictStyleIsolation = (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(sandbox) === 'object' && !!sandbox.strictStyleIsolation;
          if ( true && strictStyleIsolation) {
            console.warn("[qiankun] strictStyleIsolation configuration will be removed in 3.0, pls don't depend on it or use experimentalStyleIsolation instead!");
          }
          scopedCSS = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.isEnableScopedCSS)(sandbox);
          initialAppWrapperElement = createElement(appContent, strictStyleIsolation, scopedCSS, appInstanceId);
          initialContainer = 'container' in app ? app.container : undefined;
          legacyRender = 'render' in app ? app.render : undefined;
          render = getRender(appInstanceId, appContent, legacyRender); // 第一次加载设置应用可见区域 dom 结构
          // 确保每次应用加载前容器 dom 结构已经设置完毕
          render({
            element: initialAppWrapperElement,
            loading: true,
            container: initialContainer
          }, 'loading');
          initialAppWrapperGetter = getAppWrapperGetter(appInstanceId, !!legacyRender, strictStyleIsolation, scopedCSS, function () {
            return initialAppWrapperElement;
          });
          global = globalContext;
          mountSandbox = function mountSandbox() {
            return Promise.resolve();
          };
          unmountSandbox = function unmountSandbox() {
            return Promise.resolve();
          };
          useLooseSandbox = (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(sandbox) === 'object' && !!sandbox.loose; // enable speedy mode by default
          speedySandbox = (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(sandbox) === 'object' ? sandbox.speedy !== false : true;
          if (sandbox) {
            sandboxContainer = (0,_sandbox__WEBPACK_IMPORTED_MODULE_12__.createSandboxContainer)(appInstanceId,
            // FIXME should use a strict sandbox logic while remount, see https://github.com/umijs/qiankun/issues/518
            initialAppWrapperGetter, scopedCSS, useLooseSandbox, excludeAssetFilter, global, speedySandbox);
            // 用沙箱的代理对象作为接下来使用的全局对象
            global = sandboxContainer.instance.proxy;
            mountSandbox = sandboxContainer.mount;
            unmountSandbox = sandboxContainer.unmount;
          }
          _mergeWith = lodash_mergeWith__WEBPACK_IMPORTED_MODULE_2___default()({}, (0,_addons__WEBPACK_IMPORTED_MODULE_13__["default"])(global, assetPublicPath), lifeCycles, function (v1, v2) {
            return lodash_concat__WEBPACK_IMPORTED_MODULE_1___default()(v1 !== null && v1 !== void 0 ? v1 : [], v2 !== null && v2 !== void 0 ? v2 : []);
          }), _mergeWith$beforeUnmo = _mergeWith.beforeUnmount, beforeUnmount = _mergeWith$beforeUnmo === void 0 ? [] : _mergeWith$beforeUnmo, _mergeWith$afterUnmou = _mergeWith.afterUnmount, afterUnmount = _mergeWith$afterUnmou === void 0 ? [] : _mergeWith$afterUnmou, _mergeWith$afterMount = _mergeWith.afterMount, afterMount = _mergeWith$afterMount === void 0 ? [] : _mergeWith$afterMount, _mergeWith$beforeMoun = _mergeWith.beforeMount, beforeMount = _mergeWith$beforeMoun === void 0 ? [] : _mergeWith$beforeMoun, _mergeWith$beforeLoad = _mergeWith.beforeLoad, beforeLoad = _mergeWith$beforeLoad === void 0 ? [] : _mergeWith$beforeLoad;
          _context17.next = 40;
          return execHooksChain((0,_utils__WEBPACK_IMPORTED_MODULE_10__.toArray)(beforeLoad), app, global);
        case 40:
          _context17.next = 42;
          return execScripts(global, sandbox && !useLooseSandbox, {
            scopedGlobalVariables: speedySandbox ? _sandbox_proxySandbox__WEBPACK_IMPORTED_MODULE_14__.cachedGlobals : []
          });
        case 42:
          scriptExports = _context17.sent;
          _getLifecyclesFromExp = getLifecyclesFromExports(scriptExports, appName, global, (_sandboxContainer = sandboxContainer) === null || _sandboxContainer === void 0 ? void 0 : (_sandboxContainer$ins = _sandboxContainer.instance) === null || _sandboxContainer$ins === void 0 ? void 0 : _sandboxContainer$ins.latestSetProp), bootstrap = _getLifecyclesFromExp.bootstrap, mount = _getLifecyclesFromExp.mount, unmount = _getLifecyclesFromExp.unmount, update = _getLifecyclesFromExp.update;
          _getMicroAppStateActi = (0,_globalState__WEBPACK_IMPORTED_MODULE_15__.getMicroAppStateActions)(appInstanceId), onGlobalStateChange = _getMicroAppStateActi.onGlobalStateChange, setGlobalState = _getMicroAppStateActi.setGlobalState, offGlobalStateChange = _getMicroAppStateActi.offGlobalStateChange; // FIXME temporary way
          syncAppWrapperElement2Sandbox = function syncAppWrapperElement2Sandbox(element) {
            return initialAppWrapperElement = element;
          };
          parcelConfigGetter = function parcelConfigGetter() {
            var remountContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialContainer;
            var appWrapperElement;
            var appWrapperGetter;
            var parcelConfig = {
              name: appInstanceId,
              bootstrap: bootstrap,
              mount: [/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee2() {
                var marks;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (true) {
                        marks = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.performanceGetEntriesByName)(markName, 'mark'); // mark length is zero means the app is remounting
                        if (marks && !marks.length) {
                          (0,_utils__WEBPACK_IMPORTED_MODULE_10__.performanceMark)(markName);
                        }
                      }
                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              })), /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee3() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return validateSingularMode(singular, app);
                    case 2:
                      _context3.t0 = _context3.sent;
                      if (!_context3.t0) {
                        _context3.next = 5;
                        break;
                      }
                      _context3.t0 = prevAppUnmountedDeferred;
                    case 5:
                      if (!_context3.t0) {
                        _context3.next = 7;
                        break;
                      }
                      return _context3.abrupt("return", prevAppUnmountedDeferred.promise);
                    case 7:
                      return _context3.abrupt("return", undefined);
                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              })),
              /*#__PURE__*/
              // initial wrapper element before app mount/remount
              (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee4() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      appWrapperElement = initialAppWrapperElement;
                      appWrapperGetter = getAppWrapperGetter(appInstanceId, !!legacyRender, strictStyleIsolation, scopedCSS, function () {
                        return appWrapperElement;
                      });
                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              })),
              /*#__PURE__*/
              // 添加 mount hook, 确保每次应用加载前容器 dom 结构已经设置完毕
              (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee5() {
                var useNewContainer;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      useNewContainer = remountContainer !== initialContainer;
                      if (useNewContainer || !appWrapperElement) {
                        // element will be destroyed after unmounted, we need to recreate it if it not exist
                        // or we try to remount into a new container
                        appWrapperElement = createElement(appContent, strictStyleIsolation, scopedCSS, appInstanceId);
                        syncAppWrapperElement2Sandbox(appWrapperElement);
                      }
                      render({
                        element: appWrapperElement,
                        loading: true,
                        container: remountContainer
                      }, 'mounting');
                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              })), mountSandbox,
              /*#__PURE__*/
              // exec the chain after rendering to keep the behavior with beforeLoad
              (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee6() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", execHooksChain((0,_utils__WEBPACK_IMPORTED_MODULE_10__.toArray)(beforeMount), app, global));
                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              })), /*#__PURE__*/function () {
                var _ref7 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee7(props) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        return _context7.abrupt("return", mount((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
                          container: appWrapperGetter(),
                          setGlobalState: setGlobalState,
                          onGlobalStateChange: onGlobalStateChange
                        })));
                      case 1:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function (_x4) {
                  return _ref7.apply(this, arguments);
                };
              }(),
              /*#__PURE__*/
              // finish loading after app mounted
              (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee8() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", render({
                        element: appWrapperElement,
                        loading: false,
                        container: remountContainer
                      }, 'mounted'));
                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              })), /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee9() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", execHooksChain((0,_utils__WEBPACK_IMPORTED_MODULE_10__.toArray)(afterMount), app, global));
                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9);
              })),
              /*#__PURE__*/
              // initialize the unmount defer after app mounted and resolve the defer after it unmounted
              (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee10() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return validateSingularMode(singular, app);
                    case 2:
                      if (!_context10.sent) {
                        _context10.next = 4;
                        break;
                      }
                      prevAppUnmountedDeferred = new _utils__WEBPACK_IMPORTED_MODULE_10__.Deferred();
                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10);
              })), /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee11() {
                var measureName;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee11$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      if (true) {
                        measureName = "[qiankun] App ".concat(appInstanceId, " Loading Consuming");
                        (0,_utils__WEBPACK_IMPORTED_MODULE_10__.performanceMeasure)(measureName, markName);
                      }
                    case 1:
                    case "end":
                      return _context11.stop();
                  }
                }, _callee11);
              }))],
              unmount: [/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee12() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      return _context12.abrupt("return", execHooksChain((0,_utils__WEBPACK_IMPORTED_MODULE_10__.toArray)(beforeUnmount), app, global));
                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12);
              })), /*#__PURE__*/function () {
                var _ref13 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee13(props) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                      case 0:
                        return _context13.abrupt("return", unmount((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
                          container: appWrapperGetter()
                        })));
                      case 1:
                      case "end":
                        return _context13.stop();
                    }
                  }, _callee13);
                }));
                return function (_x5) {
                  return _ref13.apply(this, arguments);
                };
              }(), unmountSandbox, /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee14() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee14$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                    case 0:
                      return _context14.abrupt("return", execHooksChain((0,_utils__WEBPACK_IMPORTED_MODULE_10__.toArray)(afterUnmount), app, global));
                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }, _callee14);
              })), /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee15() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                    case 0:
                      render({
                        element: null,
                        loading: false,
                        container: remountContainer
                      }, 'unmounted');
                      offGlobalStateChange(appInstanceId);
                      // for gc
                      appWrapperElement = null;
                      syncAppWrapperElement2Sandbox(appWrapperElement);
                    case 4:
                    case "end":
                      return _context15.stop();
                  }
                }, _callee15);
              })), /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee16() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee16$(_context16) {
                  while (1) switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return validateSingularMode(singular, app);
                    case 2:
                      _context16.t0 = _context16.sent;
                      if (!_context16.t0) {
                        _context16.next = 5;
                        break;
                      }
                      _context16.t0 = prevAppUnmountedDeferred;
                    case 5:
                      if (!_context16.t0) {
                        _context16.next = 7;
                        break;
                      }
                      prevAppUnmountedDeferred.resolve();
                    case 7:
                    case "end":
                      return _context16.stop();
                  }
                }, _callee16);
              }))]
            };
            if (typeof update === 'function') {
              parcelConfig.update = update;
            }
            return parcelConfig;
          };
          return _context17.abrupt("return", parcelConfigGetter);
        case 48:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return _loadApp.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/prefetch.js":
/*!**************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/prefetch.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   doPrefetchStrategy: () => (/* binding */ doPrefetchStrategy),
/* harmony export */   prefetchImmediately: () => (/* binding */ prefetchImmediately)
/* harmony export */ });
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.21@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var import_html_entry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! import-html-entry */ "./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/index.js");
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! single-spa */ "./node_modules/_single-spa@5.9.5@single-spa/lib/esm/single-spa.min.js");



/**
 * @author Kuitos
 * @since 2019-02-26
 */


function idleCall(cb, start) {
  cb({
    didTimeout: false,
    timeRemaining: function timeRemaining() {
      return Math.max(0, 50 - (Date.now() - start));
    }
  });
}
// RIC and shim for browsers setTimeout() without it idle
var requestIdleCallback;
if (typeof window.requestIdleCallback !== 'undefined') {
  requestIdleCallback = window.requestIdleCallback;
} else if (typeof window.MessageChannel !== 'undefined') {
  // The first recommendation is to use MessageChannel because
  // it does not have the 4ms delay of setTimeout
  var channel = new MessageChannel();
  var port = channel.port2;
  var tasks = [];
  channel.port1.onmessage = function (_ref) {
    var data = _ref.data;
    var task = tasks.shift();
    if (!task) {
      return;
    }
    idleCall(task, data.start);
  };
  requestIdleCallback = function requestIdleCallback(cb) {
    tasks.push(cb);
    port.postMessage({
      start: Date.now()
    });
  };
} else {
  requestIdleCallback = function requestIdleCallback(cb) {
    return setTimeout(idleCall, 0, cb, Date.now());
  };
}
var isSlowNetwork = navigator.connection ? navigator.connection.saveData || navigator.connection.type !== 'wifi' && navigator.connection.type !== 'ethernet' && /([23])g/.test(navigator.connection.effectiveType) : false;
/**
 * prefetch assets, do nothing while in mobile network
 * @param entry
 * @param opts
 */
function prefetch(entry, opts) {
  if (!navigator.onLine || isSlowNetwork) {
    // Don't prefetch if in a slow network or offline
    return;
  }
  requestIdleCallback( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    var _yield$importEntry, getExternalScripts, getExternalStyleSheets;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,import_html_entry__WEBPACK_IMPORTED_MODULE_4__.importEntry)(entry, opts);
        case 2:
          _yield$importEntry = _context.sent;
          getExternalScripts = _yield$importEntry.getExternalScripts;
          getExternalStyleSheets = _yield$importEntry.getExternalStyleSheets;
          requestIdleCallback(getExternalStyleSheets);
          requestIdleCallback(getExternalScripts);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
}
function prefetchAfterFirstMounted(apps, opts) {
  window.addEventListener('single-spa:first-mount', function listener() {
    var notLoadedApps = apps.filter(function (app) {
      return (0,single_spa__WEBPACK_IMPORTED_MODULE_3__.getAppStatus)(app.name) === single_spa__WEBPACK_IMPORTED_MODULE_3__.NOT_LOADED;
    });
    if (true) {
      var mountedApps = (0,single_spa__WEBPACK_IMPORTED_MODULE_3__.getMountedApps)();
      console.log("[qiankun] prefetch starting after ".concat(mountedApps, " mounted..."), notLoadedApps);
    }
    notLoadedApps.forEach(function (_ref3) {
      var entry = _ref3.entry;
      return prefetch(entry, opts);
    });
    window.removeEventListener('single-spa:first-mount', listener);
  });
}
function prefetchImmediately(apps, opts) {
  if (true) {
    console.log('[qiankun] prefetch starting for apps...', apps);
  }
  apps.forEach(function (_ref4) {
    var entry = _ref4.entry;
    return prefetch(entry, opts);
  });
}
function doPrefetchStrategy(apps, prefetchStrategy, importEntryOpts) {
  var appsName2Apps = function appsName2Apps(names) {
    return apps.filter(function (app) {
      return names.includes(app.name);
    });
  };
  if (Array.isArray(prefetchStrategy)) {
    prefetchAfterFirstMounted(appsName2Apps(prefetchStrategy), importEntryOpts);
  } else if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(prefetchStrategy)) {
    (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var _yield$prefetchStrate, _yield$prefetchStrate2, criticalAppNames, _yield$prefetchStrate3, minorAppsName;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return prefetchStrategy(apps);
          case 2:
            _yield$prefetchStrate = _context2.sent;
            _yield$prefetchStrate2 = _yield$prefetchStrate.criticalAppNames;
            criticalAppNames = _yield$prefetchStrate2 === void 0 ? [] : _yield$prefetchStrate2;
            _yield$prefetchStrate3 = _yield$prefetchStrate.minorAppsName;
            minorAppsName = _yield$prefetchStrate3 === void 0 ? [] : _yield$prefetchStrate3;
            prefetchImmediately(appsName2Apps(criticalAppNames), importEntryOpts);
            prefetchAfterFirstMounted(appsName2Apps(minorAppsName), importEntryOpts);
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  } else {
    switch (prefetchStrategy) {
      case true:
        prefetchAfterFirstMounted(apps, importEntryOpts);
        break;
      case 'all':
        prefetchImmediately(apps, importEntryOpts);
        break;
      default:
        break;
    }
  }
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/common.js":
/*!********************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/common.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCurrentRunningApp: () => (/* binding */ clearCurrentRunningApp),
/* harmony export */   getCurrentRunningApp: () => (/* binding */ getCurrentRunningApp),
/* harmony export */   rebindTarget2Fn: () => (/* binding */ rebindTarget2Fn),
/* harmony export */   setCurrentRunningApp: () => (/* binding */ setCurrentRunningApp)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/_qiankun@2.10.16@qiankun/es/utils.js");
/**
 * @author Kuitos
 * @since 2020-04-13
 */

var currentRunningApp = null;
/**
 * get the app that running tasks at current tick
 */
function getCurrentRunningApp() {
  return currentRunningApp;
}
function setCurrentRunningApp(appInstance) {
  // Set currentRunningApp and it's proxySandbox to global window, as its only use case is for document.createElement from now on, which hijacked by a global way
  currentRunningApp = appInstance;
}
function clearCurrentRunningApp() {
  currentRunningApp = null;
}
var functionBoundedValueMap = new WeakMap();
function rebindTarget2Fn(target, fn) {
  /*
    仅绑定 isCallable && !isBoundedFunction && !isConstructable 的函数对象，如 window.console、window.atob 这类，不然微应用中调用时会抛出 Illegal invocation 异常
    目前没有完美的检测方式，这里通过 prototype 中是否还有可枚举的拓展方法的方式来判断
    @warning 这里不要随意替换成别的判断方式，因为可能触发一些 edge case（比如在 lodash.isFunction 在 iframe 上下文中可能由于调用了 top window 对象触发的安全异常）
   */
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isCallable)(fn) && !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoundedFunction)(fn) && !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isConstructable)(fn)) {
    var cachedBoundFunction = functionBoundedValueMap.get(fn);
    if (cachedBoundFunction) {
      return cachedBoundFunction;
    }
    var boundValue = Function.prototype.bind.call(fn, target);
    // some callable function has custom fields, we need to copy the own props to boundValue. such as moment function.
    Object.getOwnPropertyNames(fn).forEach(function (key) {
      // boundValue might be a proxy, we need to check the key whether exist in it
      if (!boundValue.hasOwnProperty(key)) {
        Object.defineProperty(boundValue, key, Object.getOwnPropertyDescriptor(fn, key));
      }
    });
    // copy prototype if bound function not have but target one have
    // as prototype is non-enumerable mostly, we need to copy it from target function manually
    if (fn.hasOwnProperty('prototype') && !boundValue.hasOwnProperty('prototype')) {
      // we should not use assignment operator to set boundValue prototype like `boundValue.prototype = fn.prototype`
      // as the assignment will also look up prototype chain while it hasn't own prototype property,
      // when the lookup succeed, the assignment will throw an TypeError like `Cannot assign to read only property 'prototype' of function` if its descriptor configured with writable false or just have a getter accessor
      // see https://github.com/umijs/qiankun/issues/1121
      Object.defineProperty(boundValue, 'prototype', {
        value: fn.prototype,
        enumerable: false,
        writable: true
      });
    }
    // Some util, like `function isNative() {  return typeof Ctor === 'function' && /native code/.test(Ctor.toString()) }` relies on the original `toString()` result
    // but bound functions will always return "function() {[native code]}" for `toString`, which is misleading
    if (typeof fn.toString === 'function') {
      var valueHasInstanceToString = fn.hasOwnProperty('toString') && !boundValue.hasOwnProperty('toString');
      var boundValueHasPrototypeToString = boundValue.toString === Function.prototype.toString;
      if (valueHasInstanceToString || boundValueHasPrototypeToString) {
        var originToStringDescriptor = Object.getOwnPropertyDescriptor(valueHasInstanceToString ? fn : Function.prototype, 'toString');
        Object.defineProperty(boundValue, 'toString', Object.assign({}, originToStringDescriptor, (originToStringDescriptor === null || originToStringDescriptor === void 0 ? void 0 : originToStringDescriptor.get) ? null : {
          value: function value() {
            return fn.toString();
          }
        }));
      }
    }
    functionBoundedValueMap.set(fn, boundValue);
    return boundValue;
  }
  return fn;
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/globals.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/globals.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   globalsInBrowser: () => (/* binding */ globalsInBrowser),
/* harmony export */   globalsInES2015: () => (/* binding */ globalsInES2015)
/* harmony export */ });
// generated from https://github.com/sindresorhus/globals/blob/main/globals.json es2015 part
// only init its values while Proxy is supported
var globalsInES2015 = window.Proxy ? ["Array", "ArrayBuffer", "Boolean", "constructor", "DataView", "Date", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "Error", "escape", "eval", "EvalError", "Float32Array", "Float64Array", "Function", "hasOwnProperty", "Infinity", "Int16Array", "Int32Array", "Int8Array", "isFinite", "isNaN", "isPrototypeOf", "JSON", "Map", "Math", "NaN", "Number", "Object", "parseFloat", "parseInt", "Promise", "propertyIsEnumerable", "Proxy", "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "String", "Symbol", "SyntaxError", "toLocaleString", "toString", "TypeError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "undefined", "unescape", "URIError", "valueOf", "WeakMap", "WeakSet"].filter(function (p) {
  return (/* just keep the available properties in current window context */p in window
  );
}) : [];
var globalsInBrowser = ["AbortController", "AbortSignal", "addEventListener", "alert", "AnalyserNode", "Animation", "AnimationEffectReadOnly", "AnimationEffectTiming", "AnimationEffectTimingReadOnly", "AnimationEvent", "AnimationPlaybackEvent", "AnimationTimeline", "applicationCache", "ApplicationCache", "ApplicationCacheErrorEvent", "atob", "Attr", "Audio", "AudioBuffer", "AudioBufferSourceNode", "AudioContext", "AudioDestinationNode", "AudioListener", "AudioNode", "AudioParam", "AudioProcessingEvent", "AudioScheduledSourceNode", "AudioWorkletGlobalScope", "AudioWorkletNode", "AudioWorkletProcessor", "BarProp", "BaseAudioContext", "BatteryManager", "BeforeUnloadEvent", "BiquadFilterNode", "Blob", "BlobEvent", "blur", "BroadcastChannel", "btoa", "BudgetService", "ByteLengthQueuingStrategy", "Cache", "caches", "CacheStorage", "cancelAnimationFrame", "cancelIdleCallback", "CanvasCaptureMediaStreamTrack", "CanvasGradient", "CanvasPattern", "CanvasRenderingContext2D", "ChannelMergerNode", "ChannelSplitterNode", "CharacterData", "clearInterval", "clearTimeout", "clientInformation", "ClipboardEvent", "ClipboardItem", "close", "closed", "CloseEvent", "Comment", "CompositionEvent", "CompressionStream", "confirm", "console", "ConstantSourceNode", "ConvolverNode", "CountQueuingStrategy", "createImageBitmap", "Credential", "CredentialsContainer", "crypto", "Crypto", "CryptoKey", "CSS", "CSSConditionRule", "CSSFontFaceRule", "CSSGroupingRule", "CSSImportRule", "CSSKeyframeRule", "CSSKeyframesRule", "CSSMatrixComponent", "CSSMediaRule", "CSSNamespaceRule", "CSSPageRule", "CSSPerspective", "CSSRotate", "CSSRule", "CSSRuleList", "CSSScale", "CSSSkew", "CSSSkewX", "CSSSkewY", "CSSStyleDeclaration", "CSSStyleRule", "CSSStyleSheet", "CSSSupportsRule", "CSSTransformValue", "CSSTranslate", "CustomElementRegistry", "customElements", "CustomEvent", "DataTransfer", "DataTransferItem", "DataTransferItemList", "DecompressionStream", "defaultstatus", "defaultStatus", "DelayNode", "DeviceMotionEvent", "DeviceOrientationEvent", "devicePixelRatio", "dispatchEvent", "document", "Document", "DocumentFragment", "DocumentType", "DOMError", "DOMException", "DOMImplementation", "DOMMatrix", "DOMMatrixReadOnly", "DOMParser", "DOMPoint", "DOMPointReadOnly", "DOMQuad", "DOMRect", "DOMRectList", "DOMRectReadOnly", "DOMStringList", "DOMStringMap", "DOMTokenList", "DragEvent", "DynamicsCompressorNode", "Element", "ErrorEvent", "event", "Event", "EventSource", "EventTarget", "external", "fetch", "File", "FileList", "FileReader", "find", "focus", "FocusEvent", "FontFace", "FontFaceSetLoadEvent", "FormData", "FormDataEvent", "frameElement", "frames", "GainNode", "Gamepad", "GamepadButton", "GamepadEvent", "getComputedStyle", "getSelection", "HashChangeEvent", "Headers", "history", "History", "HTMLAllCollection", "HTMLAnchorElement", "HTMLAreaElement", "HTMLAudioElement", "HTMLBaseElement", "HTMLBodyElement", "HTMLBRElement", "HTMLButtonElement", "HTMLCanvasElement", "HTMLCollection", "HTMLContentElement", "HTMLDataElement", "HTMLDataListElement", "HTMLDetailsElement", "HTMLDialogElement", "HTMLDirectoryElement", "HTMLDivElement", "HTMLDListElement", "HTMLDocument", "HTMLElement", "HTMLEmbedElement", "HTMLFieldSetElement", "HTMLFontElement", "HTMLFormControlsCollection", "HTMLFormElement", "HTMLFrameElement", "HTMLFrameSetElement", "HTMLHeadElement", "HTMLHeadingElement", "HTMLHRElement", "HTMLHtmlElement", "HTMLIFrameElement", "HTMLImageElement", "HTMLInputElement", "HTMLLabelElement", "HTMLLegendElement", "HTMLLIElement", "HTMLLinkElement", "HTMLMapElement", "HTMLMarqueeElement", "HTMLMediaElement", "HTMLMenuElement", "HTMLMetaElement", "HTMLMeterElement", "HTMLModElement", "HTMLObjectElement", "HTMLOListElement", "HTMLOptGroupElement", "HTMLOptionElement", "HTMLOptionsCollection", "HTMLOutputElement", "HTMLParagraphElement", "HTMLParamElement", "HTMLPictureElement", "HTMLPreElement", "HTMLProgressElement", "HTMLQuoteElement", "HTMLScriptElement", "HTMLSelectElement", "HTMLShadowElement", "HTMLSlotElement", "HTMLSourceElement", "HTMLSpanElement", "HTMLStyleElement", "HTMLTableCaptionElement", "HTMLTableCellElement", "HTMLTableColElement", "HTMLTableElement", "HTMLTableRowElement", "HTMLTableSectionElement", "HTMLTemplateElement", "HTMLTextAreaElement", "HTMLTimeElement", "HTMLTitleElement", "HTMLTrackElement", "HTMLUListElement", "HTMLUnknownElement", "HTMLVideoElement", "IDBCursor", "IDBCursorWithValue", "IDBDatabase", "IDBFactory", "IDBIndex", "IDBKeyRange", "IDBObjectStore", "IDBOpenDBRequest", "IDBRequest", "IDBTransaction", "IDBVersionChangeEvent", "IdleDeadline", "IIRFilterNode", "Image", "ImageBitmap", "ImageBitmapRenderingContext", "ImageCapture", "ImageData", "indexedDB", "innerHeight", "innerWidth", "InputEvent", "IntersectionObserver", "IntersectionObserverEntry", "Intl", "isSecureContext", "KeyboardEvent", "KeyframeEffect", "KeyframeEffectReadOnly", "length", "localStorage", "location", "Location", "locationbar", "matchMedia", "MediaDeviceInfo", "MediaDevices", "MediaElementAudioSourceNode", "MediaEncryptedEvent", "MediaError", "MediaKeyMessageEvent", "MediaKeySession", "MediaKeyStatusMap", "MediaKeySystemAccess", "MediaList", "MediaMetadata", "MediaQueryList", "MediaQueryListEvent", "MediaRecorder", "MediaSettingsRange", "MediaSource", "MediaStream", "MediaStreamAudioDestinationNode", "MediaStreamAudioSourceNode", "MediaStreamConstraints", "MediaStreamEvent", "MediaStreamTrack", "MediaStreamTrackEvent", "menubar", "MessageChannel", "MessageEvent", "MessagePort", "MIDIAccess", "MIDIConnectionEvent", "MIDIInput", "MIDIInputMap", "MIDIMessageEvent", "MIDIOutput", "MIDIOutputMap", "MIDIPort", "MimeType", "MimeTypeArray", "MouseEvent", "moveBy", "moveTo", "MutationEvent", "MutationObserver", "MutationRecord", "name", "NamedNodeMap", "NavigationPreloadManager", "navigator", "Navigator", "NavigatorUAData", "NetworkInformation", "Node", "NodeFilter", "NodeIterator", "NodeList", "Notification", "OfflineAudioCompletionEvent", "OfflineAudioContext", "offscreenBuffering", "OffscreenCanvas", "OffscreenCanvasRenderingContext2D", "onabort", "onafterprint", "onanimationend", "onanimationiteration", "onanimationstart", "onappinstalled", "onauxclick", "onbeforeinstallprompt", "onbeforeprint", "onbeforeunload", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondevicemotion", "ondeviceorientation", "ondeviceorientationabsolute", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "ongotpointercapture", "onhashchange", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onlanguagechange", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmessage", "onmessageerror", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onoffline", "ononline", "onpagehide", "onpageshow", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onpopstate", "onprogress", "onratechange", "onrejectionhandled", "onreset", "onresize", "onscroll", "onsearch", "onseeked", "onseeking", "onselect", "onstalled", "onstorage", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontransitionend", "onunhandledrejection", "onunload", "onvolumechange", "onwaiting", "onwheel", "open", "openDatabase", "opener", "Option", "origin", "OscillatorNode", "outerHeight", "outerWidth", "OverconstrainedError", "PageTransitionEvent", "pageXOffset", "pageYOffset", "PannerNode", "parent", "Path2D", "PaymentAddress", "PaymentRequest", "PaymentRequestUpdateEvent", "PaymentResponse", "performance", "Performance", "PerformanceEntry", "PerformanceLongTaskTiming", "PerformanceMark", "PerformanceMeasure", "PerformanceNavigation", "PerformanceNavigationTiming", "PerformanceObserver", "PerformanceObserverEntryList", "PerformancePaintTiming", "PerformanceResourceTiming", "PerformanceTiming", "PeriodicWave", "Permissions", "PermissionStatus", "personalbar", "PhotoCapabilities", "Plugin", "PluginArray", "PointerEvent", "PopStateEvent", "postMessage", "Presentation", "PresentationAvailability", "PresentationConnection", "PresentationConnectionAvailableEvent", "PresentationConnectionCloseEvent", "PresentationConnectionList", "PresentationReceiver", "PresentationRequest", "print", "ProcessingInstruction", "ProgressEvent", "PromiseRejectionEvent", "prompt", "PushManager", "PushSubscription", "PushSubscriptionOptions", "queueMicrotask", "RadioNodeList", "Range", "ReadableByteStreamController", "ReadableStream", "ReadableStreamBYOBReader", "ReadableStreamBYOBRequest", "ReadableStreamDefaultController", "ReadableStreamDefaultReader", "registerProcessor", "RemotePlayback", "removeEventListener", "reportError", "Request", "requestAnimationFrame", "requestIdleCallback", "resizeBy", "ResizeObserver", "ResizeObserverEntry", "resizeTo", "Response", "RTCCertificate", "RTCDataChannel", "RTCDataChannelEvent", "RTCDtlsTransport", "RTCIceCandidate", "RTCIceGatherer", "RTCIceTransport", "RTCPeerConnection", "RTCPeerConnectionIceEvent", "RTCRtpContributingSource", "RTCRtpReceiver", "RTCRtpSender", "RTCSctpTransport", "RTCSessionDescription", "RTCStatsReport", "RTCTrackEvent", "screen", "Screen", "screenLeft", "ScreenOrientation", "screenTop", "screenX", "screenY", "ScriptProcessorNode", "scroll", "scrollbars", "scrollBy", "scrollTo", "scrollX", "scrollY", "SecurityPolicyViolationEvent", "Selection", "self", "ServiceWorker", "ServiceWorkerContainer", "ServiceWorkerRegistration", "sessionStorage", "setInterval", "setTimeout", "ShadowRoot", "SharedWorker", "SourceBuffer", "SourceBufferList", "speechSynthesis", "SpeechSynthesisEvent", "SpeechSynthesisUtterance", "StaticRange", "status", "statusbar", "StereoPannerNode", "stop", "Storage", "StorageEvent", "StorageManager", "structuredClone", "styleMedia", "StyleSheet", "StyleSheetList", "SubmitEvent", "SubtleCrypto", "SVGAElement", "SVGAngle", "SVGAnimatedAngle", "SVGAnimatedBoolean", "SVGAnimatedEnumeration", "SVGAnimatedInteger", "SVGAnimatedLength", "SVGAnimatedLengthList", "SVGAnimatedNumber", "SVGAnimatedNumberList", "SVGAnimatedPreserveAspectRatio", "SVGAnimatedRect", "SVGAnimatedString", "SVGAnimatedTransformList", "SVGAnimateElement", "SVGAnimateMotionElement", "SVGAnimateTransformElement", "SVGAnimationElement", "SVGCircleElement", "SVGClipPathElement", "SVGComponentTransferFunctionElement", "SVGDefsElement", "SVGDescElement", "SVGDiscardElement", "SVGElement", "SVGEllipseElement", "SVGFEBlendElement", "SVGFEColorMatrixElement", "SVGFEComponentTransferElement", "SVGFECompositeElement", "SVGFEConvolveMatrixElement", "SVGFEDiffuseLightingElement", "SVGFEDisplacementMapElement", "SVGFEDistantLightElement", "SVGFEDropShadowElement", "SVGFEFloodElement", "SVGFEFuncAElement", "SVGFEFuncBElement", "SVGFEFuncGElement", "SVGFEFuncRElement", "SVGFEGaussianBlurElement", "SVGFEImageElement", "SVGFEMergeElement", "SVGFEMergeNodeElement", "SVGFEMorphologyElement", "SVGFEOffsetElement", "SVGFEPointLightElement", "SVGFESpecularLightingElement", "SVGFESpotLightElement", "SVGFETileElement", "SVGFETurbulenceElement", "SVGFilterElement", "SVGForeignObjectElement", "SVGGElement", "SVGGeometryElement", "SVGGradientElement", "SVGGraphicsElement", "SVGImageElement", "SVGLength", "SVGLengthList", "SVGLinearGradientElement", "SVGLineElement", "SVGMarkerElement", "SVGMaskElement", "SVGMatrix", "SVGMetadataElement", "SVGMPathElement", "SVGNumber", "SVGNumberList", "SVGPathElement", "SVGPatternElement", "SVGPoint", "SVGPointList", "SVGPolygonElement", "SVGPolylineElement", "SVGPreserveAspectRatio", "SVGRadialGradientElement", "SVGRect", "SVGRectElement", "SVGScriptElement", "SVGSetElement", "SVGStopElement", "SVGStringList", "SVGStyleElement", "SVGSVGElement", "SVGSwitchElement", "SVGSymbolElement", "SVGTextContentElement", "SVGTextElement", "SVGTextPathElement", "SVGTextPositioningElement", "SVGTitleElement", "SVGTransform", "SVGTransformList", "SVGTSpanElement", "SVGUnitTypes", "SVGUseElement", "SVGViewElement", "TaskAttributionTiming", "Text", "TextDecoder", "TextDecoderStream", "TextEncoder", "TextEncoderStream", "TextEvent", "TextMetrics", "TextTrack", "TextTrackCue", "TextTrackCueList", "TextTrackList", "TimeRanges", "ToggleEvent", "toolbar", "top", "Touch", "TouchEvent", "TouchList", "TrackEvent", "TransformStream", "TransformStreamDefaultController", "TransitionEvent", "TreeWalker", "UIEvent", "URL", "URLSearchParams", "ValidityState", "visualViewport", "VisualViewport", "VTTCue", "WaveShaperNode", "WebAssembly", "WebGL2RenderingContext", "WebGLActiveInfo", "WebGLBuffer", "WebGLContextEvent", "WebGLFramebuffer", "WebGLProgram", "WebGLQuery", "WebGLRenderbuffer", "WebGLRenderingContext", "WebGLSampler", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLSync", "WebGLTexture", "WebGLTransformFeedback", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebSocket", "WheelEvent", "window", "Window", "Worker", "WritableStream", "WritableStreamDefaultController", "WritableStreamDefaultWriter", "XMLDocument", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload", "XMLSerializer", "XPathEvaluator", "XPathExpression", "XPathResult", "XSLTProcessor"];

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSandboxContainer: () => (/* binding */ createSandboxContainer),
/* harmony export */   css: () => (/* reexport module object */ _patchers__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   getCurrentRunningApp: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_3__.getCurrentRunningApp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _legacy_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legacy/sandbox */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/legacy/sandbox.js");
/* harmony import */ var _patchers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patchers */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/index.js");
/* harmony import */ var _proxySandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proxySandbox */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/proxySandbox.js");
/* harmony import */ var _snapshotSandbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./snapshotSandbox */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/snapshotSandbox.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/common.js");
/* harmony import */ var _patchers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patchers */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/css.js");









/**
 * 生成应用运行时沙箱
 *
 * 沙箱分两个类型：
 * 1. app 环境沙箱
 *  app 环境沙箱是指应用初始化过之后，应用会在什么样的上下文环境运行。每个应用的环境沙箱只会初始化一次，因为子应用只会触发一次 bootstrap 。
 *  子应用在切换时，实际上切换的是 app 环境沙箱。
 * 2. render 沙箱
 *  子应用在 app mount 开始前生成好的的沙箱。每次子应用切换过后，render 沙箱都会重现初始化。
 *
 * 这么设计的目的是为了保证每个子应用切换回来之后，还能运行在应用 bootstrap 之后的环境下。
 *
 * @param appName
 * @param elementGetter
 * @param scopedCSS
 * @param useLooseSandbox
 * @param excludeAssetFilter
 * @param globalContext
 * @param speedySandBox
 */
function createSandboxContainer(appName, elementGetter, scopedCSS, useLooseSandbox, excludeAssetFilter, globalContext, speedySandBox) {
  var sandbox;
  if (window.Proxy) {
    sandbox = useLooseSandbox ? new _legacy_sandbox__WEBPACK_IMPORTED_MODULE_5__["default"](appName, globalContext) : new _proxySandbox__WEBPACK_IMPORTED_MODULE_6__["default"](appName, globalContext, {
      speedy: !!speedySandBox
    });
  } else {
    sandbox = new _snapshotSandbox__WEBPACK_IMPORTED_MODULE_7__["default"](appName);
  }
  // some side effect could be invoked while bootstrapping, such as dynamic stylesheet injection with style-loader, especially during the development phase
  var bootstrappingFreers = (0,_patchers__WEBPACK_IMPORTED_MODULE_8__.patchAtBootstrapping)(appName, elementGetter, sandbox, scopedCSS, excludeAssetFilter, speedySandBox);
  // mounting freers are one-off and should be re-init at every mounting time
  var mountingFreers = [];
  var sideEffectsRebuilders = [];
  return {
    instance: sandbox,
    /**
     * 沙箱被 mount
     * 可能是从 bootstrap 状态进入的 mount
     * 也可能是从 unmount 之后再次唤醒进入 mount
     */
    mount: function mount() {
      return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var sideEffectsRebuildersAtBootstrapping, sideEffectsRebuildersAtMounting;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              /* ------------------------------------------ 因为有上下文依赖（window），以下代码执行顺序不能变 ------------------------------------------ */
              /* ------------------------------------------ 1. 启动/恢复 沙箱------------------------------------------ */
              sandbox.active();
              sideEffectsRebuildersAtBootstrapping = sideEffectsRebuilders.slice(0, bootstrappingFreers.length);
              sideEffectsRebuildersAtMounting = sideEffectsRebuilders.slice(bootstrappingFreers.length); // must rebuild the side effects which added at bootstrapping firstly to recovery to nature state
              if (sideEffectsRebuildersAtBootstrapping.length) {
                sideEffectsRebuildersAtBootstrapping.forEach(function (rebuild) {
                  return rebuild();
                });
              }
              /* ------------------------------------------ 2. 开启全局变量补丁 ------------------------------------------*/
              // render 沙箱启动时开始劫持各类全局监听，尽量不要在应用初始化阶段有 事件监听/定时器 等副作用
              mountingFreers = (0,_patchers__WEBPACK_IMPORTED_MODULE_8__.patchAtMounting)(appName, elementGetter, sandbox, scopedCSS, excludeAssetFilter, speedySandBox);
              /* ------------------------------------------ 3. 重置一些初始化时的副作用 ------------------------------------------*/
              // 存在 rebuilder 则表明有些副作用需要重建
              if (sideEffectsRebuildersAtMounting.length) {
                sideEffectsRebuildersAtMounting.forEach(function (rebuild) {
                  return rebuild();
                });
              }
              // clean up rebuilders
              sideEffectsRebuilders = [];
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    /**
     * 恢复 global 状态，使其能回到应用加载之前的状态
     */
    unmount: function unmount() {
      return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // record the rebuilders of window side effects (event listeners or timers)
              // note that the frees of mounting phase are one-off as it will be re-init at next mounting
              sideEffectsRebuilders = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bootstrappingFreers), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(mountingFreers)).map(function (free) {
                return free();
              });
              sandbox.inactive();
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  };
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/legacy/sandbox.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/legacy/sandbox.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LegacySandbox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces */ "./node_modules/_qiankun@2.10.16@qiankun/es/interfaces.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/common.js");






function isPropConfigurable(target, prop) {
  var descriptor = Object.getOwnPropertyDescriptor(target, prop);
  return descriptor ? descriptor.configurable : true;
}
/**
 * 基于 Proxy 实现的沙箱
 * TODO: 为了兼容性 singular 模式下依旧使用该沙箱，等新沙箱稳定之后再切换
 */
var LegacySandbox = /*#__PURE__*/function () {
  function LegacySandbox(name) {
    var _this = this;
    var globalContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LegacySandbox);
    /** 沙箱期间新增的全局变量 */
    this.addedPropsMapInSandbox = new Map();
    /** 沙箱期间更新的全局变量 */
    this.modifiedPropsOriginalValueMapInSandbox = new Map();
    /** 持续记录更新的(新增和修改的)全局变量的 map，用于在任意时刻做 snapshot */
    this.currentUpdatedPropsValueMap = new Map();
    this.name = void 0;
    this.proxy = void 0;
    this.globalContext = void 0;
    this.type = void 0;
    this.sandboxRunning = true;
    this.latestSetProp = null;
    this.name = name;
    this.globalContext = globalContext;
    this.type = _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.LegacyProxy;
    var addedPropsMapInSandbox = this.addedPropsMapInSandbox,
      modifiedPropsOriginalValueMapInSandbox = this.modifiedPropsOriginalValueMapInSandbox,
      currentUpdatedPropsValueMap = this.currentUpdatedPropsValueMap;
    var rawWindow = globalContext;
    var fakeWindow = Object.create(null);
    var setTrap = function setTrap(p, value, originalValue) {
      var sync2Window = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      if (_this.sandboxRunning) {
        if (!rawWindow.hasOwnProperty(p)) {
          addedPropsMapInSandbox.set(p, value);
        } else if (!modifiedPropsOriginalValueMapInSandbox.has(p)) {
          // 如果当前 window 对象存在该属性，且 record map 中未记录过，则记录该属性初始值
          modifiedPropsOriginalValueMapInSandbox.set(p, originalValue);
        }
        currentUpdatedPropsValueMap.set(p, value);
        if (sync2Window) {
          // 必须重新设置 window 对象保证下次 get 时能拿到已更新的数据
          rawWindow[p] = value;
        }
        _this.latestSetProp = p;
        return true;
      }
      if (true) {
        console.warn("[qiankun] Set window.".concat(p.toString(), " while sandbox destroyed or inactive in ").concat(name, "!"));
      }
      // 在 strict-mode 下，Proxy 的 handler.set 返回 false 会抛出 TypeError，在沙箱卸载的情况下应该忽略错误
      return true;
    };
    var proxy = new Proxy(fakeWindow, {
      set: function set(_, p, value) {
        var originalValue = rawWindow[p];
        return setTrap(p, value, originalValue, true);
      },
      get: function get(_, p) {
        // avoid who using window.window or window.self to escape the sandbox environment to touch the really window
        // or use window.top to check if an iframe context
        // see https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js#L13
        if (p === 'top' || p === 'parent' || p === 'window' || p === 'self') {
          return proxy;
        }
        var value = rawWindow[p];
        return (0,_common__WEBPACK_IMPORTED_MODULE_5__.rebindTarget2Fn)(rawWindow, value);
      },
      // trap in operator
      // see https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/constants.js#L12
      has: function has(_, p) {
        return p in rawWindow;
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(_, p) {
        var descriptor = Object.getOwnPropertyDescriptor(rawWindow, p);
        // A property cannot be reported as non-configurable, if it does not exists as an own property of the target object
        if (descriptor && !descriptor.configurable) {
          descriptor.configurable = true;
        }
        return descriptor;
      },
      defineProperty: function defineProperty(_, p, attributes) {
        var originalValue = rawWindow[p];
        var done = Reflect.defineProperty(rawWindow, p, attributes);
        var value = rawWindow[p];
        setTrap(p, value, originalValue, false);
        return done;
      }
    });
    this.proxy = proxy;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LegacySandbox, [{
    key: "setWindowProp",
    value: function setWindowProp(prop, value, toDelete) {
      if (value === undefined && toDelete) {
        // eslint-disable-next-line no-param-reassign
        delete this.globalContext[prop];
      } else if (isPropConfigurable(this.globalContext, prop) && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(prop) !== 'symbol') {
        Object.defineProperty(this.globalContext, prop, {
          writable: true,
          configurable: true
        });
        // eslint-disable-next-line no-param-reassign
        this.globalContext[prop] = value;
      }
    }
  }, {
    key: "active",
    value: function active() {
      var _this2 = this;
      if (!this.sandboxRunning) {
        this.currentUpdatedPropsValueMap.forEach(function (v, p) {
          return _this2.setWindowProp(p, v);
        });
      }
      this.sandboxRunning = true;
    }
  }, {
    key: "inactive",
    value: function inactive() {
      var _this3 = this;
      if (true) {
        console.info("[qiankun:sandbox] ".concat(this.name, " modified global properties restore..."), [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.addedPropsMapInSandbox.keys()), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.modifiedPropsOriginalValueMapInSandbox.keys())));
      }
      // renderSandboxSnapshot = snapshot(currentUpdatedPropsValueMapForSnapshot);
      // restore global props to initial snapshot
      this.modifiedPropsOriginalValueMapInSandbox.forEach(function (v, p) {
        return _this3.setWindowProp(p, v);
      });
      this.addedPropsMapInSandbox.forEach(function (_, p) {
        return _this3.setWindowProp(p, undefined, true);
      });
      this.sandboxRunning = false;
    }
  }, {
    key: "patchDocument",
    value: function patchDocument() {}
  }]);
  return LegacySandbox;
}();


/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/css.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/css.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QiankunCSSRewriteAttr: () => (/* binding */ QiankunCSSRewriteAttr),
/* harmony export */   ScopedCSS: () => (/* binding */ ScopedCSS),
/* harmony export */   process: () => (/* binding */ process)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/createClass.js");


/**
 * @author Saviio
 * @since 2020-4-19
 */
// https://developer.mozilla.org/en-US/docs/Web/API/CSSRule
var RuleType;
(function (RuleType) {
  // type: rule will be rewrote
  RuleType[RuleType["STYLE"] = 1] = "STYLE";
  RuleType[RuleType["MEDIA"] = 4] = "MEDIA";
  RuleType[RuleType["SUPPORTS"] = 12] = "SUPPORTS";
  // type: value will be kept
  RuleType[RuleType["IMPORT"] = 3] = "IMPORT";
  RuleType[RuleType["FONT_FACE"] = 5] = "FONT_FACE";
  RuleType[RuleType["PAGE"] = 6] = "PAGE";
  RuleType[RuleType["KEYFRAMES"] = 7] = "KEYFRAMES";
  RuleType[RuleType["KEYFRAME"] = 8] = "KEYFRAME";
})(RuleType || (RuleType = {}));
var arrayify = function arrayify(list) {
  return [].slice.call(list, 0);
};
var rawDocumentBodyAppend = HTMLBodyElement.prototype.appendChild;
var ScopedCSS = /*#__PURE__*/function () {
  function ScopedCSS() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScopedCSS);
    this.sheet = void 0;
    this.swapNode = void 0;
    var styleNode = document.createElement('style');
    rawDocumentBodyAppend.call(document.body, styleNode);
    this.swapNode = styleNode;
    this.sheet = styleNode.sheet;
    this.sheet.disabled = true;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScopedCSS, [{
    key: "process",
    value: function process(styleNode) {
      var _this = this;
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      if (ScopedCSS.ModifiedTag in styleNode) {
        return;
      }
      if (styleNode.textContent !== '') {
        var _sheet$cssRules;
        var textNode = document.createTextNode(styleNode.textContent || '');
        this.swapNode.appendChild(textNode);
        var sheet = this.swapNode.sheet; // type is missing
        var rules = arrayify((_sheet$cssRules = sheet === null || sheet === void 0 ? void 0 : sheet.cssRules) !== null && _sheet$cssRules !== void 0 ? _sheet$cssRules : []);
        var css = this.rewrite(rules, prefix);
        // eslint-disable-next-line no-param-reassign
        styleNode.textContent = css;
        // cleanup
        this.swapNode.removeChild(textNode);
        styleNode[ScopedCSS.ModifiedTag] = true;
        return;
      }
      var mutator = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i += 1) {
          var mutation = mutations[i];
          if (ScopedCSS.ModifiedTag in styleNode) {
            return;
          }
          if (mutation.type === 'childList') {
            var _sheet$cssRules2;
            var _sheet = styleNode.sheet;
            var _rules = arrayify((_sheet$cssRules2 = _sheet === null || _sheet === void 0 ? void 0 : _sheet.cssRules) !== null && _sheet$cssRules2 !== void 0 ? _sheet$cssRules2 : []);
            var _css = _this.rewrite(_rules, prefix);
            // eslint-disable-next-line no-param-reassign
            styleNode.textContent = _css;
            // eslint-disable-next-line no-param-reassign
            styleNode[ScopedCSS.ModifiedTag] = true;
          }
        }
      });
      // since observer will be deleted when node be removed
      // we dont need create a cleanup function manually
      // see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/disconnect
      mutator.observe(styleNode, {
        childList: true
      });
    }
  }, {
    key: "rewrite",
    value: function rewrite(rules) {
      var _this2 = this;
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var css = '';
      rules.forEach(function (rule) {
        switch (rule.type) {
          case RuleType.STYLE:
            css += _this2.ruleStyle(rule, prefix);
            break;
          case RuleType.MEDIA:
            css += _this2.ruleMedia(rule, prefix);
            break;
          case RuleType.SUPPORTS:
            css += _this2.ruleSupport(rule, prefix);
            break;
          default:
            if (typeof rule.cssText === 'string') {
              css += "".concat(rule.cssText);
            }
            break;
        }
      });
      return css;
    }
    // handle case:
    // .app-main {}
    // html, body {}
    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "ruleStyle",
    value: function ruleStyle(rule, prefix) {
      var rootSelectorRE = /((?:[^\w\-.#]|^)(body|html|:root))/gm;
      var rootCombinationRE = /(html[^\w{[]+)/gm;
      var selector = rule.selectorText.trim();
      var cssText = '';
      if (typeof rule.cssText === 'string') {
        cssText = rule.cssText;
      }
      // handle html { ... }
      // handle body { ... }
      // handle :root { ... }
      if (selector === 'html' || selector === 'body' || selector === ':root') {
        return cssText.replace(rootSelectorRE, prefix);
      }
      // handle html body { ... }
      // handle html > body { ... }
      if (rootCombinationRE.test(rule.selectorText)) {
        var siblingSelectorRE = /(html[^\w{]+)(\+|~)/gm;
        // since html + body is a non-standard rule for html
        // transformer will ignore it
        if (!siblingSelectorRE.test(rule.selectorText)) {
          cssText = cssText.replace(rootCombinationRE, '');
        }
      }
      // handle grouping selector, a,span,p,div { ... }
      cssText = cssText.replace(/^[\s\S]+{/, function (selectors) {
        return selectors.replace(/(^|,\n?)([^,]+)/g, function (item, p, s) {
          // handle div,body,span { ... }
          if (rootSelectorRE.test(item)) {
            return item.replace(rootSelectorRE, function (m) {
              // do not discard valid previous character, such as body,html or *:not(:root)
              var whitePrevChars = [',', '('];
              if (m && whitePrevChars.includes(m[0])) {
                return "".concat(m[0]).concat(prefix);
              }
              // replace root selector with prefix
              return prefix;
            });
          }
          return "".concat(p).concat(prefix, " ").concat(s.replace(/^ */, ''));
        });
      });
      return cssText;
    }
    // handle case:
    // @media screen and (max-width: 300px) {}
  }, {
    key: "ruleMedia",
    value: function ruleMedia(rule, prefix) {
      var css = this.rewrite(arrayify(rule.cssRules), prefix);
      return "@media ".concat(rule.conditionText || rule.media.mediaText, " {").concat(css, "}");
    }
    // handle case:
    // @supports (display: grid) {}
  }, {
    key: "ruleSupport",
    value: function ruleSupport(rule, prefix) {
      var css = this.rewrite(arrayify(rule.cssRules), prefix);
      return "@supports ".concat(rule.conditionText || rule.cssText.split('{')[0], " {").concat(css, "}");
    }
  }]);
  return ScopedCSS;
}();
ScopedCSS.ModifiedTag = 'Symbol(style-modified-qiankun)';
var processor;
var QiankunCSSRewriteAttr = 'data-qiankun';
var process = function process(appWrapper, stylesheetElement, appName) {
  // lazy singleton pattern
  if (!processor) {
    processor = new ScopedCSS();
  }
  if (stylesheetElement.tagName === 'LINK') {
    console.warn('Feature: sandbox.experimentalStyleIsolation is not support for link element yet.');
  }
  var mountDOM = appWrapper;
  if (!mountDOM) {
    return;
  }
  var tag = (mountDOM.tagName || '').toLowerCase();
  if (tag && stylesheetElement.tagName === 'STYLE') {
    var prefix = "".concat(tag, "[").concat(QiankunCSSRewriteAttr, "=\"").concat(appName, "\"]");
    processor.process(stylesheetElement, prefix);
  }
};

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/dynamicAppend/common.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/dynamicAppend/common.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcAppCount: () => (/* binding */ calcAppCount),
/* harmony export */   getAppWrapperHeadElement: () => (/* binding */ getAppWrapperHeadElement),
/* harmony export */   getStyledElementCSSRules: () => (/* binding */ getStyledElementCSSRules),
/* harmony export */   isAllAppsUnmounted: () => (/* binding */ isAllAppsUnmounted),
/* harmony export */   isExecutableScriptType: () => (/* binding */ isExecutableScriptType),
/* harmony export */   isHijackingTag: () => (/* binding */ isHijackingTag),
/* harmony export */   isStyledComponentsLike: () => (/* binding */ isStyledComponentsLike),
/* harmony export */   patchHTMLDynamicAppendPrototypeFunctions: () => (/* binding */ patchHTMLDynamicAppendPrototypeFunctions),
/* harmony export */   rebuildCSSRules: () => (/* binding */ rebuildCSSRules),
/* harmony export */   recordStyledComponentsCSSRules: () => (/* binding */ recordStyledComponentsCSSRules),
/* harmony export */   styleElementRefNodeNo: () => (/* binding */ styleElementRefNodeNo),
/* harmony export */   styleElementTargetSymbol: () => (/* binding */ styleElementTargetSymbol)
/* harmony export */ });
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.21@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var import_html_entry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! import-html-entry */ "./node_modules/_import-html-entry@1.17.0@import-html-entry/esm/index.js");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apis */ "./node_modules/_qiankun@2.10.16@qiankun/es/apis.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./node_modules/_qiankun@2.10.16@qiankun/es/utils.js");
/* harmony import */ var _proxySandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../proxySandbox */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/proxySandbox.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/css.js");


/**
 * @author Kuitos
 * @since 2019-10-21
 */





var SCRIPT_TAG_NAME = 'SCRIPT';
var LINK_TAG_NAME = 'LINK';
var STYLE_TAG_NAME = 'STYLE';
var styleElementTargetSymbol = Symbol('target');
var styleElementRefNodeNo = Symbol('refNodeNo');
var overwrittenSymbol = Symbol('qiankun-overwritten');
var getAppWrapperHeadElement = function getAppWrapperHeadElement(appWrapper) {
  return appWrapper.querySelector(_utils__WEBPACK_IMPORTED_MODULE_2__.qiankunHeadTagName);
};
function isExecutableScriptType(script) {
  return !script.type || ['text/javascript', 'module', 'application/javascript', 'text/ecmascript', 'application/ecmascript'].indexOf(script.type) !== -1;
}
function isHijackingTag(tagName) {
  return (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === LINK_TAG_NAME || (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === STYLE_TAG_NAME || (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === SCRIPT_TAG_NAME;
}
/**
 * Check if a style element is a styled-component liked.
 * A styled-components liked element is which not have textContext but keep the rules in its styleSheet.cssRules.
 * Such as the style element generated by styled-components and emotion.
 * @param element
 */
function isStyledComponentsLike(element) {
  var _element$sheet, _getStyledElementCSSR;
  return !element.textContent && (((_element$sheet = element.sheet) === null || _element$sheet === void 0 ? void 0 : _element$sheet.cssRules.length) || ((_getStyledElementCSSR = getStyledElementCSSRules(element)) === null || _getStyledElementCSSR === void 0 ? void 0 : _getStyledElementCSSR.length));
}
var appsCounterMap = new Map();
function calcAppCount(appName, calcType, status) {
  var appCount = appsCounterMap.get(appName) || {
    bootstrappingPatchCount: 0,
    mountingPatchCount: 0
  };
  switch (calcType) {
    case 'increase':
      appCount["".concat(status, "PatchCount")] += 1;
      break;
    case 'decrease':
      // bootstrap patch just called once but its freer will be called multiple times
      if (appCount["".concat(status, "PatchCount")] > 0) {
        appCount["".concat(status, "PatchCount")] -= 1;
      }
      break;
  }
  appsCounterMap.set(appName, appCount);
}
function isAllAppsUnmounted() {
  return Array.from(appsCounterMap.entries()).every(function (_ref) {
    var _ref2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
      _ref2$ = _ref2[1],
      bpc = _ref2$.bootstrappingPatchCount,
      mpc = _ref2$.mountingPatchCount;
    return bpc === 0 && mpc === 0;
  });
}
function patchCustomEvent(e, elementGetter) {
  Object.defineProperties(e, {
    srcElement: {
      get: elementGetter
    },
    target: {
      get: elementGetter
    }
  });
  return e;
}
function manualInvokeElementOnLoad(element) {
  // we need to invoke the onload event manually to notify the event listener that the script was completed
  // here are the two typical ways of dynamic script loading
  // 1. element.onload callback way, which webpack and loadjs used, see https://github.com/muicss/loadjs/blob/master/src/loadjs.js#L138
  // 2. addEventListener way, which toast-loader used, see https://github.com/pyrsmk/toast/blob/master/src/Toast.ts#L64
  var loadEvent = new CustomEvent('load');
  var patchedEvent = patchCustomEvent(loadEvent, function () {
    return element;
  });
  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(element.onload)) {
    element.onload(patchedEvent);
  } else {
    element.dispatchEvent(patchedEvent);
  }
}
function manualInvokeElementOnError(element) {
  var errorEvent = new CustomEvent('error');
  var patchedEvent = patchCustomEvent(errorEvent, function () {
    return element;
  });
  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(element.onerror)) {
    element.onerror(patchedEvent);
  } else {
    element.dispatchEvent(patchedEvent);
  }
}
function convertLinkAsStyle(element, postProcess) {
  var fetchFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : fetch;
  var styleElement = document.createElement('style');
  var href = element.href;
  // add source link element href
  styleElement.dataset.qiankunHref = href;
  fetchFn(href).then(function (res) {
    return res.text();
  }).then(function (styleContext) {
    styleElement.appendChild(document.createTextNode(styleContext));
    postProcess(styleElement);
    manualInvokeElementOnLoad(element);
  }).catch(function () {
    return manualInvokeElementOnError(element);
  });
  return styleElement;
}
var defineNonEnumerableProperty = function defineNonEnumerableProperty(target, key, value) {
  Object.defineProperty(target, key, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: value
  });
};
var styledComponentCSSRulesMap = new WeakMap();
var dynamicScriptAttachedCommentMap = new WeakMap();
var dynamicLinkAttachedInlineStyleMap = new WeakMap();
function recordStyledComponentsCSSRules(styleElements) {
  styleElements.forEach(function (styleElement) {
    /*
     With a styled-components generated style element, we need to record its cssRules for restore next re-mounting time.
     We're doing this because the sheet of style element is going to be cleaned automatically by browser after the style element dom removed from document.
     see https://www.w3.org/TR/cssom-1/#associated-css-style-sheet
     */
    if (styleElement instanceof HTMLStyleElement && isStyledComponentsLike(styleElement)) {
      if (styleElement.sheet) {
        // record the original css rules of the style element for restore
        styledComponentCSSRulesMap.set(styleElement, styleElement.sheet.cssRules);
      }
    }
  });
}
function getStyledElementCSSRules(styledElement) {
  return styledComponentCSSRulesMap.get(styledElement);
}
function getOverwrittenAppendChildOrInsertBefore(opts) {
  function appendChildOrInsertBefore(newChild) {
    var refChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var element = newChild;
    var rawDOMAppendOrInsertBefore = opts.rawDOMAppendOrInsertBefore,
      isInvokedByMicroApp = opts.isInvokedByMicroApp,
      containerConfigGetter = opts.containerConfigGetter,
      _opts$target = opts.target,
      target = _opts$target === void 0 ? 'body' : _opts$target;
    if (!isHijackingTag(element.tagName) || !isInvokedByMicroApp(element)) {
      return rawDOMAppendOrInsertBefore.call(this, element, refChild);
    }
    if (element.tagName) {
      var containerConfig = containerConfigGetter(element);
      var appName = containerConfig.appName,
        appWrapperGetter = containerConfig.appWrapperGetter,
        proxy = containerConfig.proxy,
        strictGlobal = containerConfig.strictGlobal,
        speedySandbox = containerConfig.speedySandbox,
        dynamicStyleSheetElements = containerConfig.dynamicStyleSheetElements,
        scopedCSS = containerConfig.scopedCSS,
        excludeAssetFilter = containerConfig.excludeAssetFilter;
      switch (element.tagName) {
        case LINK_TAG_NAME:
        case STYLE_TAG_NAME:
          {
            var stylesheetElement = newChild;
            var _stylesheetElement = stylesheetElement,
              href = _stylesheetElement.href;
            if (excludeAssetFilter && href && excludeAssetFilter(href)) {
              return rawDOMAppendOrInsertBefore.call(this, element, refChild);
            }
            defineNonEnumerableProperty(stylesheetElement, styleElementTargetSymbol, target);
            var appWrapper = appWrapperGetter();
            if (scopedCSS) {
              var _element$tagName;
              // exclude link elements like <link rel="icon" href="favicon.ico">
              var linkElementUsingStylesheet = ((_element$tagName = element.tagName) === null || _element$tagName === void 0 ? void 0 : _element$tagName.toUpperCase()) === LINK_TAG_NAME && element.rel === 'stylesheet' && element.href;
              if (linkElementUsingStylesheet) {
                var _frameworkConfigurati;
                var _fetch = typeof _apis__WEBPACK_IMPORTED_MODULE_3__.frameworkConfiguration.fetch === 'function' ? _apis__WEBPACK_IMPORTED_MODULE_3__.frameworkConfiguration.fetch : (_frameworkConfigurati = _apis__WEBPACK_IMPORTED_MODULE_3__.frameworkConfiguration.fetch) === null || _frameworkConfigurati === void 0 ? void 0 : _frameworkConfigurati.fn;
                stylesheetElement = convertLinkAsStyle(element, function (styleElement) {
                  return _css__WEBPACK_IMPORTED_MODULE_4__.process(appWrapper, styleElement, appName);
                }, _fetch);
                dynamicLinkAttachedInlineStyleMap.set(element, stylesheetElement);
              } else {
                _css__WEBPACK_IMPORTED_MODULE_4__.process(appWrapper, stylesheetElement, appName);
              }
            }
            var mountDOM = target === 'head' ? getAppWrapperHeadElement(appWrapper) : appWrapper;
            var referenceNode = mountDOM.contains(refChild) ? refChild : null;
            var refNo;
            if (referenceNode) {
              refNo = Array.from(mountDOM.childNodes).indexOf(referenceNode);
            }
            var result = rawDOMAppendOrInsertBefore.call(mountDOM, stylesheetElement, referenceNode);
            // record refNo thus we can keep order while remounting
            if (typeof refNo === 'number' && refNo !== -1) {
              defineNonEnumerableProperty(stylesheetElement, styleElementRefNodeNo, refNo);
            }
            // record dynamic style elements after insert succeed
            dynamicStyleSheetElements.push(stylesheetElement);
            return result;
          }
        case SCRIPT_TAG_NAME:
          {
            var _element = element,
              src = _element.src,
              text = _element.text;
            // some script like jsonp maybe not support cors which shouldn't use execScripts
            if (excludeAssetFilter && src && excludeAssetFilter(src) || !isExecutableScriptType(element)) {
              return rawDOMAppendOrInsertBefore.call(this, element, refChild);
            }
            var _appWrapper = appWrapperGetter();
            var _mountDOM = target === 'head' ? getAppWrapperHeadElement(_appWrapper) : _appWrapper;
            var _fetch2 = _apis__WEBPACK_IMPORTED_MODULE_3__.frameworkConfiguration.fetch;
            var _referenceNode = _mountDOM.contains(refChild) ? refChild : null;
            var scopedGlobalVariables = speedySandbox ? _proxySandbox__WEBPACK_IMPORTED_MODULE_5__.cachedGlobals : [];
            if (src) {
              var isRedfinedCurrentScript = false;
              (0,import_html_entry__WEBPACK_IMPORTED_MODULE_6__.execScripts)(null, [src], proxy, {
                fetch: _fetch2,
                strictGlobal: strictGlobal,
                scopedGlobalVariables: scopedGlobalVariables,
                beforeExec: function beforeExec() {
                  var isCurrentScriptConfigurable = function isCurrentScriptConfigurable() {
                    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript');
                    return !descriptor || descriptor.configurable;
                  };
                  if (isCurrentScriptConfigurable()) {
                    Object.defineProperty(document, 'currentScript', {
                      get: function get() {
                        return element;
                      },
                      configurable: true
                    });
                    isRedfinedCurrentScript = true;
                  }
                },
                success: function success() {
                  manualInvokeElementOnLoad(element);
                  if (isRedfinedCurrentScript) {
                    // @ts-ignore
                    delete document.currentScript;
                  }
                  element = null;
                },
                error: function error() {
                  manualInvokeElementOnError(element);
                  if (isRedfinedCurrentScript) {
                    // @ts-ignore
                    delete document.currentScript;
                  }
                  element = null;
                }
              });
              var dynamicScriptCommentElement = document.createComment("dynamic script ".concat(src, " replaced by qiankun"));
              dynamicScriptAttachedCommentMap.set(element, dynamicScriptCommentElement);
              return rawDOMAppendOrInsertBefore.call(_mountDOM, dynamicScriptCommentElement, _referenceNode);
            }
            // inline script never trigger the onload and onerror event
            (0,import_html_entry__WEBPACK_IMPORTED_MODULE_6__.execScripts)(null, ["<script>".concat(text, "</script>")], proxy, {
              strictGlobal: strictGlobal,
              scopedGlobalVariables: scopedGlobalVariables
            });
            var dynamicInlineScriptCommentElement = document.createComment('dynamic inline script replaced by qiankun');
            dynamicScriptAttachedCommentMap.set(element, dynamicInlineScriptCommentElement);
            return rawDOMAppendOrInsertBefore.call(_mountDOM, dynamicInlineScriptCommentElement, _referenceNode);
          }
        default:
          break;
      }
    }
    return rawDOMAppendOrInsertBefore.call(this, element, refChild);
  }
  appendChildOrInsertBefore[overwrittenSymbol] = true;
  return appendChildOrInsertBefore;
}
function getNewRemoveChild(rawRemoveChild, containerConfigGetter, target, isInvokedByMicroApp) {
  function removeChild(child) {
    var tagName = child.tagName;
    if (!isHijackingTag(tagName) || !isInvokedByMicroApp(child)) return rawRemoveChild.call(this, child);
    try {
      var attachedElement;
      var _containerConfigGette = containerConfigGetter(child),
        appWrapperGetter = _containerConfigGette.appWrapperGetter,
        dynamicStyleSheetElements = _containerConfigGette.dynamicStyleSheetElements;
      switch (tagName) {
        case STYLE_TAG_NAME:
        case LINK_TAG_NAME:
          {
            attachedElement = dynamicLinkAttachedInlineStyleMap.get(child) || child;
            // try to remove the dynamic style sheet
            var dynamicElementIndex = dynamicStyleSheetElements.indexOf(attachedElement);
            if (dynamicElementIndex !== -1) {
              dynamicStyleSheetElements.splice(dynamicElementIndex, 1);
            }
            break;
          }
        case SCRIPT_TAG_NAME:
          {
            attachedElement = dynamicScriptAttachedCommentMap.get(child) || child;
            break;
          }
        default:
          {
            attachedElement = child;
          }
      }
      var appWrapper = appWrapperGetter();
      var container = target === 'head' ? getAppWrapperHeadElement(appWrapper) : appWrapper;
      // container might have been removed while app unmounting if the removeChild action was async
      if (container.contains(attachedElement)) {
        return rawRemoveChild.call(attachedElement.parentNode, attachedElement);
      }
    } catch (e) {
      console.warn(e);
    }
    return rawRemoveChild.call(this, child);
  }
  removeChild[overwrittenSymbol] = true;
  return removeChild;
}
function patchHTMLDynamicAppendPrototypeFunctions(isInvokedByMicroApp, containerConfigGetter) {
  var rawHeadAppendChild = HTMLHeadElement.prototype.appendChild;
  var rawBodyAppendChild = HTMLBodyElement.prototype.appendChild;
  var rawHeadInsertBefore = HTMLHeadElement.prototype.insertBefore;
  // Just overwrite it while it have not been overwritten
  if (rawHeadAppendChild[overwrittenSymbol] !== true && rawBodyAppendChild[overwrittenSymbol] !== true && rawHeadInsertBefore[overwrittenSymbol] !== true) {
    HTMLHeadElement.prototype.appendChild = getOverwrittenAppendChildOrInsertBefore({
      rawDOMAppendOrInsertBefore: rawHeadAppendChild,
      containerConfigGetter: containerConfigGetter,
      isInvokedByMicroApp: isInvokedByMicroApp,
      target: 'head'
    });
    HTMLBodyElement.prototype.appendChild = getOverwrittenAppendChildOrInsertBefore({
      rawDOMAppendOrInsertBefore: rawBodyAppendChild,
      containerConfigGetter: containerConfigGetter,
      isInvokedByMicroApp: isInvokedByMicroApp,
      target: 'body'
    });
    HTMLHeadElement.prototype.insertBefore = getOverwrittenAppendChildOrInsertBefore({
      rawDOMAppendOrInsertBefore: rawHeadInsertBefore,
      containerConfigGetter: containerConfigGetter,
      isInvokedByMicroApp: isInvokedByMicroApp,
      target: 'head'
    });
  }
  var rawHeadRemoveChild = HTMLHeadElement.prototype.removeChild;
  var rawBodyRemoveChild = HTMLBodyElement.prototype.removeChild;
  // Just overwrite it while it have not been overwritten
  if (rawHeadRemoveChild[overwrittenSymbol] !== true && rawBodyRemoveChild[overwrittenSymbol] !== true) {
    HTMLHeadElement.prototype.removeChild = getNewRemoveChild(rawHeadRemoveChild, containerConfigGetter, 'head', isInvokedByMicroApp);
    HTMLBodyElement.prototype.removeChild = getNewRemoveChild(rawBodyRemoveChild, containerConfigGetter, 'body', isInvokedByMicroApp);
  }
  return function unpatch() {
    HTMLHeadElement.prototype.appendChild = rawHeadAppendChild;
    HTMLHeadElement.prototype.removeChild = rawHeadRemoveChild;
    HTMLBodyElement.prototype.appendChild = rawBodyAppendChild;
    HTMLBodyElement.prototype.removeChild = rawBodyRemoveChild;
    HTMLHeadElement.prototype.insertBefore = rawHeadInsertBefore;
  };
}
function rebuildCSSRules(styleSheetElements, reAppendElement) {
  styleSheetElements.forEach(function (stylesheetElement) {
    // re-append the dynamic stylesheet to sub-app container
    var appendSuccess = reAppendElement(stylesheetElement);
    if (appendSuccess) {
      /*
      get the stored css rules from styled-components generated element, and the re-insert rules for them.
      note that we must do this after style element had been added to document, which stylesheet would be associated to the document automatically.
      check the spec https://www.w3.org/TR/cssom-1/#associated-css-style-sheet
       */
      if (stylesheetElement instanceof HTMLStyleElement && isStyledComponentsLike(stylesheetElement)) {
        var cssRules = getStyledElementCSSRules(stylesheetElement);
        if (cssRules) {
          // eslint-disable-next-line no-plusplus
          for (var i = 0; i < cssRules.length; i++) {
            var cssRule = cssRules[i];
            var cssStyleSheetElement = stylesheetElement.sheet;
            cssStyleSheetElement.insertRule(cssRule.cssText, cssStyleSheetElement.cssRules.length);
          }
        }
      }
    }
  });
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/dynamicAppend/forLooseSandbox.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/dynamicAppend/forLooseSandbox.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   patchLooseSandbox: () => (/* binding */ patchLooseSandbox)
/* harmony export */ });
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ "./node_modules/_single-spa@5.9.5@single-spa/lib/esm/single-spa.min.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/dynamicAppend/common.js");
/**
 * @author Kuitos
 * @since 2020-10-13
 */


/**
 * Just hijack dynamic head append, that could avoid accidentally hijacking the insertion of elements except in head.
 * Such a case: ReactDOM.createPortal(<style>.test{color:blue}</style>, container),
 * this could make we append the style element into app wrapper but it will cause an error while the react portal unmounting, as ReactDOM could not find the style in body children list.
 * @param appName
 * @param appWrapperGetter
 * @param sandbox
 * @param mounting
 * @param scopedCSS
 * @param excludeAssetFilter
 */
function patchLooseSandbox(appName, appWrapperGetter, sandbox) {
  var mounting = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var scopedCSS = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var excludeAssetFilter = arguments.length > 5 ? arguments[5] : undefined;
  var proxy = sandbox.proxy;
  var dynamicStyleSheetElements = [];
  var unpatchDynamicAppendPrototypeFunctions = (0,_common__WEBPACK_IMPORTED_MODULE_1__.patchHTMLDynamicAppendPrototypeFunctions)(
  /*
    check if the currently specified application is active
    While we switch page from qiankun app to a normal react routing page, the normal one may load stylesheet dynamically while page rendering,
    but the url change listener must wait until the current call stack is flushed.
    This scenario may cause we record the stylesheet from react routing page dynamic injection,
    and remove them after the url change triggered and qiankun app is unmounting
    see https://github.com/ReactTraining/history/blob/master/modules/createHashHistory.js#L222-L230
   */
  function () {
    return (0,single_spa__WEBPACK_IMPORTED_MODULE_0__.checkActivityFunctions)(window.location).some(function (name) {
      return name === appName;
    });
  }, function () {
    return {
      appName: appName,
      appWrapperGetter: appWrapperGetter,
      proxy: proxy,
      strictGlobal: false,
      speedySandbox: false,
      scopedCSS: scopedCSS,
      dynamicStyleSheetElements: dynamicStyleSheetElements,
      excludeAssetFilter: excludeAssetFilter
    };
  });
  if (!mounting) (0,_common__WEBPACK_IMPORTED_MODULE_1__.calcAppCount)(appName, 'increase', 'bootstrapping');
  if (mounting) (0,_common__WEBPACK_IMPORTED_MODULE_1__.calcAppCount)(appName, 'increase', 'mounting');
  return function free() {
    if (!mounting) (0,_common__WEBPACK_IMPORTED_MODULE_1__.calcAppCount)(appName, 'decrease', 'bootstrapping');
    if (mounting) (0,_common__WEBPACK_IMPORTED_MODULE_1__.calcAppCount)(appName, 'decrease', 'mounting');
    // release the overwrite prototype after all the micro apps unmounted
    if ((0,_common__WEBPACK_IMPORTED_MODULE_1__.isAllAppsUnmounted)()) unpatchDynamicAppendPrototypeFunctions();
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.recordStyledComponentsCSSRules)(dynamicStyleSheetElements);
    // As now the sub app content all wrapped with a special id container,
    // the dynamic style sheet would be removed automatically while unmounting
    return function rebuild() {
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.rebuildCSSRules)(dynamicStyleSheetElements, function (stylesheetElement) {
        var appWrapper = appWrapperGetter();
        if (!appWrapper.contains(stylesheetElement)) {
          // Using document.head.appendChild ensures that appendChild invocation can also directly use the HTMLHeadElement.prototype.appendChild method which is overwritten at mounting phase
          document.head.appendChild.call(appWrapper, stylesheetElement);
          return true;
        }
        return false;
      });
      // As the patcher will be invoked every mounting phase, we could release the cache for gc after rebuilding
      if (mounting) {
        dynamicStyleSheetElements = [];
      }
    };
  };
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/dynamicAppend/forStrictSandbox.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/dynamicAppend/forStrictSandbox.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   patchStrictSandbox: () => (/* binding */ patchStrictSandbox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./node_modules/_qiankun@2.10.16@qiankun/es/utils.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/common.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/dynamicAppend/common.js");


/**
 * @author Kuitos
 * @since 2020-10-13
 */



var elementAttachedSymbol = Symbol('attachedApp');
// Get native global window with a sandbox disgusted way, thus we could share it between qiankun instances🤪
Object.defineProperty(_utils__WEBPACK_IMPORTED_MODULE_2__.nativeGlobal, '__proxyAttachContainerConfigMap__', {
  enumerable: false,
  writable: true
});
Object.defineProperty(_utils__WEBPACK_IMPORTED_MODULE_2__.nativeGlobal, '__currentLockingSandbox__', {
  enumerable: false,
  writable: true,
  configurable: true
});
var rawHeadAppendChild = HTMLHeadElement.prototype.appendChild;
var rawHeadInsertBefore = HTMLHeadElement.prototype.insertBefore;
// Share proxyAttachContainerConfigMap between multiple qiankun instance, thus they could access the same record
_utils__WEBPACK_IMPORTED_MODULE_2__.nativeGlobal.__proxyAttachContainerConfigMap__ = _utils__WEBPACK_IMPORTED_MODULE_2__.nativeGlobal.__proxyAttachContainerConfigMap__ || new WeakMap();
var proxyAttachContainerConfigMap = _utils__WEBPACK_IMPORTED_MODULE_2__.nativeGlobal.__proxyAttachContainerConfigMap__;
var elementAttachContainerConfigMap = new WeakMap();
var docCreatePatchedMap = new WeakMap();
var patchMap = new WeakMap();
function patchDocument(cfg) {
  var sandbox = cfg.sandbox,
    speedy = cfg.speedy;
  var attachElementToProxy = function attachElementToProxy(element, proxy) {
    var proxyContainerConfig = proxyAttachContainerConfigMap.get(proxy);
    if (proxyContainerConfig) {
      elementAttachContainerConfigMap.set(element, proxyContainerConfig);
    }
  };
  if (speedy) {
    var modifications = {};
    var proxyDocument = new Proxy(document, {
      /**
       * Read and write must be paired, otherwise the write operation will leak to the global
       */
      set: function set(target, p, value) {
        switch (p) {
          case 'createElement':
            {
              modifications.createElement = value;
              break;
            }
          case 'querySelector':
            {
              modifications.querySelector = value;
              break;
            }
          default:
            target[p] = value;
            break;
        }
        return true;
      },
      get: function get(target, p, receiver) {
        switch (p) {
          case 'createElement':
            {
              // Must store the original createElement function to avoid error in nested sandbox
              var targetCreateElement = modifications.createElement || target.createElement;
              return function createElement() {
                if (!_utils__WEBPACK_IMPORTED_MODULE_2__.nativeGlobal.__currentLockingSandbox__) {
                  _utils__WEBPACK_IMPORTED_MODULE_2__.nativeGlobal.__currentLockingSandbox__ = sandbox.name;
                }
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                var element = targetCreateElement.call.apply(targetCreateElement, [target].concat(args));
                // only record the element which is created by the current sandbox, thus we can avoid the element created by nested sandboxes
                if (_utils__WEBPACK_IMPORTED_MODULE_2__.nativeGlobal.__currentLockingSandbox__ === sandbox.name) {
                  attachElementToProxy(element, sandbox.proxy);
                  delete _utils__WEBPACK_IMPORTED_MODULE_2__.nativeGlobal.__currentLockingSandbox__;
                }
                return element;
              };
            }
          case 'querySelector':
            {
              var targetQuerySelector = modifications.querySelector || target.querySelector;
              return function querySelector() {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }
                var selector = args[0];
                switch (selector) {
                  case 'head':
                    {
                      var containerConfig = proxyAttachContainerConfigMap.get(sandbox.proxy);
                      if (containerConfig) {
                        var qiankunHead = (0,_common__WEBPACK_IMPORTED_MODULE_3__.getAppWrapperHeadElement)(containerConfig.appWrapperGetter());
                        qiankunHead.appendChild = HTMLHeadElement.prototype.appendChild;
                        qiankunHead.insertBefore = HTMLHeadElement.prototype.insertBefore;
                        qiankunHead.removeChild = HTMLHeadElement.prototype.removeChild;
                        return qiankunHead;
                      }
                      break;
                    }
                }
                return targetQuerySelector.call.apply(targetQuerySelector, [target].concat(args));
              };
            }
          default:
            break;
        }
        var value = target[p];
        // must rebind the function to the target otherwise it will cause illegal invocation error
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isCallable)(value) && !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isBoundedFunction)(value)) {
          return function proxyFunction() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }
            return value.call.apply(value, [target].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(args.map(function (arg) {
              return arg === receiver ? target : arg;
            }))));
          };
        }
        return value;
      }
    });
    sandbox.patchDocument(proxyDocument);
    // patch MutationObserver.prototype.observe to avoid type error
    // https://github.com/umijs/qiankun/issues/2406
    var nativeMutationObserverObserveFn = MutationObserver.prototype.observe;
    if (!patchMap.has(nativeMutationObserverObserveFn)) {
      var observe = function observe(target, options) {
        var realTarget = target instanceof Document ? _utils__WEBPACK_IMPORTED_MODULE_2__.nativeDocument : target;
        return nativeMutationObserverObserveFn.call(this, realTarget, options);
      };
      MutationObserver.prototype.observe = observe;
      patchMap.set(nativeMutationObserverObserveFn, observe);
    }
    // patch Node.prototype.compareDocumentPosition to avoid type error
    var prevCompareDocumentPosition = Node.prototype.compareDocumentPosition;
    if (!patchMap.has(prevCompareDocumentPosition)) {
      Node.prototype.compareDocumentPosition = function compareDocumentPosition(node) {
        var realNode = node instanceof Document ? _utils__WEBPACK_IMPORTED_MODULE_2__.nativeDocument : node;
        return prevCompareDocumentPosition.call(this, realNode);
      };
      patchMap.set(prevCompareDocumentPosition, Node.prototype.compareDocumentPosition);
    }
    // patch parentNode getter to avoid document === html.parentNode
    // https://github.com/umijs/qiankun/issues/2408#issuecomment-1446229105
    var parentNodeDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'parentNode');
    if (parentNodeDescriptor && !patchMap.has(parentNodeDescriptor)) {
      var parentNodeGetter = parentNodeDescriptor.get,
        configurable = parentNodeDescriptor.configurable;
      if (parentNodeGetter && configurable) {
        var patchedParentNodeDescriptor = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parentNodeDescriptor), {}, {
          get: function get() {
            var parentNode = parentNodeGetter.call(this);
            if (parentNode instanceof Document) {
              var _getCurrentRunningApp;
              var proxy = (_getCurrentRunningApp = (0,_common__WEBPACK_IMPORTED_MODULE_4__.getCurrentRunningApp)()) === null || _getCurrentRunningApp === void 0 ? void 0 : _getCurrentRunningApp.window;
              if (proxy) {
                return proxy.document;
              }
            }
            return parentNode;
          }
        });
        Object.defineProperty(Node.prototype, 'parentNode', patchedParentNodeDescriptor);
        patchMap.set(parentNodeDescriptor, patchedParentNodeDescriptor);
      }
    }
    return function () {
      MutationObserver.prototype.observe = nativeMutationObserverObserveFn;
      patchMap.delete(nativeMutationObserverObserveFn);
      Node.prototype.compareDocumentPosition = prevCompareDocumentPosition;
      patchMap.delete(prevCompareDocumentPosition);
      if (parentNodeDescriptor) {
        Object.defineProperty(Node.prototype, 'parentNode', parentNodeDescriptor);
        patchMap.delete(parentNodeDescriptor);
      }
    };
  }
  var docCreateElementFnBeforeOverwrite = docCreatePatchedMap.get(document.createElement);
  if (!docCreateElementFnBeforeOverwrite) {
    var rawDocumentCreateElement = document.createElement;
    Document.prototype.createElement = function createElement(tagName, options) {
      var element = rawDocumentCreateElement.call(this, tagName, options);
      if ((0,_common__WEBPACK_IMPORTED_MODULE_3__.isHijackingTag)(tagName)) {
        var _ref = (0,_common__WEBPACK_IMPORTED_MODULE_4__.getCurrentRunningApp)() || {},
          currentRunningSandboxProxy = _ref.window;
        if (currentRunningSandboxProxy) {
          attachElementToProxy(element, currentRunningSandboxProxy);
        }
      }
      return element;
    };
    // It means it have been overwritten while createElement is an own property of document
    if (document.hasOwnProperty('createElement')) {
      document.createElement = Document.prototype.createElement;
    }
    docCreatePatchedMap.set(Document.prototype.createElement, rawDocumentCreateElement);
  }
  return function unpatch() {
    if (docCreateElementFnBeforeOverwrite) {
      Document.prototype.createElement = docCreateElementFnBeforeOverwrite;
      document.createElement = docCreateElementFnBeforeOverwrite;
    }
  };
}
function patchStrictSandbox(appName, appWrapperGetter, sandbox) {
  var mounting = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var scopedCSS = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var excludeAssetFilter = arguments.length > 5 ? arguments[5] : undefined;
  var speedySandbox = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var proxy = sandbox.proxy;
  var containerConfig = proxyAttachContainerConfigMap.get(proxy);
  if (!containerConfig) {
    containerConfig = {
      appName: appName,
      proxy: proxy,
      appWrapperGetter: appWrapperGetter,
      dynamicStyleSheetElements: [],
      strictGlobal: true,
      speedySandbox: speedySandbox,
      excludeAssetFilter: excludeAssetFilter,
      scopedCSS: scopedCSS
    };
    proxyAttachContainerConfigMap.set(proxy, containerConfig);
  }
  // all dynamic style sheets are stored in proxy container
  var _containerConfig = containerConfig,
    dynamicStyleSheetElements = _containerConfig.dynamicStyleSheetElements;
  var unpatchDynamicAppendPrototypeFunctions = (0,_common__WEBPACK_IMPORTED_MODULE_3__.patchHTMLDynamicAppendPrototypeFunctions)(function (element) {
    return elementAttachContainerConfigMap.has(element);
  }, function (element) {
    return elementAttachContainerConfigMap.get(element);
  });
  var unpatchDocument = patchDocument({
    sandbox: sandbox,
    speedy: speedySandbox
  });
  if (!mounting) (0,_common__WEBPACK_IMPORTED_MODULE_3__.calcAppCount)(appName, 'increase', 'bootstrapping');
  if (mounting) (0,_common__WEBPACK_IMPORTED_MODULE_3__.calcAppCount)(appName, 'increase', 'mounting');
  return function free() {
    if (!mounting) (0,_common__WEBPACK_IMPORTED_MODULE_3__.calcAppCount)(appName, 'decrease', 'bootstrapping');
    if (mounting) (0,_common__WEBPACK_IMPORTED_MODULE_3__.calcAppCount)(appName, 'decrease', 'mounting');
    // release the overwritten prototype after all the micro apps unmounted
    if ((0,_common__WEBPACK_IMPORTED_MODULE_3__.isAllAppsUnmounted)()) {
      unpatchDynamicAppendPrototypeFunctions();
      unpatchDocument();
    }
    (0,_common__WEBPACK_IMPORTED_MODULE_3__.recordStyledComponentsCSSRules)(dynamicStyleSheetElements);
    // As now the sub app content all wrapped with a special id container,
    // the dynamic style sheet would be removed automatically while unmoutting
    return function rebuild() {
      (0,_common__WEBPACK_IMPORTED_MODULE_3__.rebuildCSSRules)(dynamicStyleSheetElements, function (stylesheetElement) {
        var appWrapper = appWrapperGetter();
        if (!appWrapper.contains(stylesheetElement)) {
          var mountDom = stylesheetElement[_common__WEBPACK_IMPORTED_MODULE_3__.styleElementTargetSymbol] === 'head' ? (0,_common__WEBPACK_IMPORTED_MODULE_3__.getAppWrapperHeadElement)(appWrapper) : appWrapper;
          var refNo = stylesheetElement[_common__WEBPACK_IMPORTED_MODULE_3__.styleElementRefNodeNo];
          if (typeof refNo === 'number' && refNo !== -1) {
            // the reference node may be dynamic script comment which is not rebuilt while remounting thus reference node no longer exists
            var refNode = mountDom.childNodes[refNo] || null;
            rawHeadInsertBefore.call(mountDom, stylesheetElement, refNode);
            return true;
          } else {
            rawHeadAppendChild.call(mountDom, stylesheetElement);
            return true;
          }
        }
        return false;
      });
    };
  };
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/historyListener.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/historyListener.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ patch)
/* harmony export */ });
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.21@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/_lodash@4.17.21@lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @author Kuitos
 * @since 2019-04-11
 */
function patch() {
  // FIXME umi unmount feature request
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var rawHistoryListen = function rawHistoryListen(_) {
    return (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default());
  };
  var historyListeners = [];
  var historyUnListens = [];
  if (window.g_history && lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(window.g_history.listen)) {
    rawHistoryListen = window.g_history.listen.bind(window.g_history);
    window.g_history.listen = function (listener) {
      historyListeners.push(listener);
      var unListen = rawHistoryListen(listener);
      historyUnListens.push(unListen);
      return function () {
        unListen();
        historyUnListens.splice(historyUnListens.indexOf(unListen), 1);
        historyListeners.splice(historyListeners.indexOf(listener), 1);
      };
    };
  }
  return function free() {
    var rebuild = (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default());
    /*
     还存在余量 listener 表明未被卸载，存在两种情况
     1. 应用在 unmout 时未正确卸载 listener
     2. listener 是应用 mount 之前绑定的，
     第二种情况下应用在下次 mount 之前需重新绑定该 listener
     */
    if (historyListeners.length) {
      rebuild = function rebuild() {
        // 必须使用 window.g_history.listen 的方式重新绑定 listener，从而能保证 rebuild 这部分也能被捕获到，否则在应用卸载后无法正确的移除这部分副作用
        historyListeners.forEach(function (listener) {
          return window.g_history.listen(listener);
        });
      };
    }
    // 卸载余下的 listener
    historyUnListens.forEach(function (unListen) {
      return unListen();
    });
    // restore
    if (window.g_history && lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(window.g_history.listen)) {
      window.g_history.listen = rawHistoryListen;
    }
    return rebuild;
  };
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* reexport module object */ _css__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   patchAtBootstrapping: () => (/* binding */ patchAtBootstrapping),
/* harmony export */   patchAtMounting: () => (/* binding */ patchAtMounting)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces */ "./node_modules/_qiankun@2.10.16@qiankun/es/interfaces.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/css.js");
/* harmony import */ var _dynamicAppend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamicAppend */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/dynamicAppend/forLooseSandbox.js");
/* harmony import */ var _dynamicAppend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamicAppend */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/dynamicAppend/forStrictSandbox.js");
/* harmony import */ var _historyListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historyListener */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/historyListener.js");
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interval */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/interval.js");
/* harmony import */ var _windowListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./windowListener */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/windowListener.js");

/**
 * @author Kuitos
 * @since 2019-04-11
 */






function patchAtMounting(appName, elementGetter, sandbox, scopedCSS, excludeAssetFilter, speedySandBox) {
  var _patchersInSandbox$sa;
  var basePatchers = [function () {
    return (0,_interval__WEBPACK_IMPORTED_MODULE_1__["default"])(sandbox.proxy);
  }, function () {
    return (0,_windowListener__WEBPACK_IMPORTED_MODULE_2__["default"])(sandbox.proxy);
  }, function () {
    return (0,_historyListener__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }];
  var patchersInSandbox = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.LegacyProxy, [].concat(basePatchers, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_5__.patchLooseSandbox)(appName, elementGetter, sandbox, true, scopedCSS, excludeAssetFilter);
  }])), _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.Proxy, [].concat(basePatchers, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_6__.patchStrictSandbox)(appName, elementGetter, sandbox, true, scopedCSS, excludeAssetFilter, speedySandBox);
  }])), _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.Snapshot, [].concat(basePatchers, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_5__.patchLooseSandbox)(appName, elementGetter, sandbox, true, scopedCSS, excludeAssetFilter);
  }]));
  return (_patchersInSandbox$sa = patchersInSandbox[sandbox.type]) === null || _patchersInSandbox$sa === void 0 ? void 0 : _patchersInSandbox$sa.map(function (patch) {
    return patch();
  });
}
function patchAtBootstrapping(appName, elementGetter, sandbox, scopedCSS, excludeAssetFilter, speedySandBox) {
  var _patchersInSandbox$sa2;
  var patchersInSandbox = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.LegacyProxy, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_5__.patchLooseSandbox)(appName, elementGetter, sandbox, false, scopedCSS, excludeAssetFilter);
  }]), _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.Proxy, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_6__.patchStrictSandbox)(appName, elementGetter, sandbox, false, scopedCSS, excludeAssetFilter, speedySandBox);
  }]), _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.Snapshot, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_5__.patchLooseSandbox)(appName, elementGetter, sandbox, false, scopedCSS, excludeAssetFilter);
  }]);
  return (_patchersInSandbox$sa2 = patchersInSandbox[sandbox.type]) === null || _patchersInSandbox$sa2 === void 0 ? void 0 : _patchersInSandbox$sa2.map(function (patch) {
    return patch();
  });
}


/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/interval.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/interval.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ patch)
/* harmony export */ });
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/noop */ "./node_modules/_lodash@4.17.21@lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toConsumableArray.js");


/* eslint-disable no-param-reassign */
/**
 * @author Kuitos
 * @since 2019-04-11
 */
var rawWindowInterval = window.setInterval;
var rawWindowClearInterval = window.clearInterval;
function patch(global) {
  var intervals = [];
  global.clearInterval = function (intervalId) {
    intervals = intervals.filter(function (id) {
      return id !== intervalId;
    });
    return rawWindowClearInterval.call(window, intervalId);
  };
  global.setInterval = function (handler, timeout) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    var intervalId = rawWindowInterval.apply(void 0, [handler, timeout].concat(args));
    intervals = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(intervals), [intervalId]);
    return intervalId;
  };
  return function free() {
    intervals.forEach(function (id) {
      return global.clearInterval(id);
    });
    global.setInterval = rawWindowInterval;
    global.clearInterval = rawWindowClearInterval;
    return (lodash_noop__WEBPACK_IMPORTED_MODULE_0___default());
  };
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/windowListener.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/patchers/windowListener.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ patch)
/* harmony export */ });
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/noop */ "./node_modules/_lodash@4.17.21@lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toConsumableArray.js");


/* eslint-disable no-param-reassign */
/**
 * @author Kuitos
 * @since 2019-04-11
 */
var rawAddEventListener = window.addEventListener;
var rawRemoveEventListener = window.removeEventListener;
function patch(global) {
  var listenerMap = new Map();
  global.addEventListener = function (type, listener, options) {
    var listeners = listenerMap.get(type) || [];
    listenerMap.set(type, [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(listeners), [listener]));
    return rawAddEventListener.call(window, type, listener, options);
  };
  global.removeEventListener = function (type, listener, options) {
    var storedTypeListeners = listenerMap.get(type);
    if (storedTypeListeners && storedTypeListeners.length && storedTypeListeners.indexOf(listener) !== -1) {
      storedTypeListeners.splice(storedTypeListeners.indexOf(listener), 1);
    }
    return rawRemoveEventListener.call(window, type, listener, options);
  };
  return function free() {
    listenerMap.forEach(function (listeners, type) {
      return (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(listeners).forEach(function (listener) {
        return global.removeEventListener(type, listener);
      });
    });
    global.addEventListener = rawAddEventListener;
    global.removeEventListener = rawRemoveEventListener;
    return (lodash_noop__WEBPACK_IMPORTED_MODULE_0___default());
  };
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/proxySandbox.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/proxySandbox.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cachedGlobals: () => (/* binding */ cachedGlobals),
/* harmony export */   "default": () => (/* binding */ ProxySandbox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/without */ "./node_modules/_lodash@4.17.21@lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interfaces */ "./node_modules/_qiankun@2.10.16@qiankun/es/interfaces.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./node_modules/_qiankun@2.10.16@qiankun/es/utils.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/common.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globals */ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/globals.js");





/* eslint-disable no-param-reassign */
/**
 * @author Kuitos
 * @since 2020-3-31
 */




/**
 * fastest(at most time) unique array method
 * @see https://jsperf.com/array-filter-unique/30
 */
function uniq(array) {
  return array.filter(function filter(element) {
    return element in this ? false : this[element] = true;
  }, Object.create(null));
}
/**
 * transform array to object to enable faster element check with in operator
 * @param array
 */
function array2TruthyObject(array) {
  return array.reduce(function (acc, key) {
    acc[key] = true;
    return acc;
  },
  // Notes that babel will transpile spread operator to Object.assign({}, ...args), which will keep the prototype of Object in merged object,
  // while this result used as Symbol.unscopables, it will make properties in Object.prototype always be escaped from proxy sandbox as unscopables check will look up prototype chain as well,
  // such as hasOwnProperty, toString, valueOf, etc.
  // so we should use Object.create(null) to create a pure object without prototype chain here.
  Object.create(null));
}
var cachedGlobalsInBrowser = array2TruthyObject(_globals__WEBPACK_IMPORTED_MODULE_5__.globalsInBrowser.concat( false ? 0 : []));
function isNativeGlobalProp(prop) {
  return prop in cachedGlobalsInBrowser;
}
// zone.js will overwrite Object.defineProperty
var rawObjectDefineProperty = Object.defineProperty;
var variableWhiteListInDev =  true ? [
// for react hot reload
// see https://github.com/facebook/create-react-app/blob/66bf7dfc43350249e2f09d138a20840dae8a0a4a/packages/react-error-overlay/src/index.js#L180
'__REACT_ERROR_OVERLAY_GLOBAL_HOOK__',
// for react development event issue, see https://github.com/umijs/qiankun/issues/2375
'event'] : 0;
// who could escape the sandbox
var globalVariableWhiteList = [
// FIXME System.js used a indirect call with eval, which would make it scope escape to global
// To make System.js works well, we write it back to global window temporary
// see https://github.com/systemjs/systemjs/blob/457f5b7e8af6bd120a279540477552a07d5de086/src/evaluate.js#L106
'System',
// see https://github.com/systemjs/systemjs/blob/457f5b7e8af6bd120a279540477552a07d5de086/src/instantiate.js#L357
'__cjsWrapper'].concat(variableWhiteListInDev);
var inTest = "development" === 'test';
var mockSafariTop = 'mockSafariTop';
var mockTop = 'mockTop';
var mockGlobalThis = 'mockGlobalThis';
// these globals should be recorded while accessing every time
var accessingSpiedGlobals = ['document', 'top', 'parent', 'eval'];
var overwrittenGlobals = ['window', 'self', 'globalThis', 'hasOwnProperty'].concat(inTest ? [mockGlobalThis] : []);
var cachedGlobals = Array.from(new Set(lodash_without__WEBPACK_IMPORTED_MODULE_4___default().apply(void 0, [_globals__WEBPACK_IMPORTED_MODULE_5__.globalsInES2015.concat(overwrittenGlobals).concat('requestAnimationFrame')].concat(accessingSpiedGlobals))));
var cachedGlobalObjects = array2TruthyObject(cachedGlobals);
/*
 Variables who are impossible to be overwritten need to be escaped from proxy sandbox for performance reasons.
 But overwritten globals must not be escaped, otherwise they will be leaked to the global scope.
 see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
 */
var unscopables = array2TruthyObject(lodash_without__WEBPACK_IMPORTED_MODULE_4___default().apply(void 0, [cachedGlobals].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(accessingSpiedGlobals.concat(overwrittenGlobals)))));
var useNativeWindowForBindingsProps = new Map([['fetch', true], ['mockDomAPIInBlackList', "development" === 'test']]);
function createFakeWindow(globalContext, speedy) {
  // map always has the fastest performance in has checked scenario
  // see https://jsperf.com/array-indexof-vs-set-has/23
  var propertiesWithGetter = new Map();
  var fakeWindow = {};
  /*
   copy the non-configurable property of global to fakeWindow
   see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor
   > A property cannot be reported as non-configurable, if it does not exist as an own property of the target object or if it exists as a configurable own property of the target object.
   */
  Object.getOwnPropertyNames(globalContext).filter(function (p) {
    var descriptor = Object.getOwnPropertyDescriptor(globalContext, p);
    return !(descriptor === null || descriptor === void 0 ? void 0 : descriptor.configurable);
  }).forEach(function (p) {
    var descriptor = Object.getOwnPropertyDescriptor(globalContext, p);
    if (descriptor) {
      var hasGetter = Object.prototype.hasOwnProperty.call(descriptor, 'get');
      /*
       make top/self/window property configurable and writable, otherwise it will cause TypeError while get trap return.
       see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get
       > The value reported for a property must be the same as the value of the corresponding target object property if the target object property is a non-writable, non-configurable data property.
       */
      if (p === 'top' || p === 'parent' || p === 'self' || p === 'window' ||
      // window.document is overwriting in speedy mode
      p === 'document' && speedy || inTest && (p === mockTop || p === mockSafariTop)) {
        descriptor.configurable = true;
        /*
         The descriptor of window.window/window.top/window.self in Safari/FF are accessor descriptors, we need to avoid adding a data descriptor while it was
         Example:
          Safari/FF: Object.getOwnPropertyDescriptor(window, 'top') -> {get: function, set: undefined, enumerable: true, configurable: false}
          Chrome: Object.getOwnPropertyDescriptor(window, 'top') -> {value: Window, writable: false, enumerable: true, configurable: false}
         */
        if (!hasGetter) {
          descriptor.writable = true;
        }
      }
      if (hasGetter) propertiesWithGetter.set(p, true);
      // freeze the descriptor to avoid being modified by zone.js
      // see https://github.com/angular/zone.js/blob/a5fe09b0fac27ac5df1fa746042f96f05ccb6a00/lib/browser/define-property.ts#L71
      rawObjectDefineProperty(fakeWindow, p, Object.freeze(descriptor));
    }
  });
  return {
    fakeWindow: fakeWindow,
    propertiesWithGetter: propertiesWithGetter
  };
}
var activeSandboxCount = 0;
/**
 * 基于 Proxy 实现的沙箱
 */
var ProxySandbox = /*#__PURE__*/function () {
  function ProxySandbox(name) {
    var _this = this;
    var globalContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
    var opts = arguments.length > 2 ? arguments[2] : undefined;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProxySandbox);
    /** window 值变更记录 */
    this.updatedValueSet = new Set();
    this.document = document;
    this.name = void 0;
    this.type = void 0;
    this.proxy = void 0;
    this.sandboxRunning = true;
    this.latestSetProp = null;
    // the descriptor of global variables in whitelist before it been modified
    this.globalWhitelistPrevDescriptor = {};
    this.globalContext = void 0;
    this.name = name;
    this.globalContext = globalContext;
    this.type = _interfaces__WEBPACK_IMPORTED_MODULE_6__.SandBoxType.Proxy;
    var updatedValueSet = this.updatedValueSet;
    var _ref = opts || {},
      speedy = _ref.speedy;
    var _createFakeWindow = createFakeWindow(globalContext, !!speedy),
      fakeWindow = _createFakeWindow.fakeWindow,
      propertiesWithGetter = _createFakeWindow.propertiesWithGetter;
    var descriptorTargetMap = new Map();
    var proxy = new Proxy(fakeWindow, {
      set: function set(target, p, value) {
        if (_this.sandboxRunning) {
          _this.registerRunningApp(name, proxy);
          // sync the property to globalContext
          if (typeof p === 'string' && globalVariableWhiteList.indexOf(p) !== -1) {
            _this.globalWhitelistPrevDescriptor[p] = Object.getOwnPropertyDescriptor(globalContext, p);
            // @ts-ignore
            globalContext[p] = value;
          } else {
            // We must keep its description while the property existed in globalContext before
            if (!target.hasOwnProperty(p) && globalContext.hasOwnProperty(p)) {
              var descriptor = Object.getOwnPropertyDescriptor(globalContext, p);
              var writable = descriptor.writable,
                configurable = descriptor.configurable,
                enumerable = descriptor.enumerable,
                set = descriptor.set;
              // only writable property can be overwritten
              // here we ignored accessor descriptor of globalContext as it makes no sense to trigger its logic(which might make sandbox escaping instead)
              // we force to set value by data descriptor
              if (writable || set) {
                Object.defineProperty(target, p, {
                  configurable: configurable,
                  enumerable: enumerable,
                  writable: true,
                  value: value
                });
              }
            } else {
              target[p] = value;
            }
          }
          updatedValueSet.add(p);
          _this.latestSetProp = p;
          return true;
        }
        if (true) {
          console.warn("[qiankun] Set window.".concat(p.toString(), " while sandbox destroyed or inactive in ").concat(name, "!"));
        }
        // 在 strict-mode 下，Proxy 的 handler.set 返回 false 会抛出 TypeError，在沙箱卸载的情况下应该忽略错误
        return true;
      },
      get: function get(target, p) {
        _this.registerRunningApp(name, proxy);
        if (p === Symbol.unscopables) return unscopables;
        // avoid who using window.window or window.self to escape the sandbox environment to touch the real window
        // see https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js#L13
        if (p === 'window' || p === 'self') {
          return proxy;
        }
        // hijack globalWindow accessing with globalThis keyword
        if (p === 'globalThis' || inTest && p === mockGlobalThis) {
          return proxy;
        }
        if (p === 'top' || p === 'parent' || inTest && (p === mockTop || p === mockSafariTop)) {
          // if your master app in an iframe context, allow these props escape the sandbox
          if (globalContext === globalContext.parent) {
            return proxy;
          }
          return globalContext[p];
        }
        // proxy.hasOwnProperty would invoke getter firstly, then its value represented as globalContext.hasOwnProperty
        if (p === 'hasOwnProperty') {
          return hasOwnProperty;
        }
        if (p === 'document') {
          return _this.document;
        }
        if (p === 'eval') {
          return eval;
        }
        if (p === 'string' && globalVariableWhiteList.indexOf(p) !== -1) {
          // @ts-ignore
          return globalContext[p];
        }
        var actualTarget = propertiesWithGetter.has(p) ? globalContext : p in target ? target : globalContext;
        var value = actualTarget[p];
        // frozen value should return directly, see https://github.com/umijs/qiankun/issues/2015
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isPropertyFrozen)(actualTarget, p)) {
          return value;
        }
        // non-native property return directly to avoid rebind
        if (!isNativeGlobalProp(p) && !useNativeWindowForBindingsProps.has(p)) {
          return value;
        }
        /* Some dom api must be bound to native window, otherwise it would cause exception like 'TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation'
           See this code:
             const proxy = new Proxy(window, {});
             // in nest sandbox fetch will be bind to proxy rather than window in master
             const proxyFetch = fetch.bind(proxy);
             proxyFetch('https://qiankun.com');
        */
        var boundTarget = useNativeWindowForBindingsProps.get(p) ? _utils__WEBPACK_IMPORTED_MODULE_7__.nativeGlobal : globalContext;
        return (0,_common__WEBPACK_IMPORTED_MODULE_8__.rebindTarget2Fn)(boundTarget, value);
      },
      // trap in operator
      // see https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/constants.js#L12
      has: function has(target, p) {
        // property in cachedGlobalObjects must return true to avoid escape from get trap
        return p in cachedGlobalObjects || p in target || p in globalContext;
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, p) {
        /*
         as the descriptor of top/self/window/mockTop in raw window are configurable but not in proxy target, we need to get it from target to avoid TypeError
         see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor
         > A property cannot be reported as non-configurable, if it does not exist as an own property of the target object or if it exists as a configurable own property of the target object.
         */
        if (target.hasOwnProperty(p)) {
          var descriptor = Object.getOwnPropertyDescriptor(target, p);
          descriptorTargetMap.set(p, 'target');
          return descriptor;
        }
        if (globalContext.hasOwnProperty(p)) {
          var _descriptor = Object.getOwnPropertyDescriptor(globalContext, p);
          descriptorTargetMap.set(p, 'globalContext');
          // A property cannot be reported as non-configurable, if it does not exist as an own property of the target object
          if (_descriptor && !_descriptor.configurable) {
            _descriptor.configurable = true;
          }
          return _descriptor;
        }
        return undefined;
      },
      // trap to support iterator with sandbox
      ownKeys: function ownKeys(target) {
        return uniq(Reflect.ownKeys(globalContext).concat(Reflect.ownKeys(target)));
      },
      defineProperty: function defineProperty(target, p, attributes) {
        var from = descriptorTargetMap.get(p);
        /*
         Descriptor must be defined to native window while it comes from native window via Object.getOwnPropertyDescriptor(window, p),
         otherwise it would cause a TypeError with illegal invocation.
         */
        switch (from) {
          case 'globalContext':
            return Reflect.defineProperty(globalContext, p, attributes);
          default:
            return Reflect.defineProperty(target, p, attributes);
        }
      },
      deleteProperty: function deleteProperty(target, p) {
        _this.registerRunningApp(name, proxy);
        if (target.hasOwnProperty(p)) {
          // @ts-ignore
          delete target[p];
          updatedValueSet.delete(p);
          return true;
        }
        return true;
      },
      // makes sure `window instanceof Window` returns truthy in micro app
      getPrototypeOf: function getPrototypeOf() {
        return Reflect.getPrototypeOf(globalContext);
      }
    });
    this.proxy = proxy;
    activeSandboxCount++;
    function hasOwnProperty(key) {
      // calling from hasOwnProperty.call(obj, key)
      if (this !== proxy && this !== null && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(this) === 'object') {
        return Object.prototype.hasOwnProperty.call(this, key);
      }
      return fakeWindow.hasOwnProperty(key) || globalContext.hasOwnProperty(key);
    }
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProxySandbox, [{
    key: "active",
    value: function active() {
      if (!this.sandboxRunning) activeSandboxCount++;
      this.sandboxRunning = true;
    }
  }, {
    key: "inactive",
    value: function inactive() {
      var _this2 = this;
      if (true) {
        console.info("[qiankun:sandbox] ".concat(this.name, " modified global properties restore..."), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this.updatedValueSet.keys()));
      }
      if (inTest || --activeSandboxCount === 0) {
        // reset the global value to the prev value
        Object.keys(this.globalWhitelistPrevDescriptor).forEach(function (p) {
          var descriptor = _this2.globalWhitelistPrevDescriptor[p];
          if (descriptor) {
            Object.defineProperty(_this2.globalContext, p, descriptor);
          } else {
            // @ts-ignore
            delete _this2.globalContext[p];
          }
        });
      }
      this.sandboxRunning = false;
    }
  }, {
    key: "patchDocument",
    value: function patchDocument(doc) {
      this.document = doc;
    }
  }, {
    key: "registerRunningApp",
    value: function registerRunningApp(name, proxy) {
      if (this.sandboxRunning) {
        var currentRunningApp = (0,_common__WEBPACK_IMPORTED_MODULE_8__.getCurrentRunningApp)();
        if (!currentRunningApp || currentRunningApp.name !== name) {
          (0,_common__WEBPACK_IMPORTED_MODULE_8__.setCurrentRunningApp)({
            name: name,
            window: proxy
          });
        }
        // FIXME if you have any other good ideas
        // remove the mark in next tick, thus we can identify whether it in micro app or not
        // this approach is just a workaround, it could not cover all complex cases, such as the micro app runs in the same task context with master in some case
        (0,_utils__WEBPACK_IMPORTED_MODULE_7__.nextTask)(_common__WEBPACK_IMPORTED_MODULE_8__.clearCurrentRunningApp);
      }
    }
  }]);
  return ProxySandbox;
}();


/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/snapshotSandbox.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/sandbox/snapshotSandbox.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SnapshotSandbox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./node_modules/_qiankun@2.10.16@qiankun/es/interfaces.js");



function iter(obj, callbackFn) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var prop in obj) {
    // patch for clearInterval for compatible reason, see #1490
    if (obj.hasOwnProperty(prop) || prop === 'clearInterval') {
      callbackFn(prop);
    }
  }
}
/**
 * 基于 diff 方式实现的沙箱，用于不支持 Proxy 的低版本浏览器
 */
var SnapshotSandbox = /*#__PURE__*/function () {
  function SnapshotSandbox(name) {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SnapshotSandbox);
    this.proxy = void 0;
    this.name = void 0;
    this.type = void 0;
    this.sandboxRunning = true;
    this.windowSnapshot = void 0;
    this.modifyPropsMap = {};
    this.name = name;
    this.proxy = window;
    this.type = _interfaces__WEBPACK_IMPORTED_MODULE_2__.SandBoxType.Snapshot;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SnapshotSandbox, [{
    key: "active",
    value: function active() {
      var _this = this;
      // 记录当前快照
      this.windowSnapshot = {};
      iter(window, function (prop) {
        _this.windowSnapshot[prop] = window[prop];
      });
      // 恢复之前的变更
      Object.keys(this.modifyPropsMap).forEach(function (p) {
        window[p] = _this.modifyPropsMap[p];
      });
      this.sandboxRunning = true;
    }
  }, {
    key: "inactive",
    value: function inactive() {
      var _this2 = this;
      this.modifyPropsMap = {};
      iter(window, function (prop) {
        if (window[prop] !== _this2.windowSnapshot[prop]) {
          // 记录变更，恢复环境
          _this2.modifyPropsMap[prop] = window[prop];
          window[prop] = _this2.windowSnapshot[prop];
        }
      });
      if (true) {
        console.info("[qiankun:sandbox] ".concat(this.name, " origin window restore..."), Object.keys(this.modifyPropsMap));
      }
      this.sandboxRunning = false;
    }
  }, {
    key: "patchDocument",
    value: function patchDocument() {}
  }]);
  return SnapshotSandbox;
}();


/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/utils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred),
/* harmony export */   genAppInstanceIdByName: () => (/* binding */ genAppInstanceIdByName),
/* harmony export */   getContainer: () => (/* binding */ getContainer),
/* harmony export */   getContainerXPath: () => (/* binding */ getContainerXPath),
/* harmony export */   getDefaultTplWrapper: () => (/* binding */ getDefaultTplWrapper),
/* harmony export */   getWrapperId: () => (/* binding */ getWrapperId),
/* harmony export */   getXPathForElement: () => (/* binding */ getXPathForElement),
/* harmony export */   isBoundedFunction: () => (/* binding */ isBoundedFunction),
/* harmony export */   isCallable: () => (/* binding */ isCallable),
/* harmony export */   isConstDestructAssignmentSupported: () => (/* binding */ isConstDestructAssignmentSupported),
/* harmony export */   isConstructable: () => (/* binding */ isConstructable),
/* harmony export */   isEnableScopedCSS: () => (/* binding */ isEnableScopedCSS),
/* harmony export */   isPropertyFrozen: () => (/* binding */ isPropertyFrozen),
/* harmony export */   nativeDocument: () => (/* binding */ nativeDocument),
/* harmony export */   nativeGlobal: () => (/* binding */ nativeGlobal),
/* harmony export */   nextTask: () => (/* binding */ nextTask),
/* harmony export */   performanceGetEntriesByName: () => (/* binding */ performanceGetEntriesByName),
/* harmony export */   performanceMark: () => (/* binding */ performanceMark),
/* harmony export */   performanceMeasure: () => (/* binding */ performanceMeasure),
/* harmony export */   qiankunHeadTagName: () => (/* binding */ qiankunHeadTagName),
/* harmony export */   sleep: () => (/* binding */ sleep),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   validateExportLifecycle: () => (/* binding */ validateExportLifecycle)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.21@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/once */ "./node_modules/_lodash@4.17.21@lodash/once.js");
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_snakeCase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/snakeCase */ "./node_modules/_lodash@4.17.21@lodash/snakeCase.js");
/* harmony import */ var lodash_snakeCase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_snakeCase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/memoize */ "./node_modules/_lodash@4.17.21@lodash/memoize.js");
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./version */ "./node_modules/_qiankun@2.10.16@qiankun/es/version.js");







/**
 * @author Kuitos
 * @since 2019-05-15
 */

function toArray(array) {
  return Array.isArray(array) ? array : [array];
}
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
// Promise.then might be synchronized in Zone.js context, we need to use setTimeout instead to mock next tick.
// Since zone.js will hijack the setTimeout callback, and notify angular to do change detection, so we need to use the  __zone_symbol__setTimeout to avoid this, see https://github.com/umijs/qiankun/issues/2384
var nextTick = typeof window.__zone_symbol__setTimeout === 'function' ? window.__zone_symbol__setTimeout : function (cb) {
  return Promise.resolve().then(cb);
};
var globalTaskPending = false;
/**
 * Run a callback before next task executing, and the invocation is idempotent in every singular task
 * That means even we called nextTask multi times in one task, only the first callback will be pushed to nextTick to be invoked.
 * @param cb
 */
function nextTask(cb) {
  if (!globalTaskPending) {
    globalTaskPending = true;
    nextTick(function () {
      cb();
      globalTaskPending = false;
    });
  }
}
var fnRegexCheckCacheMap = new WeakMap();
function isConstructable(fn) {
  // prototype methods might be changed while code running, so we need check it every time
  var hasPrototypeMethods = fn.prototype && fn.prototype.constructor === fn && Object.getOwnPropertyNames(fn.prototype).length > 1;
  if (hasPrototypeMethods) return true;
  if (fnRegexCheckCacheMap.has(fn)) {
    return fnRegexCheckCacheMap.get(fn);
  }
  /*
    1. 有 prototype 并且 prototype 上有定义一系列非 constructor 属性
    2. 函数名大写开头
    3. class 函数
    满足其一则可认定为构造函数
   */
  var constructable = hasPrototypeMethods;
  if (!constructable) {
    // fn.toString has a significant performance overhead, if hasPrototypeMethods check not passed, we will check the function string with regex
    var fnString = fn.toString();
    var constructableFunctionRegex = /^function\b\s[A-Z].*/;
    var classRegex = /^class\b/;
    constructable = constructableFunctionRegex.test(fnString) || classRegex.test(fnString);
  }
  fnRegexCheckCacheMap.set(fn, constructable);
  return constructable;
}
var callableFnCacheMap = new WeakMap();
function isCallable(fn) {
  if (callableFnCacheMap.has(fn)) {
    return true;
  }
  /**
   * We can not use typeof to confirm it is function as in some safari version
   * typeof document.all === 'undefined' // true
   * typeof document.all === 'function' // true
   */
  var callable = typeof fn === 'function' && fn instanceof Function;
  if (callable) {
    callableFnCacheMap.set(fn, callable);
  }
  return callable;
}
var frozenPropertyCacheMap = new WeakMap();
function isPropertyFrozen(target, p) {
  if (!target || !p) {
    return false;
  }
  var targetPropertiesFromCache = frozenPropertyCacheMap.get(target) || {};
  if (targetPropertiesFromCache[p]) {
    return targetPropertiesFromCache[p];
  }
  var propertyDescriptor = Object.getOwnPropertyDescriptor(target, p);
  var frozen = Boolean(propertyDescriptor && propertyDescriptor.configurable === false && (propertyDescriptor.writable === false || propertyDescriptor.get && !propertyDescriptor.set));
  targetPropertiesFromCache[p] = frozen;
  frozenPropertyCacheMap.set(target, targetPropertiesFromCache);
  return frozen;
}
var boundedMap = new WeakMap();
function isBoundedFunction(fn) {
  if (boundedMap.has(fn)) {
    return boundedMap.get(fn);
  }
  /*
   indexOf is faster than startsWith
   see https://jsperf.com/string-startswith/72
   */
  var bounded = fn.name.indexOf('bound ') === 0 && !fn.hasOwnProperty('prototype');
  boundedMap.set(fn, bounded);
  return bounded;
}
var isConstDestructAssignmentSupported = lodash_memoize__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  try {
    new Function('const { a } = { a: 1 }')();
    return true;
  } catch (e) {
    return false;
  }
});
var qiankunHeadTagName = 'qiankun-head';
function getDefaultTplWrapper(name, sandboxOpts) {
  return function (tpl) {
    var tplWithSimulatedHead;
    if (tpl.indexOf('<head>') !== -1) {
      // We need to mock a head placeholder as native head element will be erased by browser in micro app
      tplWithSimulatedHead = tpl.replace('<head>', "<".concat(qiankunHeadTagName, ">")).replace('</head>', "</".concat(qiankunHeadTagName, ">"));
    } else {
      // Some template might not be a standard html document, thus we need to add a simulated head tag for them
      tplWithSimulatedHead = "<".concat(qiankunHeadTagName, "></").concat(qiankunHeadTagName, ">").concat(tpl);
    }
    return "<div id=\"".concat(getWrapperId(name), "\" data-name=\"").concat(name, "\" data-version=\"").concat(_version__WEBPACK_IMPORTED_MODULE_7__.version, "\" data-sandbox-cfg=").concat(JSON.stringify(sandboxOpts), ">").concat(tplWithSimulatedHead, "</div>");
  };
}
function getWrapperId(name) {
  return "__qiankun_microapp_wrapper_for_".concat(lodash_snakeCase__WEBPACK_IMPORTED_MODULE_5___default()(name), "__");
}
var nativeGlobal = new Function('return this')();
var nativeDocument = new Function('return document')();
var getGlobalAppInstanceMap = lodash_once__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  if (!nativeGlobal.hasOwnProperty('__app_instance_name_map__')) {
    Object.defineProperty(nativeGlobal, '__app_instance_name_map__', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  return nativeGlobal.__app_instance_name_map__;
});
/**
 * Get app instance name with the auto-increment approach
 * @param appName
 */
var genAppInstanceIdByName = function genAppInstanceIdByName(appName) {
  var globalAppInstanceMap = getGlobalAppInstanceMap();
  if (!(appName in globalAppInstanceMap)) {
    nativeGlobal.__app_instance_name_map__[appName] = 0;
    return appName;
  }
  globalAppInstanceMap[appName]++;
  return "".concat(appName, "_").concat(globalAppInstanceMap[appName]);
};
/** 校验子应用导出的 生命周期 对象是否正确 */
function validateExportLifecycle(exports) {
  var _ref = exports !== null && exports !== void 0 ? exports : {},
    bootstrap = _ref.bootstrap,
    mount = _ref.mount,
    unmount = _ref.unmount;
  return lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default()(bootstrap) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default()(mount) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default()(unmount);
}
var Deferred = /*#__PURE__*/(0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function Deferred() {
  var _this = this;
  (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Deferred);
  this.promise = void 0;
  this.resolve = void 0;
  this.reject = void 0;
  this.promise = new Promise(function (resolve, reject) {
    _this.resolve = resolve;
    _this.reject = reject;
  });
});
var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function' && typeof performance.getEntriesByName === 'function';
function performanceGetEntriesByName(markName, type) {
  var marks = null;
  if (supportsUserTiming) {
    marks = performance.getEntriesByName(markName, type);
  }
  return marks;
}
function performanceMark(markName) {
  if (supportsUserTiming) {
    performance.mark(markName);
  }
}
function performanceMeasure(measureName, markName) {
  if (supportsUserTiming && performance.getEntriesByName(markName, 'mark').length) {
    performance.measure(measureName, markName);
    performance.clearMarks(markName);
    performance.clearMeasures(measureName);
  }
}
function isEnableScopedCSS(sandbox) {
  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(sandbox) !== 'object') {
    return false;
  }
  if (sandbox.strictStyleIsolation) {
    return false;
  }
  return !!sandbox.experimentalStyleIsolation;
}
/**
 * copy from https://developer.mozilla.org/zh-CN/docs/Using_XPath
 * @param el
 * @param document
 */
function getXPathForElement(el, document) {
  // not support that if el not existed in document yet(such as it not append to document before it mounted)
  if (!document.body.contains(el)) {
    return undefined;
  }
  var xpath = '';
  var pos;
  var tmpEle;
  var element = el;
  while (element !== document.documentElement) {
    pos = 0;
    tmpEle = element;
    while (tmpEle) {
      if (tmpEle.nodeType === 1 && tmpEle.nodeName === element.nodeName) {
        // If it is ELEMENT_NODE of the same name
        pos += 1;
      }
      tmpEle = tmpEle.previousSibling;
    }
    xpath = "*[name()='".concat(element.nodeName, "'][").concat(pos, "]/").concat(xpath);
    element = element.parentNode;
  }
  xpath = "/*[name()='".concat(document.documentElement.nodeName, "']/").concat(xpath);
  xpath = xpath.replace(/\/$/, '');
  return xpath;
}
function getContainer(container) {
  return typeof container === 'string' ? document.querySelector(container) : container;
}
function getContainerXPath(container) {
  if (container) {
    var containerElement = getContainer(container);
    if (containerElement) {
      return getXPathForElement(containerElement, document);
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/_qiankun@2.10.16@qiankun/es/version.js":
/*!*************************************************************!*\
  !*** ./node_modules/_qiankun@2.10.16@qiankun/es/version.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
var version = '2.10.16';

/***/ }),

/***/ "./node_modules/_single-spa@5.9.5@single-spa/lib/esm/single-spa.min.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_single-spa@5.9.5@single-spa/lib/esm/single-spa.min.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOOTSTRAPPING: () => (/* binding */ m),
/* harmony export */   LOADING_SOURCE_CODE: () => (/* binding */ p),
/* harmony export */   LOAD_ERROR: () => (/* binding */ P),
/* harmony export */   MOUNTED: () => (/* binding */ w),
/* harmony export */   MOUNTING: () => (/* binding */ d),
/* harmony export */   NOT_BOOTSTRAPPED: () => (/* binding */ h),
/* harmony export */   NOT_LOADED: () => (/* binding */ l),
/* harmony export */   NOT_MOUNTED: () => (/* binding */ v),
/* harmony export */   SKIP_BECAUSE_BROKEN: () => (/* binding */ O),
/* harmony export */   UNLOADING: () => (/* binding */ y),
/* harmony export */   UNMOUNTING: () => (/* binding */ E),
/* harmony export */   UPDATING: () => (/* binding */ g),
/* harmony export */   addErrorHandler: () => (/* binding */ a),
/* harmony export */   checkActivityFunctions: () => (/* binding */ Tt),
/* harmony export */   ensureJQuerySupport: () => (/* binding */ lt),
/* harmony export */   getAppNames: () => (/* binding */ Pt),
/* harmony export */   getAppStatus: () => (/* binding */ Ot),
/* harmony export */   getMountedApps: () => (/* binding */ yt),
/* harmony export */   mountRootParcel: () => (/* binding */ W),
/* harmony export */   navigateToUrl: () => (/* binding */ et),
/* harmony export */   pathToActiveWhen: () => (/* binding */ Dt),
/* harmony export */   registerApplication: () => (/* binding */ bt),
/* harmony export */   removeErrorHandler: () => (/* binding */ c),
/* harmony export */   setBootstrapMaxTime: () => (/* binding */ J),
/* harmony export */   setMountMaxTime: () => (/* binding */ H),
/* harmony export */   setUnloadMaxTime: () => (/* binding */ V),
/* harmony export */   setUnmountMaxTime: () => (/* binding */ Q),
/* harmony export */   start: () => (/* binding */ Bt),
/* harmony export */   triggerAppChange: () => (/* binding */ Lt),
/* harmony export */   unloadApplication: () => (/* binding */ Nt),
/* harmony export */   unregisterApplication: () => (/* binding */ At)
/* harmony export */ });
/* single-spa@5.9.5 - ESM - prod */
var t=Object.freeze({__proto__:null,get start(){return Bt},get ensureJQuerySupport(){return lt},get setBootstrapMaxTime(){return J},get setMountMaxTime(){return H},get setUnmountMaxTime(){return Q},get setUnloadMaxTime(){return V},get registerApplication(){return bt},get unregisterApplication(){return At},get getMountedApps(){return yt},get getAppStatus(){return Ot},get unloadApplication(){return Nt},get checkActivityFunctions(){return Tt},get getAppNames(){return Pt},get pathToActiveWhen(){return Dt},get navigateToUrl(){return et},get triggerAppChange(){return Lt},get addErrorHandler(){return a},get removeErrorHandler(){return c},get mountRootParcel(){return W},get NOT_LOADED(){return l},get LOADING_SOURCE_CODE(){return p},get NOT_BOOTSTRAPPED(){return h},get BOOTSTRAPPING(){return m},get NOT_MOUNTED(){return v},get MOUNTING(){return d},get UPDATING(){return g},get LOAD_ERROR(){return P},get MOUNTED(){return w},get UNLOADING(){return y},get UNMOUNTING(){return E},get SKIP_BECAUSE_BROKEN(){return O}});function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{}).CustomEvent,o=function(){try{var t=new r("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?r:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e},i=[];function u(t,n,e){var r=f(t,n,e);i.length?i.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function a(t){if("function"!=typeof t)throw Error(s(28,!1));i.push(t)}function c(t){if("function"!=typeof t)throw Error(s(29,!1));var n=!1;return i=i.filter((function(e){var r=e===t;return n=n||r,!r})),n}function s(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(n?n+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function f(t,n,e){var r,o="".concat(S(n)," '").concat(A(n),"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(s(30,!1,n.status,A(n)));try{r=Error(o+JSON.stringify(t))}catch(n){r=t}}return r.appOrParcelName=A(n),n.status=e,r}var l="NOT_LOADED",p="LOADING_SOURCE_CODE",h="NOT_BOOTSTRAPPED",m="BOOTSTRAPPING",v="NOT_MOUNTED",d="MOUNTING",w="MOUNTED",g="UPDATING",E="UNMOUNTING",y="UNLOADING",P="LOAD_ERROR",O="SKIP_BECAUSE_BROKEN";function b(t){return t.status===w}function T(t){try{return t.activeWhen(window.location)}catch(n){return u(n,t,O),!1}}function A(t){return t.name}function N(t){return Boolean(t.unmountThisParcel)}function S(t){return N(t)?"parcel":"application"}function _(){for(var t=arguments.length-1;t>0;t--)for(var n in arguments[t])"__proto__"!==n&&(arguments[t-1][n]=arguments[t][n]);return arguments[0]}function D(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function U(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!D(n,(function(t){return"function"!=typeof t}))));var n}function j(t,n){var e=t[n]||[];0===(e=Array.isArray(e)?e:[e]).length&&(e=[function(){return Promise.resolve()}]);var r=S(t),o=A(t);return function(t){return e.reduce((function(e,i,u){return e.then((function(){var e=i(t);return M(e)?e:Promise.reject(s(15,!1,r,o,n,u))}))}),Promise.resolve())}}function M(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function L(t,n){return Promise.resolve().then((function(){return t.status!==h?t:(t.status=m,t.bootstrap?q(t,"bootstrap").then(e).catch((function(e){if(n)throw f(e,t,O);return u(e,t,O),t})):Promise.resolve().then(e))}));function e(){return t.status=v,t}}function R(t,n){return Promise.resolve().then((function(){if(t.status!==w)return t;t.status=E;var e=Object.keys(t.parcels).map((function(n){return t.parcels[n].unmountThisParcel()}));return Promise.all(e).then(r,(function(e){return r().then((function(){var r=Error(e.message);if(n)throw f(r,t,O);u(r,t,O)}))})).then((function(){return t}));function r(){return q(t,"unmount").then((function(){t.status=v})).catch((function(e){if(n)throw f(e,t,O);u(e,t,O)}))}}))}var I=!1,x=!1;function B(t,n){return Promise.resolve().then((function(){return t.status!==v?t:(I||(window.dispatchEvent(new o("single-spa:before-first-mount")),I=!0),q(t,"mount").then((function(){return t.status=w,x||(window.dispatchEvent(new o("single-spa:first-mount")),x=!0),t})).catch((function(e){return t.status=w,R(t,!0).then(r,r);function r(){if(n)throw f(e,t,O);return u(e,t,O),t}})))}))}var G=0,C={parcels:{}};function W(){return $.apply(C,arguments)}function $(t,e){var r=this;if(!t||"object"!==n(t)&&"function"!=typeof t)throw Error(s(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(s(3,!1,n(t.name)));if("object"!==n(e))throw Error(s(4,!1,name,n(e)));if(!e.domElement)throw Error(s(5,!1,name));var o,i=G++,u="function"==typeof t,a=u?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:u?p:h,customProps:e,parentName:A(r),unmountThisParcel:function(){return y.then((function(){if(c.status!==w)throw Error(s(6,!1,name,c.status));return R(c,!0)})).then((function(t){return c.parentName&&delete r.parcels[c.id],t})).then((function(t){return m(t),t})).catch((function(t){throw c.status=O,d(t),t}))}};r.parcels[i]=c;var l=a();if(!l||"function"!=typeof l.then)throw Error(s(7,!1));var m,d,E=(l=l.then((function(t){if(!t)throw Error(s(8,!1));var n=t.name||"parcel-".concat(i);if(Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!U(t.bootstrap))throw Error(s(9,!1,n));if(!U(t.mount))throw Error(s(10,!1,n));if(!U(t.unmount))throw Error(s(11,!1,n));if(t.update&&!U(t.update))throw Error(s(12,!1,n));var e=j(t,"bootstrap"),r=j(t,"mount"),u=j(t,"unmount");c.status=h,c.name=n,c.bootstrap=e,c.mount=r,c.unmount=u,c.timeouts=z(t.timeouts),t.update&&(c.update=j(t,"update"),o.update=function(t){return c.customProps=t,k(function(t){return Promise.resolve().then((function(){if(t.status!==w)throw Error(s(32,!1,A(t)));return t.status=g,q(t,"update").then((function(){return t.status=w,t})).catch((function(n){throw f(n,t,O)}))}))}(c))})}))).then((function(){return L(c,!0)})),y=E.then((function(){return B(c,!0)})),P=new Promise((function(t,n){m=t,d=n}));return o={mount:function(){return k(Promise.resolve().then((function(){if(c.status!==v)throw Error(s(13,!1,name,c.status));return r.parcels[i]=c,B(c)})))},unmount:function(){return k(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:k(l),bootstrapPromise:k(E),mountPromise:k(y),unmountPromise:k(P)}}function k(t){return t.then((function(){return null}))}function K(e){var r=A(e),o="function"==typeof e.customProps?e.customProps(r,window.location):e.customProps;("object"!==n(o)||null===o||Array.isArray(o))&&(o={},console.warn(s(40,!1),r,o));var i=_({},o,{name:r,mountParcel:$.bind(e),singleSpa:t});return N(e)&&(i.unmountSelf=e.unmountThisParcel),i}var F={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function J(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(16,!1));F.bootstrap={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function H(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(17,!1));F.mount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function Q(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(18,!1));F.unmount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function V(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(19,!1));F.unload={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function q(t,n){var e=t.timeouts[n],r=e.warningMillis,o=S(t);return new Promise((function(i,u){var a=!1,c=!1;t[n](K(t)).then((function(t){a=!0,i(t)})).catch((function(t){a=!0,u(t)})),setTimeout((function(){return l(1)}),r),setTimeout((function(){return l(!0)}),e.millis);var f=s(31,!1,n,o,A(t),e.millis);function l(t){if(!a)if(!0===t)c=!0,e.dieOnTimeout?u(Error(f)):console.error(f);else if(!c){var n=t,o=n*r;console.warn(f),o+r<e.millis&&setTimeout((function(){return l(n+1)}),r)}}}))}function z(t){var n={};for(var e in F)n[e]=_({},F[e],t&&t[e]||{});return n}function X(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==l&&t.status!==P?t:(t.status=p,t.loadPromise=Promise.resolve().then((function(){var o=t.loadApp(K(t));if(!M(o))throw r=!0,Error(s(33,!1,A(t)));return o.then((function(r){var o;t.loadErrorTime=null,"object"!==n(e=r)&&(o=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!U(e.bootstrap)&&(o=35),U(e.mount)||(o=36),U(e.unmount)||(o=37);var i=S(e);if(o){var a;try{a=JSON.stringify(e)}catch(t){}return console.error(s(o,!1,i,A(t),a),e),u(void 0,t,O),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=_({},t.devtools.overlays,e.devtools.overlays)),t.status=h,t.bootstrap=j(e,"bootstrap"),t.mount=j(e,"mount"),t.unmount=j(e,"unmount"),t.unload=j(e,"unload"),t.timeouts=z(e.timeouts),delete t.loadPromise,t}))})).catch((function(n){var e;return delete t.loadPromise,r?e=O:(e=P,t.loadErrorTime=(new Date).getTime()),u(n,t,e),t})));var e,r}))}var Y,Z="undefined"!=typeof window,tt={hashchange:[],popstate:[]},nt=["hashchange","popstate"];function et(t){var n;if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(s(14,!1));n=t.currentTarget.href,t.preventDefault()}var e=st(window.location.href),r=st(n);0===n.indexOf("#")?window.location.hash=r.hash:e.host!==r.host&&r.host?window.location.href=n:r.pathname===e.pathname&&r.search===e.search?window.location.hash=r.hash:window.history.pushState(null,null,n)}function rt(t){var n=this;if(t){var e=t[0].type;nt.indexOf(e)>=0&&tt[e].forEach((function(e){try{e.apply(n,t)}catch(t){setTimeout((function(){throw t}))}}))}}function ot(){Rt([],arguments)}function it(t,n){return function(){var e=window.location.href,r=t.apply(this,arguments),o=window.location.href;return Y&&e===o||(Gt()?window.dispatchEvent(ut(window.history.state,n)):Rt([])),r}}function ut(t,n){var e;try{e=new PopStateEvent("popstate",{state:t})}catch(n){(e=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return e.singleSpa=!0,e.singleSpaTrigger=n,e}if(Z){window.addEventListener("hashchange",ot),window.addEventListener("popstate",ot);var at=window.addEventListener,ct=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&nt.indexOf(t)>=0)||D(tt[t],(function(t){return t===n})))return at.apply(this,arguments);tt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&nt.indexOf(t)>=0))return ct.apply(this,arguments);tt[t]=tt[t].filter((function(t){return t!==n}))},window.history.pushState=it(window.history.pushState,"pushState"),window.history.replaceState=it(window.history.replaceState,"replaceState"),window.singleSpaNavigate?console.warn(s(41,!1)):window.singleSpaNavigate=et}function st(t){var n=document.createElement("a");return n.href=t,n}var ft=!1;function lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!ft){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return pt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return pt.call(this,e,window.removeEventListener,t,n,arguments)},ft=!0}}function pt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach((function(t){nt.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))})),""===e.trim()?this:t.apply(this,o))}var ht={};function mt(t){return Promise.resolve().then((function(){var n=ht[A(t)];if(!n)return t;if(t.status===l)return vt(t,n),t;if(t.status===y)return n.promise.then((function(){return t}));if(t.status!==v&&t.status!==P)return t;var e=t.status===P?Promise.resolve():q(t,"unload");return t.status=y,e.then((function(){return vt(t,n),t})).catch((function(e){return function(t,n,e){delete ht[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,u(e,t,O),n.reject(e)}(t,n,e),t}))}))}function vt(t,n){delete ht[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=l,n.resolve()}function dt(t,n,e,r){ht[A(t)]={app:t,resolve:e,reject:r},Object.defineProperty(ht[A(t)],"promise",{get:n})}function wt(t){return ht[t]}var gt=[];function Et(){var t=[],n=[],e=[],r=[],o=(new Date).getTime();return gt.forEach((function(i){var u=i.status!==O&&T(i);switch(i.status){case P:u&&o-i.loadErrorTime>=200&&e.push(i);break;case l:case p:u&&e.push(i);break;case h:case v:!u&&wt(A(i))?t.push(i):u&&r.push(i);break;case w:u||n.push(i)}})),{appsToUnload:t,appsToUnmount:n,appsToLoad:e,appsToMount:r}}function yt(){return gt.filter(b).map(A)}function Pt(){return gt.map(A)}function Ot(t){var n=D(gt,(function(n){return A(n)===t}));return n?n.status:null}function bt(t,e,r,o){var i=function(t,e,r,o){var i,u={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"===n(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(s(39,!1));var e=["name","app","activeWhen","customProps"],r=Object.keys(t).reduce((function(t,n){return e.indexOf(n)>=0?t:t.concat(n)}),[]);if(0!==r.length)throw Error(s(38,!1,e.join(", "),r.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(s(20,!1));if("object"!==n(t.app)&&"function"!=typeof t.app)throw Error(s(20,!1));var o=function(t){return"string"==typeof t||"function"==typeof t};if(!(o(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(o)))throw Error(s(24,!1));if(!_t(t.customProps))throw Error(s(22,!1))}(t),u.name=t.name,u.loadApp=t.app,u.activeWhen=t.activeWhen,u.customProps=t.customProps):(function(t,n,e,r){if("string"!=typeof t||0===t.length)throw Error(s(20,!1));if(!n)throw Error(s(23,!1));if("function"!=typeof e)throw Error(s(24,!1));if(!_t(r))throw Error(s(22,!1))}(t,e,r,o),u.name=t,u.loadApp=e,u.activeWhen=r,u.customProps=o),u.loadApp="function"!=typeof(i=u.loadApp)?function(){return Promise.resolve(i)}:i,u.customProps=function(t){return t||{}}(u.customProps),u.activeWhen=function(t){var n=Array.isArray(t)?t:[t];return n=n.map((function(t){return"function"==typeof t?t:Dt(t)})),function(t){return n.some((function(n){return n(t)}))}}(u.activeWhen),u}(t,e,r,o);if(-1!==Pt().indexOf(i.name))throw Error(s(21,!1,i.name));gt.push(_({loadErrorTime:null,status:l,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),Z&&(lt(),Rt())}function Tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return gt.filter((function(n){return n.activeWhen(t)})).map(A)}function At(t){if(0===gt.filter((function(n){return A(n)===t})).length)throw Error(s(25,!1,t));return Nt(t).then((function(){var n=gt.map(A).indexOf(t);gt.splice(n,1)}))}function Nt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(s(26,!1));var e=D(gt,(function(n){return A(n)===t}));if(!e)throw Error(s(27,!1,t));var r,o=wt(A(e));if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,n){dt(e,(function(){return i}),t,n)}));return i}return o?(r=o.promise,St(e,o.resolve,o.reject)):r=new Promise((function(t,n){dt(e,(function(){return r}),t,n),St(e,t,n)})),r}function St(t,n,e){R(t).then(mt).then((function(){n(),setTimeout((function(){Rt()}))})).catch(e)}function _t(t){return!t||"function"==typeof t||"object"===n(t)&&null!==t&&!Array.isArray(t)}function Dt(t,n){var e=function(t,n){var e=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(var i=0;i<t.length;i++){var u=t[i];(!r&&":"===u||r&&"/"===u)&&a(i)}return a(t.length),new RegExp(o,"i");function a(i){var u=t.slice(e,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":u,i===t.length)if(r)n&&(o+="$");else{var a=n?"":".*";o="/"===o.charAt(o.length-1)?"".concat(o).concat(a,"$"):"".concat(o,"(/").concat(a,")?(#.*)?$")}r=!r,e=i}}(t,n);return function(t){var n=t.origin;n||(n="".concat(t.protocol,"//").concat(t.host));var r=t.href.replace(n,"").replace(t.search,"").split("?")[0];return e.test(r)}}var Ut=!1,jt=[],Mt=Z&&window.location.href;function Lt(){return Rt()}function Rt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(Ut)return new Promise((function(t,e){jt.push({resolve:t,reject:e,eventArguments:n})}));var r,i=Et(),u=i.appsToUnload,a=i.appsToUnmount,c=i.appsToLoad,s=i.appsToMount,f=!1,p=Mt,h=Mt=window.location.href;return Gt()?(Ut=!0,r=u.concat(c,a,s),g()):(r=c,d());function m(){f=!0}function d(){return Promise.resolve().then((function(){var t=c.map(X);return Promise.all(t).then(y).then((function(){return[]})).catch((function(t){throw y(),t}))}))}function g(){return Promise.resolve().then((function(){if(window.dispatchEvent(new o(0===r.length?"single-spa:before-no-app-change":"single-spa:before-app-change",P(!0))),window.dispatchEvent(new o("single-spa:before-routing-event",P(!0,{cancelNavigation:m}))),f)return window.dispatchEvent(new o("single-spa:before-mount-routing-event",P(!0))),E(),void et(p);var n=u.map(mt),e=a.map(R).map((function(t){return t.then(mt)})).concat(n),i=Promise.all(e);i.then((function(){window.dispatchEvent(new o("single-spa:before-mount-routing-event",P(!0)))}));var l=c.map((function(t){return X(t).then((function(t){return It(t,i)}))})),h=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return It(t,i)}));return i.catch((function(t){throw y(),t})).then((function(){return y(),Promise.all(l.concat(h)).catch((function(n){throw t.forEach((function(t){return t.reject(n)})),n})).then(E)}))}))}function E(){var n=yt();t.forEach((function(t){return t.resolve(n)}));try{var e=0===r.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new o(e,P())),window.dispatchEvent(new o("single-spa:routing-event",P()))}catch(t){setTimeout((function(){throw t}))}if(Ut=!1,jt.length>0){var i=jt;jt=[],Rt(i)}return n}function y(){t.forEach((function(t){rt(t.eventArguments)})),rt(n)}function P(){var t,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=arguments.length>1?arguments[1]:void 0,m={},d=(e(t={},w,[]),e(t,v,[]),e(t,l,[]),e(t,O,[]),t);o?(c.concat(s).forEach((function(t,n){E(t,w)})),u.forEach((function(t){E(t,l)})),a.forEach((function(t){E(t,v)}))):r.forEach((function(t){E(t)}));var g={detail:{newAppStatuses:m,appsByNewStatus:d,totalAppChanges:r.length,originalEvent:null==n?void 0:n[0],oldUrl:p,newUrl:h,navigationIsCanceled:f}};return i&&_(g.detail,i),g;function E(t,n){var e=A(t);n=n||Ot(e),m[e]=n,(d[n]=d[n]||[]).push(e)}}}function It(t,n){return T(t)?L(t).then((function(t){return n.then((function(){return T(t)?B(t):t}))})):n.then((function(){return t}))}var xt=!1;function Bt(t){var n;xt=!0,t&&t.urlRerouteOnly&&(n=t.urlRerouteOnly,Y=n),Z&&Rt()}function Gt(){return xt}Z&&setTimeout((function(){xt||console.warn(s(1,!1))}),5e3);var Ct={getRawAppData:function(){return[].concat(gt)},reroute:Rt,NOT_LOADED:l,toLoadPromise:X,toBootstrapPromise:L,unregisterApplication:At};Z&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Ct);
//# sourceMappingURL=single-spa.min.js.map


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/regeneratorRuntime.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/regeneratorRuntime.js ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/typeof.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/regenerator/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/classCallCheck.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/classCallCheck.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/construct.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/construct.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/setPrototypeOf.js");


function _construct(t, e, r) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__["default"])()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p, r.prototype), p;
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/createClass.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/createClass.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/createSuper.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/createSuper.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(t) {
  var r = (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function () {
    var e,
      o = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t);
    if (r) {
      var s = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, e);
  };
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/defineProperty.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/defineProperty.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/inherits.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/inherits.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, e);
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/isNativeFunction.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeFunction)
/* harmony export */ });
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/iterableToArray.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/iterableToArray.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/nonIterableRest.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectSpread2.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectSpread2.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/slicedToArray.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/slicedToArray.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toConsumableArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toPrimitive.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toPrimitive.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toPropertyKey.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/typeof.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/typeof.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _wrapNativeSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/_@babel_runtime@7.26.0@@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(t, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, t);
  }, _wrapNativeSuper(t);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./index.js"));
/******/ }
]);