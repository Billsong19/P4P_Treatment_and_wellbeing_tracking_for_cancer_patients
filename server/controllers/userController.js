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

//takes user_id and reminder_id as params and deletes the associated reminder from the database.
const deleteUserReminder = async (req, res) => {
  try {
    const dbConnect = dbo.getDb();
    const { params } = req;
    const user = await dbConnect
      .collection("User")
      .findOne({ _id: ObjectId(params.user_id) });
    const updatedReminders = user.reminders.filter((r) => {
      return r._id != params.reminder_id;
    });
    console.log(updatedReminders);
    const updatedUser = await dbConnect
      .collection("User")
      .updateOne(
        { _id: ObjectId(params.user_id) },
        { $set: { reminders: updatedReminders } }
      );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postNewReminder = async (req, res) => {
  try {
    console.log("HI");
    const dbConnect = dbo.getDb();
    const { params } = req;
    const user = await dbConnect
      .collection("User")
      .findOne({ _id: ObjectId(params.id) });
    const newReminder = req.body;
    newReminder._id = new ObjectId();
    console.log(user.reminders);
    const updatedUser = await dbConnect
      .collection("User")
      .updateOne(
        { _id: ObjectId(params.id) },
        { $push: { reminders: newReminder } }
      );
    res.status(200).json(updatedUser.result);
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ message: err });
  }
};

const updateReminder = async (req, res) => {
  try {
    const dbConnect = dbo.getDb();
    const { params } = req;
    const user = await dbConnect
      .collection("User")
      .findOne({ _id: ObjectId(params.user_id) });
    const updatedReminder = req.body;
    const updatedUser = await dbConnect.collection("User").updateOne(
      {
        $and: [
          { _id: ObjectId(params.user_id) },
          {
            reminders: { $elemMatch: { _id: ObjectId(params.reminder_id) } },
          },
        ],
      },
      [{ $set: { updatedReminder } }]
    );
    console.log(updatedReminder);
    res.status(200).json(updatedUser.result);
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

//req body should contain the new journal entry: see user.model.js for structure
const postNewJournalEntry = async (req, res) => {
  try {
    const dbConnect = dbo.getDb();
    const { params } = req;
    const user = await dbConnect
      .collection("User")
      .findOne({ _id: ObjectId(params.id) });
    const newJournalEntry = req.body;
    const updatedUser = await dbConnect
      .collection("User")
      .updateOne(
        { _id: ObjectId(params.id) },
        { $push: { journal: newJournalEntry } }
      );
    res.status(200).json(updatedUser.result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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
  deleteUserReminder,
  postNewReminder,
  postNewJournalEntry,
  updateReminder,
};
