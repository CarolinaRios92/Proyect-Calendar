const { Schema, models, model } = require("mongoose");

const EventSchema = new Schema({
    userEmail: {type:String, require:true},
    title: {type:String, require:true},
    color: String,
    description: String,
    inicial_date: {type: String, require:true},
    final_date: {type:String, require:true},
})

export const Event = models?.Event || model("Event", EventSchema)