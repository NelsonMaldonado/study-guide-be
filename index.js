require("dotenv").config()
const express = require("express")
const server = require("./api/server")
server.use(express.json())

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
  console.log(`server listening from PORT ${PORT}`)
})
