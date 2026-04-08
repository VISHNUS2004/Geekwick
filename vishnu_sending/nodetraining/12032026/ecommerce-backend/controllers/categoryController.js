const categories = require('../data/categories');

exports.getCategories = (req, res) => {
  res.json(categories);
};

exports.addCategory = (req, res) => {

  const newCategory = {
    id: categories.length + 1,
    name: req.body.name
  };

  categories.push(newCategory);

  res.status(201).json(newCategory);
};