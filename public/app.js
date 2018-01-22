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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function Block(node) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Block);

    this.node = node;
    this.options = options;
};

exports.default = Block;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(18).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User(name) {
        _classCallCheck(this, User);

        this.name = name;
    }

    _createClass(User, [{
        key: 'save',
        value: function save() {
            localStorage.setItem('user', JSON.stringify({
                name: this.name
            }));
        }
    }, {
        key: 'logout',
        value: function logout() {
            delete this.name;
            localStorage.removeItem('user');
        }
    }], [{
        key: 'load',
        value: function load() {
            var data = localStorage.getItem('user');

            if (!data) {
                return false;
            }

            try {
                data = JSON.parse(data);
            } catch (err) {
                console.error('invalid user');
                return false;
            }

            return new User(data.name);
        }
    }]);

    return User;
}();

exports.default = User;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Block) {
    _inherits(Button, _Block);

    function Button(node) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, node, options));

        _this.node.addEventListener('click', function () {
            _this.onClick();
        });
        return _this;
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            this.node.innerHTML = '\n        <button class="button">' + this.options.text + '</button>';
        }
    }, {
        key: 'onClick',
        value: function onClick() {}
    }]);

    return Button;
}(_block2.default);

exports.default = Button;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View(node) {
        _classCallCheck(this, View);

        this.node = node;
    }

    _createClass(View, [{
        key: "show",
        value: function show() {
            this.node.hidden = false;
        }
    }, {
        key: "hide",
        value: function hide() {
            this.node.hidden = true;
        }
    }]);

    return View;
}();

exports.default = View;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 1) Определить текущий, на который пользователь
 * 2) Уметь отслеживать измениня
 * 3) При изменении показывать view, которое соовтетсвует адерсу
 */

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        this.routes = {};
    }

    // Определить текущий, на который пользователь


    _createClass(Router, [{
        key: 'start',
        value: function start() {
            var _this = this;

            console.log('start', this.routes);

            window.addEventListener('hashchange', function () {
                _this.show(location.hash.replace('#', ''));
                //console.log("hash "+location.hash);
            });

            this.show(location.hash.replace('#', ''));
        }
    }, {
        key: 'show',
        value: function show(hash) {
            console.log('on view', hash);

            if (this.current) {
                this.current.hide();
            }

            this.current = this.routes[hash];
            this.current.show();
        }

        /**
         * Регистрация маршрута
         * @param {string} name
         * @param {Object} view
         */

    }, {
        key: 'register',
        value: function register(name, view) {
            this.routes[name] = view;
        }
    }]);

    return Router;
}();

exports.default = Router;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = __webpack_require__(4);

var _view2 = _interopRequireDefault(_view);

var _auth = __webpack_require__(16);

var _auth2 = _interopRequireDefault(_auth);

var _button = __webpack_require__(3);

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(8);

var _input2 = _interopRequireDefault(_input);

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_View) {
    _inherits(Auth, _View);

    function Auth(node) {
        _classCallCheck(this, Auth);

        var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this, node));

        _this.node.innerHTML = (0, _auth2.default)();

        var model = _user2.default.load();
        //console.log(model);
        if (model) {
            location.href = './#chat';
            return _possibleConstructorReturn(_this);
        }

        _this.renderAuth();

        window.addEventListener("hashchange", function () {

            var model = _user2.default.load();
            if (!model && location.hash === "#auth") {
                _this.renderAuth();
            }
        });

        return _this;
    }

    _createClass(Auth, [{
        key: 'renderAuth',
        value: function renderAuth() {
            var _this2 = this;

            this.button = new _button2.default(this.node.querySelector('.js-submit'), {
                text: 'Войти'
            });

            this.input = new _input2.default(this.node.querySelector('.js-name'), {
                value: '',
                placeholder: 'Введите имя'
            });

            this.input.render();
            this.button.render();

            this.button.onClick = function () {
                _this2.login();
            };
        }
    }, {
        key: 'login',
        value: function login() {
            var name = this.input.getValue();

            if (!name.length) {
                alert('Не валидное имя');
                return;
            }

            var model = new _user2.default(name);
            model.save();

            location.href = './#chat';
        }
    }]);

    return Auth;
}(_view2.default);

