const newRepository = require('../../domain/repositories/newRepository');

exports.listNews = async (req, res, next) => {
  try {
    const items = await newRepository.list();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

exports.createNew = async (req, res, next) => {
  try {
    const item = await newRepository.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};
