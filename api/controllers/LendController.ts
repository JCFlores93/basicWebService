import { Request, Response, NextFunction } from 'express'
import Lend from '../models/Lend'

const controller = {
    create_a_lend:(req:Request, res:Response, next:NextFunction) => {
        const newLend = new Lend(req.body)
        newLend
            .save()
            .then(lend => {
                res.json(lend)
            })
            .catch(error => {
                res
                    .status(error.status)
                    .type("text/plain")
                    .send(error)
            })
    }
}

export { controller }