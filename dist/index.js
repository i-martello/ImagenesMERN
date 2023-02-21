"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("./database");
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./routes/index.routes"));
var app = (0, _express.default)();
app.set('port', process.env.PORT || 4000);
app.use((0, _cors.default)());
app.use(_index.default);
app.listen(app.get('port'), console.log('server andando joya'));