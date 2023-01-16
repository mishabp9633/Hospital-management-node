import express from "express";
import cors from "cors"
import { initialize } from './database/connection.js';
import doctorRouter from "./routes/doctor.route.js";
import hospitalRouter from "./routes/hospital.route.js";

import mongoose from 'mongoose'
import { errorMiddleware } from "./middlewares/errorMiddleware";
import userRouter from './routes/user.route.js'
// import userLoginRouter from './routes/userLogin.route.js'
// import { errorHandling } from "./errorHandler.js";


(async () =>{
  var app = express()

  await initialize()



  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json({limit:"50mb"}))
  app.use(express.urlencoded({limit:"50mb",extended:true}))


  // app.use("/authentication",userLoginRouter)
  app.use("/authentication",userRouter)
  app.use("/hospital",hospitalRouter)
  app.use("/doctor",doctorRouter)

  
  //  app.use(function(err,req,res,next){
  //   res.send(500).send("Something Went Wrong")
  //  })

  app.use(errorMiddleware)
  app.listen(4000,function(){
    console.log("server connected");  
  })
})();

 




















// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// // import url from "url"
// import {router as calculationRoute} from "./calculation.js";
// // import router from "./calculation.js";
// import { initialize } from "./database/connection.js";

// //  var routes = express.Router()
// // var defaulteRoutes = require('./calculation');

// var app = express();
// var jsonParsor = bodyParser.json();
// app.use(cors({ origin: true, credentials: true }));

// //-----------------------db connection-------------------//
// await initialize()

// // calculationRoute(app, db)

// app.use('/calculation', calculationRoute)

// app.get("/", function (req, res) {
//   res.send("<h2>welcome guyss</h2>");
// });

// app.listen(8080, function () {
//   console.log("server started");
// });
