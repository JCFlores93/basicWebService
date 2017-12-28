import { Request, Response, NextFunction } from 'express'
import { service } from '../services/tokenService'

const policie = (req: Request, res: Response, next: NextFunction) => {
    if(req.headers["authorization"]){
        const accessToken = req.headers["authorization"].toString().split(" ")[1]

        service
            .decodificarAccessToken(accessToken)
            .then(resultado => {
                return next()
            })
            .catch(error => {
                return res
                        .status(error.status)
                        .json(error)
            })
    }else {
        return res
                .status(409)
                .json({
                    status: 409,
                    message: "No está autenticado"
                })
    }
}

export { policie }