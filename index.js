require("dotenv").config()
const express = require("express")
const helmet = require("helmet")

const app = express()

app.use(helmet())
app.use(express.json())
const cors = require("cors")

app.use(
  cors({
    origin: "http://127.0.0.1:5500/users/list",
    credentials: true,
  })
)

const PORT = process.env.PORT || 9000

const server = require("./api/server")

server.listen(PORT, () => {
  console.log(`server listening from PORT ${PORT}`)
})
