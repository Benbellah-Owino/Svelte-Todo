const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/createcustom")
const DB = require("../database/model")
const udb = require("../database/uid")


const createTask = asyncWrapper(async (req, res) => {
    try {

        console.log(req.body)
        const Task = await DB.create(req.body)
        console.log(Task)
        res.status(201).json({ Task })
    } catch (error) {
        console.log(error)
    }
})

const getDoneTasks = asyncWrapper(async (req, res) => {

    try {
        const DoneTasks = await DB.find({ taskDone: true })

        res.status(201).json(DoneTasks)
    } catch (error) {
        console.log(error)
    }
})

const pendingTasks = asyncWrapper(async (req, res) => {
    const pendingTasks = await DB.find({ taskDone: false })

    res.status(201).json(pendingTasks)
})

const deleteTasks = asyncWrapper(async (req, res) => {
    try {
        const { taskId } = req.params


        const deleteTask = await DB.findByIdAndDelete({ _id: taskId })

        if (!deleteTask) {
            deleteTask = await DB.findByIdAndDelete({ tuid: taskId })
            if (!deleteTask) { res.status(404).send(`This task was not found`) }
        }

        res.status(201).json({ deleteTask })
    } catch (error) {
        console.log(error)
    }
})

const doTask = asyncWrapper(async (req, res) => {
    try {
        const { taskId } = req.params

        const updatedTask = await DB.findOneAndUpdate({ _id: taskId }, { taskDone: true }, { new: true })

        if (!updatedTask) {
            updatedTask = await DB.findOneAndUpdate({ tuid: taskId }, { taskDone: true }, { new: true })
        }

        res.status(201).json(updatedTask)
    } catch (error) {

    }
})
module.exports = {
    createTask,
    getDoneTasks,
    pendingTasks,
    deleteTasks,
    doTask,
}