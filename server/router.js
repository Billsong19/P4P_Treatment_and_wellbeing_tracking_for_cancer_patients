const express = require("express");
const userController = require("./controllers/userController");

const router = express.Router();

router.get("/userDetails/:id", userController.getUserDetails);

router.get("/userReminders/:id", userController.getUserReminders);

router.get("/userJournal/:id", userController.getUserJournal);

router.get("/cancerInfo", userController.getCancerInfo);

router.delete(
  "/userReminders/:user_id/:reminder_id",
  userController.deleteUserReminder
);

router.post("/userReminders/:id", userController.postNewReminder);

router.put(
  "/userReminders/:user_id/:reminder_id",
  userController.updateReminder
);

router.post("/userJournal/:id", userController.postNewJournalEntry);

router.get("/", async (req, res) => {
  res.send("Hello World!");
});

router.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "etsa2/build", "index.html"));
});

module.exports = router;
