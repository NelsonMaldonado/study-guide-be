const db = require("../../data/db-config.js")

function getAll() {
  return db("study_list")
}

async function addSubject(subject) {
  console.log(subject)
  const [id] = await db("study_list").insert(subject)
  return getAll().where({ id }).first()
}

function deleteSubject(id) {
  return db("study_list").where({ id }).del()
}

module.exports = {
  getAll,
  addSubject,
  deleteSubject,
}
