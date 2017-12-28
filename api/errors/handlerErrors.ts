import { Request, Response, NextFunction } from "express"
import { params } from '../../configurations/setup'

interface AnswerError extends Error {
    status?: number
}
 
const handler = {
    cacheo : (ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
        return (req: Request, res: Response, next: NextFunction) => {
            return ftn(req,res,next).catch(next)
        }
    },

    notFound: (req: Request, res: Response, next: NextFunction) => {
        const error: AnswerError = new Error("Ruta no encontrada")
        error.status = 404
        next(error)
    },

    general: (error: AnswerError, req: Request, res: Response, next: NextFunction) => {
        let objError: AnswerError
        objError.name = error.name
        objError.message = error.message

        objError.stack = objError.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
		objError.stack = objError.stack.replace(/[a-z_-\d]+.ts:\d+:\d+/gi, '<mark>$&</mark>')
	
		res.render("error", {error: objError})
    
    }

}

export { handler }