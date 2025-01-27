const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserController = require('../controllers/user')

const User = require("../models/user");


// router.get('/',(req,res,next)=>{
//   res.json({})
// })

router.post("/signup",UserController.users_create_sign);

router.post("/login", UserController.users_login);

// when there is unique fieldname in model ...
// router.post("/signup", (req, res, next) => {
//   bcrypt.hash(req.body.password, 10, (err, hash) => {
//     if (err) {
//       return res.status(500).json({
//         error: err,
//       });
//     } else {
//       const user = new User({
//         _id: new mongoose.Types.ObjectId(),
//         email: req.body.email,
//         password: hash,
//       });
//       user
//         .save()
//         .then((result) => {
//           console.log(result);
//           res.status(201).json({
//             message: "User created successfully",
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//           if (err.code === 11000) {
//             // Handle duplicate email error
//             res.status(409).json({
//               message: "Email already exists",
//             });
//           } else {
//             res.status(500).json({
//               error: err,
//             });
//           }
//         });
//     }
//   });
// });

router.delete("/:userId", UserController.user_delete);

module.exports = router;
