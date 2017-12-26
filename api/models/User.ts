import * as mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    idFacebook: {
        type: String,
        default: "Unknown"
    },
    first_name: {
        type: String,
        default: "Unknown"
    },
    last_name: {
        type: String,
        default: "Unknown"
    },
    dni: {
        type: String,
        default: "Unknown"
    },
    ruc: {
        type: String,
        default: "Unknown"
    },
    email: {
        type: String,
        default: "Unknown@unknown.com"
    },
    cellphone: {
        type: String,
        default: "xxxxxxxxx"
    },
    username: {
        type: String,
        default: "unknown"
    },
    password: {
        type: String,
        default: "unknown"
    },
    funding_status: {
        type: String,
        default: "unknown"  
    },
    approval_status:{
        type: String,
        default: "unknown"  
    }
})

//The third paramerte let us to create a collection with a name in singular
const User = mongoose.model("User", Schema)

export default User