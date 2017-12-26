//Declarations
import express = require("express")
import { Application, Request, Response, NextFunction} from 'express'
require("dotenv").config({path:"./variables.env"})
import favicon = require("serve-favicon")
import bodyParser = require("body-parser")
import methodOverride = require("method-override")
import * as morgan from 'morgan'
import mongoose = require("mongoose")
import {connectionMongo} from './connection/mongoConnection'
import { router as routeUser } from '../routes/UserRoutes'
import { router as routeLend } from '../routes/LendRoutes'
import { router as routeEvent } from '../routes/EventRoutes'
import cors = require("cors")
//Settings
const app: Application = express()

mongoose.Promise = global.Promise;
mongoose.connect(connectionMongo, {
    useMongoClient: true
})

//Middleware
//app.use(favicon("./favicon.ico"))
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())
app.use(methodOverride("_method"))
app.use(cors({"origin": "*"}))

//Routes
app.use("/user", routeUser)
app.use("/lend", routeLend)
app.use("/event", routeEvent)

//Server
app.listen(4000, () => {
    console.log("Executing on port 4000")
})