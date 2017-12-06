//Connect with MongoDB This time I've used mLab as a provider of MongoDB
const userMongo = "admin"
const pswMongo = "123456"
const connectionMongo:string = `mongodb://${userMongo}:${pswMongo}@ds127936.mlab.com:27936/apuratadb`

export { connectionMongo }
