const express = require("express");
const userController = require("./controllers/userController");

const router = express.Router();

router.get("/userDetails/:id", userController.getUserDetails);

router.get("/userReminders/:id", userController.getUserReminders);

router.get("/userJournal/:id", userController.getUserJournal);

router.get("/cancerInfo", userController.getCancerInfo);

router.get("/get", async (req, res) => {
    res.send("Hello World!");
});

module.exports = router;
