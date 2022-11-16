/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // The change we want to make to our schema
  return knex.schema.createTable("study_list", (tbl) => {
    tbl.increments()
    tbl.text("title", 128).unique().notNullable()
    tbl.text("paragraph").notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("study_list")
}
