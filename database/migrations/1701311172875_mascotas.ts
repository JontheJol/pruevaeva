import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'mascotas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idMascotas').primary();
      table.string('nombre').notNullable();
      table.integer('dueño').unsigned().references('id').inTable('users');
      table.string('RazaPeso');
      table.string('altura');
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
