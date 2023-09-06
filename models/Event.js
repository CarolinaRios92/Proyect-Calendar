const { Schema, models, model } = require("mongoose");

const EventSchema = new Schema({
    userEmail: {type:String, required:true},
    title: {type:String, required:true},
    color: {type:String, default: "#9896f1"},
    description: String,
    inicial_date: {type:Object, required: true},
    final_date: {type:Object, required: true},
    reminder: Boolean,
})

export const Event = models?.Event || model("Event", EventSchema);