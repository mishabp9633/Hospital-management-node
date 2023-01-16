import express ,{Router} from 'express'
import { userDetails } from '../controllers/user.controller.js';
import { makeValidateBody} from 'express-class-validator'
import { User } from '../dto/user.dto.js';
import {userLogin} from '../controllers/login.controller.js'




const router = express.Router()


router.post("/sign-up",makeValidateBody(User),userDetails);
router.post("/sign-in",userLogin);


export default router;