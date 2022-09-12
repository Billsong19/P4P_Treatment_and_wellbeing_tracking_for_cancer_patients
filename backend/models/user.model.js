//user schema for mongodb
const { mongoose, Schema } = require("mongoose");

const contact = new Schema({
    title: String,
    name: { type: String, required: true },
    email: String,
    phone: { type: Number, required: true },
});

const reminder = new Schema({
    title: { type: String, required: true },
    start_date: { type: Date, required: true },
    frequency: {
        type: String,
        required: true,
        enum: ["once", "daily", "weekly", "monthly"],
    },
    description: String,
    completed: { type: Boolean, default: false },
});

const symptomEntry = new Schema({
    symptom: { type: String, required: true },
    strength: {
        type: String,
        required: true,
        enum: ["none", "mild", "moderate", "severe"],
    },
});

const journalEntry = new Schema({
    phys_wlbing_rating: { type: Number, required: true, min: 1, max: 7 },
    ment_wlbing_rating: { type: Number, required: true, min: 1, max: 7 },
    date: { type: Date, required: true },
    symptoms: [symptomEntry],
});

const user = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    condition: {
        cancer_type: {
            type: String,
            enum: [
                "Bowel",
                "Lung",
                "Breast",
                "Colon",
                "Prostate",
                "Bladder",
                "Skin",
                "Other",
            ],
        },
        cancer_stage: { type: String },
        last_update_date: { type: Date },
        treatment_period: { type: Number },
    },
    contacts: [contact],
    journal: [journalEntry],
    reminders: [reminder],
});

module.exports = mongoose.model("User", user);
