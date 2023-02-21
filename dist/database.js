"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dotenv = require("dotenv");
var _mongoose = _interopRequireDefault(require("mongoose"));
(0, _dotenv.config)();
_mongoose.default.set('strictQuery', false);
(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return _mongoose.default.connect(process.env.MONGO_URI);
      case 2:
        console.log("base de datos");
      case 3:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();