const New = require('../models/New');

module.exports = {
  async list() {
    return New.find().sort({ createdAt: -1 });
  },
  async create(payload) {
    return New.create(payload);
  },
};
