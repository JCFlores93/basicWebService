import * as mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    photo_DNI: {
        location:{
            type: String,
            default:"there's no location"
        },
        image:{
            type: String,
            default: ""
        }
    },
    photo_sign: {
        location:{
            type: String,
            default:"there's no location"
        },
        image:{
            type: String,
            default: ""
        }
    },
    steps: {
        type: Number,
        default: 0
    },
    code_pin:{
        type: String,
        default: ""
    },
    bank_account: {
        type: String,
        default: ""
    },
    amount: {
        type: Number,
        default: ""
    },
    location_declared:{
        type: String,
        default:"At home"
    }
})

const Lend = mongoose.model("Lend", Schema)

export default Lend