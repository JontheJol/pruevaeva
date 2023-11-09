import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
import User from 'App/Models/User'

export default class PostSeeder extends BaseSeeder {
  public async run () {
    // Encuentra o crea los usuarios
    const user1 = await User.firstOrCreate({ email: 'ejemplo1@example.com' }, {
      email: 'ejemplo1@example.com',
      password: 'contrasena123',
      name: 'Ejemplo 1',
      edad: 25,
    })

    const user2 = await User.firstOrCreate({ email: 'ejemplo2@example.com' }, {
      email: 'ejemplo2@example.com',
      password: 'contrasena456',
      name: 'Ejemplo 2',
      edad: 30,
    })

    const user3 = await User.firstOrCreate({ email: 'ejemplo3@example.com' }, {
      email: 'ejemplo3@example.com',
      password: 'contrasena789',
      name: 'Ejemplo 3',
      edad: 15,
    })

    await Post.createMany([
      {
        post: 'Esta es una publicación del Usuario 1',
        userId: user1.id,
      },
      {
        post: 'Otra publicación del Usuario 1',
        userId: user1.id,
      },
      {
        post: 'Esta es una publicación del Usuario 2',
        userId: user2.id,
      },
      {
        post: 'Otra publicación del Usuario 2',
        userId: user2.id,
      },
      {
        post: 'Esta es una publicación del Usuario 3',
        userId: user3.id,
      },
      {
        post: 'Otra publicación del Usuario 3',
        userId: user3.id,
      },
      // Puedes agregar más publicaciones si lo deseas
    ])
  }
}
