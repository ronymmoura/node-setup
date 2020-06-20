"use strict";

var _express = _interopRequireDefault(require("express"));

var _UserController = require("./controllers/UserController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get('/', (req, res) => {
  const user = new _UserController.UserController().create('Rony');
  return res.json({
    message: `Coé ${user.name}`
  });
});
app.listen(3333);