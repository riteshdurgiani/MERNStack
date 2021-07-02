const Category = require("../models/category")


exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, cate) => {
        if (err) {
            return res.status(400).json({
                error: "Category not found"
            })
        }
        req.category = cate;
        next();
    })



}

exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, cateory) => {
        if (err) {
            return res.status(400).json({
                error: "No able to save category"
            })
        }
        res.json({ category });
    })
}

exports.getCategory = (req, res) => {
    return res.json(req.category)
}

exports.getAllCategory = (req, res) => {
    Category.find().exec((err, categories) => {
        if (err) {
            return res.status(400).json({
                error: "Not found category"
            })
        }
        res.json(categories);
    })
}

exports.updateCategory = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, updatedCategory) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                error: "Failed to update category"
            })
        }
        res.json(updatedCategory);
    })
}

exports.removeCategory = (req, res) => {
    const category = req.category;
    category.remove((err, category) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete category"
            });

        }
        res.json({
            message: "Succesfully deleted"
        })
    });
}