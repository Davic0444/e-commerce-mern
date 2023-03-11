const express = require('express');
const router = express.Router();
const {getCategory, newCategory, deleteCategory} = require('../controllers/categoryController');

router.get('/', getCategory);
router.post('/new', newCategory);
router.delete('/:category', deleteCategory);

module.exports = router;