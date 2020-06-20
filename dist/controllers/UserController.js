"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _User = require("../models/User");

class UserController {
  create(name) {
    const user = new _User.User();
    user.name = name;
    return user;
  }

}

exports.UserController = UserController;