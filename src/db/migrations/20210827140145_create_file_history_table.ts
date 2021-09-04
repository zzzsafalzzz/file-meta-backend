import * as Knex from 'knex';

/**
 * Create file_history table.
 *
 * @param {Knex} knex
 * @returns {Knex.SchemaBuilder}
 */
export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable('file_history', (table) => {
    table.increments('id').primary();
    table.string('file_name');
    table.string('file_type');
    table.integer('file_size').unsigned();
    table.dateTime('last_modified');
    table.timestamps(true, true);
  });
}

/**
 * Drop file_history table.
 *
 * @param {Knex} knex
 * @returns {Knex.SchemaBuilder}
 */
export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable('file_history');
}
