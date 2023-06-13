const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/users").default;
router.get("/get-all-users", userControllers.getAllUsers);
router.get("/getUser/:userId", userControllers.getUserById);
router.get("/getUserByNameAndAge", userControllers.getUserByNameAndAge);
router.post("/createUser", userControllers.createUser);
router.post("/createManyUsers", userControllers.createManyUsers);

module.exports = router;
