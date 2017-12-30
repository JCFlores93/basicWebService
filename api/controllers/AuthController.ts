import { Request, Response, NextFunction } from 'express'
import { User } from '../models/User'
import { service } from '../services/tokenService'
var CircularJSON = require("circular-json")

const controller = {
    login: async(req: Request, res: Response, next: NextFunction) => {
        const usuario = req.body.username
        const contrasena = req.body.password

        const registro: any = await User.find({
            username: usuario,
            password:contrasena
        })

        if(registro.length > 0){
            const tokens = service.createTokens(registro[0]._id)
            return res  
                        .status(200)
                        .json(tokens)
        }
        
        return res
                    .status(409)
                    .send("No está autenticado")
    },
    logout: (req: Request, res: Response, next: NextFunction) => {
        delete req["session"]["usuario"]
        
    },
    register:async (req: Request, res: Response, next: NextFunction) => {
        const usuario: any = new User()
        usuario.usuario = req.body.usuario
        usuario.contrasena = req.body.contrasena
        const registro = await usuario.save()
        const tokens = service.createTokens(registro._id)
        return res 
                    .status(201)
                    .json(tokens)
    },
    newAccessToken:(req: Request, res: Response, next: NextFunction) => {
        const refreshToken = req.body.refreshToken
        const token: any = service.generateNewAccessToken(refreshToken)

        if(token.status){
            return res  
                    .status(token.status)
                    .send("No está autenticado")
        }else {
            return res  
                    .status(201)
                    .json(token)
        }
    },
       list:async (req: Request, res: Response, next: NextFunction) => {
            const usuarios = await User.find({})
            return res  
                        .status(200)
                        .json(usuarios)
        }
    }
export { controller }