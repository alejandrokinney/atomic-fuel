"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.DONE = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DONE = '_DONE';
exports.DONE = DONE;

function _default(actionTypes, asyncActionTypes) {
  var types = _lodash["default"].reduce(actionTypes, function (result, key) {
    return _objectSpread({}, result, _defineProperty({}, key, key));
  }, {});

  types = _lodash["default"].reduce(asyncActionTypes, function (result, key) {
    var _objectSpread3;

    return _objectSpread({}, result, (_objectSpread3 = {}, _defineProperty(_objectSpread3, key, key), _defineProperty(_objectSpread3, "".concat(key).concat(DONE), "".concat(key).concat(DONE)), _objectSpread3));
  }, types);
  types.DONE = DONE;
  return types;
}