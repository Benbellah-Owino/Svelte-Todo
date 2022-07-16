const express = require("express");
const router = express.Router()

const { createTask, getDoneTasks, pendingTasks, deleteTasks, doTask } = require("../controllers/control")

router.route("/new").post(createTask)
router.route("/done").get(getDoneTasks)
router.route("/pending").get(pendingTasks)
router.route("/:taskId").delete(deleteTasks).patch(doTask)

module.exports = router
