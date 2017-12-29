import express = require("express")
import { Request, Response, NextFunction } from "express"
import { controller as auth } from '../api/controllers/AuthController'
import { handler } from '../api/errors/handlerErrors'
import { policie } from '../api/policies/autenticationPolicie'

const router = express.Router()

router.post("/login", handler.cacheo(auth.login))
router.get("/logout", auth.logout)
router.post("/registro", handler.cacheo(auth.register))
router.post("/nuevo-token", auth.newAccessToken)
router.get("/listado", policie, handler.cacheo(auth.list))

export { router }


