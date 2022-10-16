const User = require("../../models/user.model.js");
const dbo = require("../../db/conn");
const ObjectId = require("mongodb").ObjectID;
const mongodb = require("mongodb");

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

    user.last_updated = new Date();
    await dbConnect.collection("User").save(user);

    const newReminder = req.body;
    console.log(newReminder);

    if (mongodb.ObjectID.isValid(newReminder._id)) {
      newReminder._id = ObjectId(newReminder._id);
    } else {
      newReminder._id = new ObjectId();
    }

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
    const { params, body } = req;

    newReminder = body;
    newReminder._id = ObjectId(params.reminder_id);

    const updatedUser = await dbConnect.collection("User").findOne({
      _id: ObjectId(params.user_id),
    });

    const reminderToUpdate = await updatedUser.reminders.find((r) => {
      return JSON.stringify(r._id) === JSON.stringify(params.reminder_id);
    });

    reminderToUpdate._id = ObjectId(params.reminder_id);
    reminderToUpdate.title = newReminder.title;
    reminderToUpdate.complete = newReminder.complete;
    reminderToUpdate.details = newReminder.details;
    reminderToUpdate.date_time = newReminder.date_time;
    reminderToUpdate.frequency = newReminder.frequency;

    updatedUser.last_updated = new Date();

    await dbConnect.collection("User").save(updatedUser);

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//_id field in body is a string, not an ObjectId
// sample body:
// {
//   "reminders":
//   [
//       {
//       "_id":"633eb0e8ec83a8000497bba6",
//       "title": "Take medicine",
//       "complete": false,
//       "frequency": 2,
//       "date_time": "2022-10-05T21:00:52.307Z",
//       "details": "two 50mg tablets"
//       },
//       {
//       "_id":"754eb0e8ec83a8000497bba6",
//       "title": "JELLO",
//       "complete": false,
//       "frequency": 2,
//       "date_time": "2022-10-05T21:00:52.307Z",
//       "details": "two 50mg tablets"
//       }
//   ]
// }

const updateAllReminders = async (req, res) => {
  try {
    const dbConnect = dbo.getDb();
    const { params, body } = req;

    newReminders = body.reminders;

    newReminders.forEach((element) => {
      element._id = ObjectId(element._id);
    });

    const updatedUser = await dbConnect
      .collection("User")
      .updateOne(
        { _id: ObjectId(params.id) },
        { $set: { reminders: newReminders, last_updated: new Date() } }
      );

    res.status(200).json(updatedUser);
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

    user.last_updated = new Date();
    dbConnect.collection("User").save(user);

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
  updateAllReminders,
};
