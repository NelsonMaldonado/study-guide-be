/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("study_list")
    .truncate()
    .then(function () {
      return knex("study_list").insert([
        { title: "JavaScript", paragraph: "High Level Language" },
        { title: "Backend", paragraph: "What goes on behind the scenes" },
      ])
    })
}
