const express = require("express");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");

const User = require("../models/UserSchema");

dotenv.config();

const router = express.Router();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/google", async (req, res) => {
  try {
    const { credential } = req.body;                    // crednetial sent by google when user login

    const ticket = await client.verifyIdToken({      //this verify credential JWT tocken is real or fake or not expired
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,         //this check that it belong to our website or not
    });

    const payload = ticket.getPayload();              //this decodes the tocken into redable JSON data

 
    let user = await User.findOne({ email: payload.email });


    if (!user) {
      user = await User.create({
        googleId: payload.sub,
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
      });
    }

  
    const token = jwt.sign(            //this creates your own JWT token for our app to make the use stay authenticated
      { id: user._id, email: user.email },   //these are the things we want to remember about the use
      process.env.JWT_SECRET,           //it is used to sign and verify token
      { expiresIn: "1d" }                     //stay loggged in for 1 day
    );

    res.json({ token, user });

  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Auth failed" });
  }
});

module.exports = router;