"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _default = (0, _multer.default)({
  storage: _multer.default.diskStorage({}),
  fileFilter: function fileFilter(req, file, cb) {
    var ext = _path.default.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".png" && ext !== ".gif") {
      cb(new Error("Que intentas subir mogolico?"), false);
      return;
    }
    cb(null, true);
  }
});
exports.default = _default;