import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'ejemplo1@example.com',
        password: 'contrasema123',
        name: 'Ejemplo 1',
        edad: 25,
      },
      {
        email: 'ejemplo2@example.com',
        password: 'contrasena456',
        name: 'Ejemplo 2',
        edad: 30,
      },
      {
        email: 'ejemplo3@example.com',
        password: 'contrasena789',
        name: 'Ejemplo 3',
        edad: 15,
      },
    ])
  }
}
