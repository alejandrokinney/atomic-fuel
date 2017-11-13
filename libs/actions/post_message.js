'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postMessage = exports.Constants = undefined;

var _wrapper = require('../constants/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = ['POST_MESSAGE'];

var Constants = exports.Constants = (0, _wrapper2.default)(actions, []);

var postMessage = exports.postMessage = function postMessage(message) {
  return {
    type: Constants.POST_MESSAGE,
    postMessage: true,
    message: message
  };
};