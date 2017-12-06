import { Request, Response, NextFunction } from 'express'
import User from '../models/User'

const controller = {
    create_a_user: (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        //const idFacebook = req.body.idFacebook
        const newUser = new User(req.body)
        //newUser["idFacebook"] = idFacebook
        
        console.log("Nuevo usuario" + newUser)
        console.log(req.body.idFacebook)
        newUser
            .save()
            .then(user => {
                res.json(user)
            })
            .catch(error => {
                res
                    .status(500)
                    .type("text/plain")
                    .send(error)
            })
    },
    get_all_users: (req: Request, res: Response, next: NextFunction) => {
        User
            .find({})
            .then( users => {
                res.json(users)
            })
            .catch( error => {
                res 
                    .status(500)
                    .type("text/plain")
                    .send(error)
                })
    },
    get_user: (req: Request, res: Response, next: NextFunction) => {
        console.log("getuser : " + req.params.id)
        User    
            .findOne({'idFacebook': req.params.id},'funding_status approval_status')
            .then( user => {
                console.log("response" + user)
                res.json(user)
            })
            .catch( error => {
                res 
                    .status(500)
                    .type("text/plain")
                    .send(error)
                })
    }
}

export { controller }