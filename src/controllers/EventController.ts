import { Request, Response, NextFunction } from 'express'
import Event from '../models/Event'

const controller = {
    create_a_event:(req:Request, res:Response, next:NextFunction) => {
        const newEvent = new Event(req.body)
        newEvent
            .save()
            .then(event => {
                res.json(event)
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