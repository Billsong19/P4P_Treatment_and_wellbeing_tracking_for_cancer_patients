//database schema for cancer information in mongodb
import mongoose, { Schema, model } from "mongoose";

const cancerInfo = new Schema({
    cancer_type: { type: String },
    overview: { type: String },
    chance_of_recovery: { type: String },
    course_of_disease: { type: String },
    treatment: { type: String },
    risks: { type: String },
});

export const CancerInfo = mongoose.model("CancerInfo", cancerInfo);
