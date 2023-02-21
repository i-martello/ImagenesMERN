"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _cloudinary = require("../utils/cloudinary");
var _multer = _interopRequireDefault(require("../utils/multer"));
var _images = _interopRequireDefault(require("../models/images"));
var router = (0, _express.Router)();
router.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var images;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _images.default.find();
        case 2:
          images = _context.sent;
          res.json(images);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/publicar', _multer.default.single("Value"), /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var _req$body, title, description, cloudinary_image, newImage;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, description = _req$body.description;
          if (req.file) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.send('Subi una foto duro'));
        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _cloudinary.uploadImage)(req.file.path);
        case 6:
          cloudinary_image = _context2.sent;
          console.log(cloudinary_image);
          _context2.next = 10;
          return new _images.default({
            title: title,
            description: description,
            cloud_id: cloudinary_image.public_id,
            url: cloudinary_image.secure_url
          });
        case 10:
          newImage = _context2.sent;
          _context2.next = 13;
          return newImage.save();
        case 13:
          console.log("guardado con exito", newImage);
          _context2.next = 19;
          break;
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](3);
          console.log(_context2.t0);
        case 19:
          res.json({
            success: 'imagen enviada'
          });
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 16]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get('/imagenes/:id', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var oneImage;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _images.default.findOne({
            cloud_id: req.params.id
          });
        case 2:
          oneImage = _context3.sent;
          res.json(oneImage);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.delete('/imagenes/:id', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var deleteImg;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _images.default.findOneAndRemove({
            cloud_id: req.params.id
          });
        case 2:
          deleteImg = _context4.sent;
          res.json(deleteImg);
          (0, _cloudinary.deleteImage)(req.params.id);
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;