exports.default = Auth;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = __webpack_require__(4);

var _view2 = _interopRequireDefault(_view);

var _chat = __webpack_require__(17);

var _chat2 = _interopRequireDefault(_chat);

var _messageCreate = __webpack_require__(9);

var _messageCreate2 = _interopRequireDefault(_messageCreate);

var _message = __webpack_require__(10);

var _message2 = _interopRequireDefault(_message);

var _message_model = __webpack_require__(13);

var _message_model2 = _interopRequireDefault(_message_model);

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_View) {
    _inherits(Chat, _View);

    function Chat(node) {
        _classCallCheck(this, Chat);

        var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, node));

        _this.node.innerHTML = (0, _chat2.default)();

        var model = _user2.default.load();
        //console.log(model);
        if (!model) {
            location.href = './#auth';
        }

        _this.renderChat();

        window.addEventListener("hashchange", function () {

            var model = _user2.default.load();
            if (!model && location.hash === "#chat") {
                alert("Пожалуйста, авторизуйтесь.");
                location.href = './#auth';
            } else if (model && location.hash === "#chat") {
                _this.renderChat();
            }
        });
        return _this;
    }

    _createClass(Chat, [{
        key: 'renderChat',
        value: function renderChat() {
            this.messageModel = new _message_model2.default();

            this.messageModel.start();

            this.form = new _messageCreate2.default(document.querySelector('.js-form'), this.messageModel);
            this.form.render();

            this.messages = new _message2.default(this.node.querySelector('.js-list'), this.messageModel);
            this.messages.render();
        }
    }]);

    return Chat;
}(_view2.default);

exports.default = Chat;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Block) {
    _inherits(Input, _Block);

    function Input(node) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, node, options));
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {
            this.node.innerHTML = '\n        <input class="input" value="' + this.options.value + '" placeholder="' + this.options.placeholder + '"/>';
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.node.querySelector('input').value;
        }
    }]);

    return Input;
}(_block2.default);

exports.default = Input;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

var _textarea = __webpack_require__(11);

var _textarea2 = _interopRequireDefault(_textarea);

var _button = __webpack_require__(3);

var _button2 = _interopRequireDefault(_button);

var _messageCreate = __webpack_require__(14);

var _messageCreate2 = _interopRequireDefault(_messageCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateMsg = function (_Block) {
    _inherits(CreateMsg, _Block);

    function CreateMsg(node, messageModel) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, CreateMsg);

        var _this = _possibleConstructorReturn(this, (CreateMsg.__proto__ || Object.getPrototypeOf(CreateMsg)).call(this, node, options));

        _this.messageModel = messageModel;
        return _this;
    }

    _createClass(CreateMsg, [{
        key: 'sendMessage',
        value: function sendMessage() {
            var txt = this.node.querySelector('textarea').value;
            this.messageModel.sendMessage(txt);
            this.node.querySelector('textarea').value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            this.node.innerHTML = (0, _messageCreate2.default)();

            var button = new _button2.default(this.node.querySelector('.js-submit'), {
                text: ''
            });

            button.onClick = function () {
                _this2.sendMessage();
            };

            var textarea = new _textarea2.default(this.node.querySelector('.js-textarea'), {
                placeholder: 'Введите сообщение',
                rows: 5
            });

            textarea.ctrlEnter = function () {
                _this2.sendMessage();
            };

            textarea.render();
            button.render();
        }
    }]);

    return CreateMsg;
}(_block2.default);

exports.default = CreateMsg;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

