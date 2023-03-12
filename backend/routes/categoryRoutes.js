const express = require('express');
const router = express.Router();
const {getCategory, newCategory, deleteCategory, saveAttr} = require('../controllers/categoryController');

router.get('/', getCategory);
router.post('/new', newCategory);
router.delete('/:category', deleteCategory);
router.post('/attr', saveAttr);

module.exports = router;