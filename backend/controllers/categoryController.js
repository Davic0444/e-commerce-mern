const Category = require('../models/CategoryModel');

const getCategory = async (req, res, next) => {
    try {
        const categories = await Category.find({}).sort({name: "asc"}).orFail()
        res.json(categories);
    } catch (err) {
        next(err);
    }
}

const newCategory = async (req, res, next) => {
    try {
        const {category} = req.body;
        if (!category) {
            res.status(400).send("Category input is required");
        }
        const categoryExists = await Category.findOne({name: category});
        if (!categoryExists) {
            res.status(404).send("Category already exist");
        } else {
            const categoryCreated = await Category.create({name: category});
            res.status(201).send({categoryCreated: categoryCreated});
        }
    } catch (err) {
        next(err);
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const categoryExists = await Category.findOne({name: decodeURIComponent(req.params.category)}).orFail()
        await categoryExists.remove();
        res.json({categoryDeleted: true});
    } catch (err) {
        next(err);
    }
}

const saveAttr = async (req, res, next) => {
    const {key, val, categoryChoosen} = req.body
    if (!key || !val || !categoryChoosen) {
        return res.status(400).send("All inputs are required")
    }
    try {
        const category = categoryChoosen.split("/")[0]
        const categoryExists = await Category.findOne({name: category}).orFail()
        if (categoryExists.attrs.length > 0) {
            // if key exists in the database then add a value to the key
            let keyDoesNotExistsInDatabase = true
            categoryExists.attrs.map((item, idx) => {
                if (item.key === key) {
                    keyDoesNotExistsInDatabase = false
                    let copyAttributeValues = [...categoryExists.attrs[idx].value]
                    copyAttributeValues.push(val)
                    let newAttributeValues = [...new Set(copyAttributeValues)] // Set ensures unique values
                    categoryExists.attrs[idx].value = newAttributeValues
                }
            })

            if (keyDoesNotExistsInDatabase) {
                categoryExists.attrs.push({key: key, value: [val]})
            }
        } else {
            // push to the array
            categoryExists.attrs.push({key: key, value: [val]})
        }
        await categoryExists.save()
        let cat = await Category.find({}).sort({name: "asc"})
        return res.status(201).json({categoriesUpdated: cat})
    } catch (err) {
        next(err)
    }
}

module.exports = {getCategory, newCategory, deleteCategory, saveAttr};