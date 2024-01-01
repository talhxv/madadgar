const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    img: String,
});

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;
