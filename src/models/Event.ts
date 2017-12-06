import * as mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    clickOnButtonSubmit: {
        type: Date,
        default: Date.now
    },
    clickOnDniCamera:{
        type: Date,
        default: Date.now
    },
    clickOnSignCamera: {
        type: Date,
        default: Date.now
    },
    clickOnLoginFb: {
        type: Date,
        default: Date.now
    }
})

const EventSchema = mongoose.model("Event", Schema)

export default EventSchema