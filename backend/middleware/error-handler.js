const { CustomAPIError } = require("../errors/createcustom")

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: "Something went Wrong, please try agian" })
}

module.exports = errorHandlerMiddleware;