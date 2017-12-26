import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import { read } from 'fs';

const controller = {
    create_a_user: (req: Request, res: Response, next: NextFunction) => {
        //console.log(req)
        //const idFacebook = req.body.idFacebook
        const newUser = new User(req.body)
        //newUser["idFacebook"] = idFacebook
        
        //console.log("Nuevo usuario" + newUser)
        //console.log(req.body.idFacebook)
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
        //console.log("getuser : " + req.params.id)
        User    
            .findOne({'id': req.params.id})
            .then( user => {
                //console.log("response" + user)
                res.json(user)
            })
            .catch( error => {
                res 
                    .status(500)
                    .type("text/plain")
                    .send(error)
                })
    },
    delete_users:(req: Request, res:Response, next:NextFunction) => {
        //console.log("delete user: "+ req.params.id)
        User.remove({'id': req.params.id})
            .then( user => {
                //console.log("se eliminó" + user)
                res.json(user)
            })
            .catch(error => {
                res
                    .status(500)
                    .type("text/plain")
                    .send(error)
            })
    },
    update_user:(req: Request, res: Response, next: NextFunction) => {
        console.log("update_user")
        //console.log("id" + req.params.id)
        console.log("req.body" + JSON.stringify(req.body))
        //let user = new User(req.body)
        User.findOneAndUpdate({ 'id': req.params.id}, req.body,{new:true})
            .then(user => {
                console.log("se actualizó" + user)
                res.json(user)
            })
            .catch(error => {
                res
                    .status(500)
                    .type("text/plain")
                    .send(error)
            })
    }
}

export { controller }