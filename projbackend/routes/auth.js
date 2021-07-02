const { check, validationResult } = require('express-validator');
var express = require("express");
var router = express.Router();
const { signout, signup, signin, isSignedIn } = require("../controllers/auth.js");


router.post("/signup", [
    check("name").isLength({ min: 3 }).withMessage("name should be atleast 3 characrters"),
    check("email").isEmail().withMessage("email is required"),
    check("password").isLength({ min: 3 }).withMessage("password should be atleast 3 characters ")
], signup);

router.post("/signin", [

    check("email").isEmail().withMessage("email is required"),
    check("password").isLength({ min: 3 }).withMessage("password should be atleast 3 characters and is required")
], signin);
router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
    res.json(req.auth);
})

module.exports = router;