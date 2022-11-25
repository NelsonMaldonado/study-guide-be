const express = require("express")
const dbConfig = require("../../data/db-config")
const helpers = require("./model")
const router = express.Router()

router.get("/list", (req, res, next) => {
  helpers
    .getAll()
    .then((item) => {
      res.status(200).json(item)
    })
    .catch(next)
})

router.get("/list/:id", (req, res, next) => {
  const { id } = req.params
  helpers.getById(id).then((item) => {
    if (item) {
      res.json(item)
    } else {
      res.status(404).json({ err: "invalid item id" })
    }
  })
})

router.post("/post", (req, res, next) => {
  console.log(req)
  res.status(201).send("Working Post")

  // helpers
  //   .addSubject(req.body)
  //   .then((subject) => {
  //     res.status(201).json(subject)
  //   })
  //   .catch(next)
})

router.delete("/list/:id", (req, res, next) => {
  console.log(req.params)
  helpers
    .deleteSubject(req.params.id)
    .then((count) => {
      if (count > 0) {
        res.status(204).end()
      } else {
        res.status(404).json({ message: "Record not found" })
      }
    })
    .catch(next)
})
// router.get("/", (req, res) => {
//   const subjects = [
//     { id: 1, title: "JASON", paragraph: "What is JASON, write it here" },
//     { id: 2, title: "API", paragraph: "Application Programming Interface" },
//     {
//       id: 3,
//       title: "Data Persistence",
//       paragraph:
//         "Infrequntly accessed and not likely to be modified, data we know is safe and stays the same unlesss we explicity change or remove it",
//     },
//     {
//       id: 4,
//       title: "What is a database",
//       paragraph:
//         "Relational databases, Document databases, Graph databases. Relational database - they are frequently used,  efficient data management, force good practices, time tested, valued skill by employers",
//     },
//     {
//       id: 5,
//       title: "Scheema",
//       paragraph: "What the data looks like",
//     },
//     {
//       id: 6,
//       title: "How is a database relational?",
//       paragraph:
//         "These kind of databases are relational because relation is a mathematical idea equivalent to a table, So relational databases are databases that store their data in tables.",
//     },
//     {
//       id: 7,
//       title: "SQL - (Structured Query Language",
//       paragraph:
//         "How we access and interact with a database, SQL is also relational database specific, it is not a programming language, executes one specific purpose: queries, efficient for data retrieval & allows scalability",
//     },
//     {
//       id: 8,
//       title: "SQL - Methods",
//       paragraph:
//         "QUERY | Select <selection> from <table name>, INSERT | inset into <table name> (<selection>) values (<values>), MODIFY | update <table name> set <field> = <value> where <condition>, DELETE | delete from <table name> where <condition>",
//     },
//   ]
//   res.status(200).json(subjects)
// })

// router.post("/", (req, res) => {
//   res.status(200).send("hello from the POST /users endpoint.")
// })

router.use("*", (req, res) => {
  res.status(400).json({
    message: "not found",
  })
})

module.exports = router
