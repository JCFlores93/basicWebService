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
import { router as routesAuth } from '../routes/auth'
import { router as routeUser } from '../routes/UserRoutes'
import { router as routeLend } from '../routes/LendRoutes'
import { router as routeEvent } from '../routes/EventRoutes'
import cors = require("cors")
import sessions = require("express-session")
import { handler } from '../api/errors/handlerErrors'
import { params } from "../configurations/setup";
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
app.use(sessions({
    secret: params.secretSession,
    resave: false,
    saveUninitialized: true
}))

//Routes
app.use("/user", routeUser)
app.use("/lend", routeLend)
app.use("/event", routeEvent)
app.use("/auth", routesAuth)

app.use(handler.notFound)
app.use(handler.general)

//Server
app.listen(4000, () => {
    console.log("Executing on port 4000")
})