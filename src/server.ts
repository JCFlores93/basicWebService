//Declarations
import expres = require("express")
import { Application, Request, Response, NextFunction} from 'express'
import bodyParser = require("body-parser")
import methodOverride = require("method-override")
import * as morgan from 'morgan'
import mongoose = require("mongoose")
import {connectionMongo} from './connection/mongoConnection'
import { router as routeUser } from './routes/UserRoutes'
import { router as routeLend } from './routes/LendRoutes'
import { router as routeEvent } from './routes/Event'
//Settings
const app: Application = expres()

mongoose.Promise = global.Promise;
mongoose.connect(connectionMongo, {
    useMongoClient: true
})

//Middleware
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended:true}))
app.use(methodOverride("_method"))

app.use("/user", routeUser)
app.use("/lend", routeLend)
app.use("/event", routeEvent)


//Routes

//Server
app.listen(4000, () => {
    console.log("Executing on port 4000")
})