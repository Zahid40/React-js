const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

const JWT_SECRET = "colafactoryurs"

//Route 1 : Create User => /createuser
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
        const securePasswrd = await bcrypt.hash(req.body.password, salt);
        //create user
        user = await User.create({
            name: req.body.name,
            password: securePasswrd,
            email: req.body.email
        });

        const data = {
            user: { id: user.id }
        }
        const authToken = jwt.sign(data, JWT_SECRET);

        // res.json(user);
        res.json({ authToken });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Email Already Exists in Our Data. Please Try To Login",
            message: err.message
        });
    }
});

//Route 2 : Login user => /login
router.post('/login', [
    body('email', "Enter A valid Email").isEmail(),
    body('password', "password can't blank").exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Email or Password is Incorrect" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Email or Password is Incorrect" })
        }

        const data = {
            user: { id: user.id }
        }
        const authToken = jwt.sign(data, JWT_SECRET);

        // res.json(user);
        res.json({ authToken });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Email Already Exists in Our Data. Please Try To Login",
            message: err.message
        });
    }
});

//Route 3 : Getuser User details => /getuser
router.post('/getuser', fetchUser , async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findOne({ _id: userId }).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Email Already Exists in Our Data. Please Try To Login",
            message: error.message
        });
    }
});
module.exports = router;