var _message = __webpack_require__(15);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_Block) {
    _inherits(Message, _Block);

    function Message(node, messageModel) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, Message);

        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, node, options));

        _this.messageModel = messageModel;
        _this.messageModel.renderMessages = function () {
            return _this.render();
        };
        return _this;
    }

    _createClass(Message, [{
        key: 'render',
        value: function render() {
            this.node.innerHTML = (0, _message2.default)({ messages: this.messageModel.messages });
            //this.node.scrollIntoView(false);
        }
    }]);

    return Message;
}(_block2.default);

exports.default = Message;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_Block) {
    _inherits(Textarea, _Block);

    function Textarea(node) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Textarea);

        var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, node, options));

        _this.node.addEventListener('keydown', function (e) {
            if (e.ctrlKey && e.keyCode == 13) _this.ctrlEnter();
        });
        return _this;
    }

    _createClass(Textarea, [{
        key: 'render',
        value: function render() {
            this.node.innerHTML = '\n        <textarea class="textarea" rows="' + this.options.rows + '" placeholder="' + this.options.placeholder + '"></textarea>';
        }
    }, {
        key: 'ctrlEnter',
        value: function ctrlEnter() {}
    }]);

    return Textarea;
}(_block2.default);

exports.default = Textarea;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _router = __webpack_require__(5);

var _router2 = _interopRequireDefault(_router);

var _auth = __webpack_require__(6);

var _auth2 = _interopRequireDefault(_auth);

var _chat = __webpack_require__(7);

var _chat2 = _interopRequireDefault(_chat);

var _logout = __webpack_require__(22);

var _logout2 = _interopRequireDefault(_logout);

var _about = __webpack_require__(21);

var _about2 = _interopRequireDefault(_about);

var _members = __webpack_require__(25);

var _members2 = _interopRequireDefault(_members);

var _menu = __webpack_require__(19);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _router2.default();

