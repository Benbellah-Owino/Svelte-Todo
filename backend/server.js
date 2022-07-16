const express = require("express")
const app = express()
require("dotenv").config()
const notFoundMiddleware = require('./middleware/notfound');
const errorHandlerMiddleware = require('./middleware/error-handler');
const cors = require("cors")
const asyncWrapper = require("./middleware/async")

const tasks = require("./routes/router")

const connectDB = require("./database/connectDB")
const udb = require("./database/uid")

//Getting values .env
const port = process.env.PORT || 5000
const uri = process.env.MONGO_URI

app.use(cors())
app.use(express.json())

//Defining my routes
app.use("/api/sv1/tasks", tasks)

//Setting up error middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const start = async () => {
    try {
        console.log(`Connecting to db...`)

        await connectDB(uri)
        console.log(`Connected to db Successfully (:-)`)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()