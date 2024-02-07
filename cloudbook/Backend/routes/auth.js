const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "colafactoryurs"

router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('password').isLength({ min: 6 }),
    body('email').isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ error: "User with this Email already Exists" })
    }

    try {
        //Password Hashing
        const salt = await bcrypt.genSalt(10);
        const securePasswrd = await bcrypt.hash(req.body.password , salt);
        //create user
        user = await User.create({
            name: req.body.name,
            password: securePasswrd,
            email: req.body.email
        });

        const data = {
            user:{id:user.id}
        }
        const authToken = jwt.sign(data,JWT_SECRET);

        // res.json(user);
        res.json({authToken});
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Email Already Exists in Our Data. Please Try To Login",
            message: err.message
        });
    }
});

module.exports = router;