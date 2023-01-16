
import userModel from "../models/user.model.js";
import doctorModel from "../models/doctor.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createDoctor  } from "../services/doctor.service.js";
import {userDetails} from '../controllers/user.controller.js'



export async function userLogin(req, res, next) {
    // let username = req.body.username;
    // let password = req.body.password;
  
    try {
      let user = await userModel .findOne({ username:req.body.username });
      console.log("user: ", user);
  
      if (!user) {
        res.status(500).send("Username is invalid!");
      } else {
        const validpassword = await bcrypt.compare(req.body.password, user.password);
        console.log("validpassword :", validpassword);
  
        if (!validpassword) res.status(500).send("invalid password");
  
        let token = jwt.sign(
          { username: user.username,role :user.role},
          process.env.TOKEN_KEY
        );
  
        // user.token = token;
        res.header("x-auth-token", token).send(token);
      }
    } catch (error) {
      next(error);
    }
  }
  
  