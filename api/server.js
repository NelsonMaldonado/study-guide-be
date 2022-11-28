const express = require("express")
const userRoutes = require("./users/userRouter")
const server = express()
const cors = require("cors")
server.use(express.json())
server.use(
  cors({
    origin: "*",
  })
)
server.use("/users", userRoutes)

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server
