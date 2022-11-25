const db = require("../../data/db-config.js")

function getAll() {
  return db("study_list")
}

function getById(id) {
  return db("study_list").where({ id }).first()
}

function addSubject(subject) {
  console.log(subject)
  db("study_list").insert(subject)
  return subject
}

function deleteSubject(id) {
  return db("study_list").where({ id }).del()
}

module.exports = {
  getAll,
  addSubject,
  deleteSubject,
  getById,
}