window.addEventListener('DOMContentLoaded', function () {
    var authView = new _auth2.default(document.querySelector('.js-auth-view'));
    var chatView = new _chat2.default(document.querySelector('.js-chat-view'));
    var logoutView = new _logout2.default(document.querySelector('.js-logout-view'));
    var aboutView = new _about2.default(document.querySelector('.js-about-view'));
    var members = new _members2.default(document.querySelector('.js-members'));

    var menu = new _menu2.default(document.querySelector(".js-menu"), { menu: [{ href: "#auth", name: "Войти" }, { href: "#chat", name: "Чат" }, { href: "#about", name: "О чате" }, { href: "#logout", name: "Выйти" }] });

    menu.render();

    members.start();

    router.register('auth', authView);
    router.register('chat', chatView);
    router.register('about', aboutView);
    router.register('logout', logoutView);

    router.start();
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message_model = function () {
	function Message_model() {
		_classCallCheck(this, Message_model);

		this.messages = [];
		this.prevMessages = [];
		this.updateTimer = null;
		this.restUrl = "https://jschat-3993.restdb.io/rest/messages";
		this.restAPIKey = "5a5ce22f7d7ef24c5cf08cc0";
	}

	_createClass(Message_model, [{
		key: "start",
		value: function start() {
			var _this = this;

			this.loadMessages();
			this.updateTimer = setInterval(function () {
				_this.loadMessages();
			}, 10000);
		}
	}, {
		key: "stop",
		value: function stop() {
			clearInterval(this.updateTimer);
			this.updateTimer = null;
		}
	}, {
		key: "restXHR",
		value: function restXHR(message) {
			var _this2 = this;

			//console.log(message);
			var xhr = new XMLHttpRequest();
			var data = null;
			xhr.open(message ? "POST" : "GET", this.restUrl);
			xhr.setRequestHeader("content-type", "application/json");
			xhr.setRequestHeader("x-apikey", this.restAPIKey);
			xhr.setRequestHeader("cache-control", "no-cache");

			var user = _user2.default.load();
			if (!user) {
				//alert("Ошибка определения автора!");
				return;
			}

			if (message) {
				data = JSON.stringify({
					"username": user.name,
					"message": message,
					"datetime": Date.now()
				});
				xhr.addEventListener("readystatechange", function () {
					if (xhr.readyState === 4 && _this2.updateTimer !== null) {
						_this2.loadMessages();
					}
				});
			} else {
				xhr.addEventListener("readystatechange", function () {
					if (xhr.readyState === 4 && xhr.status === 200) {
						try {
							//console.log(xhr.response);
							_this2.messages = JSON.parse(xhr.response);
							var oldDate = void 0;
							_this2.messages = _this2.messages.reduce(function (allv, v) {
								var messDate = _this2.getMessageDate(v.datetime);
								if (messDate !== oldDate) {
									allv.push({ self: "none", text: messDate });
									oldDate = messDate;
								}
								v.time = _this2.getMessageTime(v.datetime);
								v.self = v.username === user.name ? "self" : "other";
								v.text = v.message.split("\n");
								allv.push(v);
								return allv;
							}, []);
							_this2.renderMessages();
						} catch (err) {
							console.log(err);
							console.error('invalid recieve messages');
							return false;
						}
					}
				});
			}

			xhr.send(data);
		}
	}, {
		key: "sendMessage",
		value: function sendMessage(message) {
			this.restXHR(message);
		}
	}, {
		key: "loadMessages",
		value: function loadMessages() {
			this.restXHR();
		}
	}, {
		key: "getMessageTime",
		value: function getMessageTime(msec) {
			return new Date(msec).toTimeString().split(" ")[0].substr(0, 5);
		}
	}, {
		key: "getMessageDate",
		value: function getMessageDate(msec) {
			var dateComponents = new Date(msec).toDateString().split(" ");
			return dateComponents[1] + ' ' + dateComponents[2];
		}
	}, {
		key: "renderMessages",
		value: function renderMessages() {
			console.log(this.messages);
		}
	}]);

	return Message_model;
}();

exports.default = Message_model;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"message-create\"\u003E\u003Cdiv class=\"message-create__textarea js-textarea\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"message-create__submit js-submit\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (messages) {pug_html = pug_html + "\u003Col class=\"chat\"\u003E";
// iterate messages
;(function(){
  var $$obj = messages;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var mess = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([mess.self], [true]), false, true)) + "\u003E";
if ((mess.self!="none")) {
pug_html = pug_html + "\u003Cdiv class=\"msg\"\u003E\u003Cdiv class=\"user\"\u003E" + (pug.escape(null == (pug_interp = mess.username) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
// iterate mess.text
;(function(){
  var $$obj = mess.text;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var str = $$obj[pug_index1];
pug_html = pug_html + "\u003Cp\u003E" + (pug.escape(null == (pug_interp = str) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var str = $$obj[pug_index1];
pug_html = pug_html + "\u003Cp\u003E" + (pug.escape(null == (pug_interp = str) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Ctime\u003E" + (pug.escape(null == (pug_interp = mess.time) ? "" : pug_interp)) + "\u003C\u002Ftime\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cp class=\"notification\"\u003E" + (pug.escape(null == (pug_interp = mess.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var mess = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([mess.self], [true]), false, true)) + "\u003E";
if ((mess.self!="none")) {
pug_html = pug_html + "\u003Cdiv class=\"msg\"\u003E\u003Cdiv class=\"user\"\u003E" + (pug.escape(null == (pug_interp = mess.username) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
// iterate mess.text
;(function(){
  var $$obj = mess.text;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var str = $$obj[pug_index2];
pug_html = pug_html + "\u003Cp\u003E" + (pug.escape(null == (pug_interp = str) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var str = $$obj[pug_index2];
pug_html = pug_html + "\u003Cp\u003E" + (pug.escape(null == (pug_interp = str) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Ctime\u003E" + (pug.escape(null == (pug_interp = mess.time) ? "" : pug_interp)) + "\u003C\u002Ftime\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cp class=\"notification\"\u003E" + (pug.escape(null == (pug_interp = mess.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fol\u003E";}.call(this,"messages" in locals_for_with?locals_for_with.messages:typeof messages!=="undefined"?messages:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"auth\"\u003E\u003Cdiv class=\"auth__name js-name\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"auth__submit js-submit\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"chat\"\u003E\u003Cdiv class=\"chat__container\"\u003E\u003Cdiv class=\"chat__inner js-list\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chat__footer js-form\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _menu = __webpack_require__(20);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Block) {
	_inherits(Menu, _Block);

	function Menu(node) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Menu);

		var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, node, options));

		_this.options.menu = options.menu || [];
		_this.logout = null;
		_this.login = null;
		window.addEventListener("hashchange", function () {
			_this.render();
		});
		return _this;
	}

	_createClass(Menu, [{
		key: "updateMenu",
		value: function updateMenu(hash) {
			this.node.querySelectorAll("li").forEach(function (li) {
				return li.classList.remove("active");
			});
			if (this.node.querySelector("a[href=\"" + hash + "\"]")) this.node.querySelector("a[href=\"" + hash + "\"]").closest("li").classList.add('active');
		}
	}, {
		key: "render",
		value: function render() {
			//console.log(this.options.menu);
			var model = _user2.default.load();
			if (!model) {
				if (this.login) {
					this.options.menu.unshift(this.login);
					this.login = null;
				}
				if (!this.logout) this.logout = this.options.menu.pop();
			} else {
				if (this.logout) {
					this.options.menu.push(this.logout);
					this.logout = null;
				}
				if (!this.login) this.login = this.options.menu.shift();
			}
			this.node.innerHTML = (0, _menu2.default)(this.options);
			this.updateMenu(location.hash);
		}
	}]);

	return Menu;
}(_block2.default);

exports.default = Menu;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (menu) {if (menu.length) {
pug_html = pug_html + "\u003Cul\u003E";
// iterate menu
;(function(){
  var $$obj = menu;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var punkt = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug.attr("href", punkt.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = punkt.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var punkt = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug.attr("href", punkt.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = punkt.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
}}.call(this,"menu" in locals_for_with?locals_for_with.menu:typeof menu!=="undefined"?menu:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _view = __webpack_require__(4);

var _view2 = _interopRequireDefault(_view);

var _about = __webpack_require__(23);

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logout = function (_View) {
    _inherits(Logout, _View);

    function Logout(node) {
        _classCallCheck(this, Logout);

        var _this = _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).call(this, node));

        _this.node.innerHTML = (0, _about2.default)();
        return _this;
    }

    return Logout;
}(_view2.default);

exports.default = Logout;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _view = __webpack_require__(4);

var _view2 = _interopRequireDefault(_view);

var _logout = __webpack_require__(24);

var _logout2 = _interopRequireDefault(_logout);

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logout = function (_View) {
    _inherits(Logout, _View);

    function Logout(node) {
        _classCallCheck(this, Logout);

        var _this = _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).call(this, node));

        _this.node.innerHTML = (0, _logout2.default)();
        window.addEventListener("hashchange", function () {
            if (location.hash === '#logout') {
                var model = _user2.default.load();
                model.logout();
            }
        });
        return _this;
    }

    return Logout;
}(_view2.default);

exports.default = Logout;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"about\"\u003E\u003Ch3\u003EУстройство чата\u003C\u002Fh3\u003E\u003Cp\u003EЧат лобби доступен в то время, когда игрок находится вне битв (в игровом лобби). Он разделён на несколько тематических каналов. Сообщения в чат-каналах видят все игроки, находящиеся в этих каналах. Однако в каждой языковой версии игры существует свой отдельный набор каналов чата.\u003C\u002Fp\u003E\u003Cp\u003EСообщения, отправляемые в чат лобби, могут быть адресованы конкретному игроку. Такие сообщения по-прежнему остаются видны всем, но для адресата они дополнительно выделяются. Чтобы написать в канал сообщение, адресованное конкретному игроку, нужно щёлкнуть левой кнопкой мыши по его нику (например, в чате) и выбрать опцию «Написать в общем чате» либо зажать клавишу&nbsp;Ctrl&nbsp;и кликнуть левой кнопкой мыши по нику.\u003C\u002Fp\u003E\u003Ch3\u003EПриватные сообщения\u003C\u002Fh3\u003E\u003Cp\u003EВ ней есть два параметра: «цена» отправки сообщения и «цена» одного символа — эта стоимость измеряется в миллисекундах. Это значит, что ограничение работает не только по количеству сообщений, но и по количеству символов за единицу времени. Такой формат позволяет не банить пользователя, а на несколько секунд блокировать возможность отправки сообщения. Лимит может превысить не всё ваше сообщение, а только его часть, несколько символов. Лишние символы выделяются красным, а вместо кнопки «отправить» появляется таймер, извещающий о том, когда можно будет отправить сообщение такой длины. Вы можете просто сделать текст короче и отправить его немедленно или дождаться, когда для отправки станет доступно сообщение целиком.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"bye\"\u003E\u003Cdiv\u003EДо скорой встречи!\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = __webpack_require__(2);

var _user2 = _interopRequireDefault(_user);

var _block = __webpack_require__(0);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Members = function (_Block) {
	_inherits(Members, _Block);

	function Members(node) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Members);

		var _this = _possibleConstructorReturn(this, (Members.__proto__ || Object.getPrototypeOf(Members)).call(this, node, options));

		_this.restUrl = "https://jschat-3993.restdb.io/rest/messages";
		_this.restAPIKey = "5a5ce22f7d7ef24c5cf08cc0";
		_this.members = [];
		_this.forLastMs = 60 * 15 * 1000; // 15 minutes in ms
		_this.updateTimer = null;
		return _this;
	}

	_createClass(Members, [{
		key: 'start',
		value: function start() {
			var _this2 = this;

			this.showMembers();
			this.updateTimer = setInterval(function () {
				_this2.showMembers();
			}, 10000);
		}
	}, {
		key: 'stop',
		value: function stop() {
			clearInterval(this.updateTimer);
			this.updateTimer = null;
		}
	}, {
		key: 'showMembers',
		value: function showMembers() {
			var _this3 = this;

			var xhr = new XMLHttpRequest();
			var data = null;
			xhr.open("GET", this.restUrl);
			xhr.setRequestHeader("content-type", "application/json");
			xhr.setRequestHeader("x-apikey", this.restAPIKey);
			xhr.setRequestHeader("cache-control", "no-cache");
			xhr.addEventListener("readystatechange", function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					try {
						//console.log(xhr.response);
						var messages = JSON.parse(xhr.response);
						var dNow = Date.now();
						messages = messages.filter(function (_ref) {
							var datetime = _ref.datetime;

							return dNow - datetime < _this3.forLastMs;
						});
						_this3.members = messages.map(function (_ref2) {
							var username = _ref2.username;
							return username;
						});
						_this3.renderMembers();
					} catch (err) {
						console.log(err);
						console.error('invalid check members');
						return false;
					}
				}
			});
			xhr.send(data);
		}
	}, {
		key: 'renderMembers',
		value: function renderMembers() {
			var model = _user2.default.load();
			if (model) {
				if (!this.members.includes(model.name)) this.members.unshift(model.name);
			}
			if (!this.members.length) {
				this.node.innerHTML = "Сейчас в чате никого.";
				return;
			}
			//console.log(this.members,model);
			this.node.innerHTML = "В чате: " + this.members.join(", ");
		}
	}]);

	return Members;
}(_block2.default);

exports.default = Members;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map