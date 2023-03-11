const Category = require('../models/CategoryModel');

const getCategory = async (req, res) => {
    try {
        const categories = await Category.find({}).sort({name: "asc"}).orFail()
        res.json(categories);
    } catch (err) {
        next(err);
    }
}

module.exports = getCategory;