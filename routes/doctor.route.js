import express ,{Router} from 'express'
import { doctorDetails } from '../controllers/doctor.controller.js';
import { makeValidateBody } from 'express-class-validator';
import { Doctor } from '../dto/doctor.dto.js';
import { doctorMiddleware } from '../middlewares/doctor.middleware.js';




const router = express.Router()


router.post("/sign-up",makeValidateBody(Doctor),doctorMiddleware,doctorDetails);
// router.post("/sign-in",doctorLogin);


export default router;