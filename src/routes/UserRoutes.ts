import { Request, Response, NextFunction } from 'express'
import express = require("express")
import { controller } from '.././controllers/UserController'

const router = express.Router()

router.post("/", controller.create_a_user)
//router.get("/", controller.get_all_users)
router.get("/:id", controller.get_user)

export { router }