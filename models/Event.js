const { Schema, models, model } = require("mongoose");

const EventSchema = new Schema({
    userEmail: {type:String, require:true},
    title: {type:String, require:true, unique:true},
    color: String,
    description: String,
    inicial_date: {type:Date, require:true},
    final_date: {type:Date, require:true},
})

export const Event = models?.Event || model("Event", EventSchema)