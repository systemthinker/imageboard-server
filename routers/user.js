const express = require('express')

const { Router } = express;

const User = require("../models").user



const router = new Router();
const bcrypt = require('bcrypt')


router.post("/", async (req, res, next) => {
    try {
      const { email, password, fullName } = req.body;
      if (!email || !password || !fullName) {
        res.status(400).send("missing parameters");
      } else {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({
          email,
          fullName,
          password: hashedPassword
        });
        res.json(newUser);
      }
    } catch (e) {
      next(e);
    }
  });

  router.get("/", async(req,res)=>{
    let userData = await User.findAll();
    userData = userData.map(u=>u.get({plain:true}))
    

    res.send(userData)
  });




module.exports = router;