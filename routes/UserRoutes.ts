import { Request, Response, NextFunction } from 'express'
import express = require("express")
import { controller } from '../api/controllers/UserController'

const router = express.Router()

router.post("/", controller.create_a_user)
//router.get("/", controller.get_all_users)
router.get("/:id", controller.get_user)
router.get("/",controller.get_all_users)
router.delete("/:id", controller.delete_users)
router.put("/:id", controller.update_user)

export { router }