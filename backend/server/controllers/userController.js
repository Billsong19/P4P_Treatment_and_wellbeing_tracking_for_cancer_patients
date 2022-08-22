const User = require("../../models/user.model.js");
const dbo = require("../../db/conn");
const ObjectId = require("mongodb").ObjectID;

//TODO connect to db, get routes to point to this file

const getUserDetails = async (req, res) => {
    try {
        const dbConnect = dbo.getDb();
        const { params } = req;
        const userDetails = await dbConnect
            .collection("User")
            .findOne({ _id: ObjectId(params.id) });

        console.log(userDetails);
        res.status(200).json(userDetails);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getUserReminders = async (req, res) => {
    try {
        const dbConnect = dbo.getDb();
        const { params } = req;
        const user = await dbConnect
            .collection("User")
            .findOne({ _id: ObjectId(params.id) });
        res.status(200).json(user.reminders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getUserJournal = async (req, res) => {
    try {
        const dbConnect = dbo.getDb();
        const { params } = req;
        const user = await dbConnect
            .collection("User")
            .findOne({ _id: ObjectId(params.id) });
        res.status(200).json(user.journal);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//???
const getCancerInfo = async (req, res) => {
    try {
        const { params } = req;
        const cancerInfo = await user.findOne({ id: params.id });
        res.status(200).json(user.condition);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getUserDetails,
    getUserReminders,
    getUserJournal,
    getCancerInfo,
};
