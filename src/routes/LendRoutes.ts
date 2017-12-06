import { Request, Response, NextFunction } from 'express'
import express = require("express")
import { controller } from '.././controllers/LendController'

const router = express.Router()

router.post("/", controller.create_a_lend)

export { router }