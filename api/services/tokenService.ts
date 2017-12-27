import jwt = require("jwt-simple")
import moment = require("moment")
import randToken = require("rand-token")
import { params } from '../../configurations/setup'
import { Promise } from "mongoose";

const lifeTime = 15,
      unidad = "seconds",
      refreshTokens = {}

const service = {
    createTokens: (id) => {
        const payLoad = {
            id: id,
            iat: moment().unix(),
            exp: moment().add(lifeTime, unidad).unix()
        }

        const accessToken = jwt.encode(payLoad, params.secretToken)
        const refreshToken = randToken.uid(256)

        refreshTokens[refreshToken] = id
        return { accessToken, refreshToken }
    },

    decodificarAccessToken: (accessToken: string) => {
        const promise = new Promise((resolve, reject) => {
            try {
                const payLoad = jwt.decode(accessToken, params.secretToken)
                resolve(payLoad.id)
            } catch (error) {
               if(error.message.toLowerCase() === "token expired") {
                   reject({
                       status: 401,
                       message: "El token ha expirado"
                   })
               }else {
                   reject({
                       status: 500,
                       message: "El token es invalido"
                   })
               } 
            }
        })
        return promise
    },

    generateNewAccessToken : (refreshToken) => {
        if(refreshTokens[refreshToken]) {
            const payLoad = {
                id: refreshTokens[refreshToken].id,
                iat: moment().unix(),
                exp: moment().add(lifeTime, unidad).unix()
            }
            const accessToken = jwt.encode(payLoad, params.secretToken)

            return { accessToken }
        }

        return { status: 500, message:"El refresh token es invalido"}
    }
}

export { service }


