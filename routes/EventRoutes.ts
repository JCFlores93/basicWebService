import { Request, Response, NextFunction } from 'express'
import express = require("express")
import { controller } from '../api/controllers/EventController'

const router = express.Router()

router.post("/", controller.create_a_event)

export { router }