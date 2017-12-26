const params = {
    port: process.env.PORT,
    environment: process.env.ENV,
    secretSession: process.env.SECRET_SESSION,
    mongoUrl: process.env.MONGOURL,
    user: process.env.USER,
    pwd: process.env.PWD,
    secretToken: process.env.SECRET_TOKEN
}

export { params }