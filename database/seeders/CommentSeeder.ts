import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comment from 'App/Models/Comment'
import Post from 'App/Models/Post'
import User from 'App/Models/User'

export default class CommentSeeder extends BaseSeeder {
  public async run () {
    // Encuentra o crea las publicaciones
    const post1 = await Post.firstOrCreate({ post: 'Esta es una publicación del Usuario 1' })
    const post2 = await Post.firstOrCreate({ post: 'Otra publicación del Usuario 1' })
    const post3 = await Post.firstOrCreate({ post: 'Esta es una publicación del Usuario 2' })
    const post4 = await Post.firstOrCreate({ post: 'Otra publicación del Usuario 2' })
    const post5 = await Post.firstOrCreate({ post: 'Esta es una publicación del Usuario 3' })
    const post6 = await Post.firstOrCreate({ post: 'Otra publicación del Usuario 3' })

    // Encuentra o crea los usuarios
    const user1 = await User.firstOrCreate({ email: 'usuario1@example.com' }, {
      email: 'usuario1@example.com',
      password: 'contrasena123',
      name: 'Usuario 1',
      edad: 25,
    })

    const user2 = await User.firstOrCreate({ email: 'usuario2@example.com' }, {
      email: 'usuario2@example.com',
      password: 'contrasena456',
      name: 'Usuario 2',
      edad: 30,
    })

    const user3 = await User.firstOrCreate({ email: 'usuario3@example.com' }, {
      email: 'ejemplo3@example.com',
        password: 'contrasena789',
        name: 'Ejemplo 3',
        edad: 15,
    })

    await Comment.createMany([
      {
        comment: 'Este es un comentario para la publicación 1 del Usuario 1',
        postId: post1.id,
        userId: user1.id,
      },
      {
        comment: 'Este es otro comentario para la publicación 1 del Usuario 1',
        postId: post1.id,
        userId: user1.id,
      },
      {
        comment: 'Un comentario para la publicación 2 del Usuario 1',
        postId: post2.id,
        userId: user1.id,
      },
      {
        comment: 'Este es un comentario para la publicación 1 del Usuario 2',
        postId: post3.id,
        userId: user2.id,
      },
      {
        comment: 'Otro comentario para la publicación 1 del Usuario 2',
        postId: post3.id,
        userId: user2.id,
      },
      {
        comment: 'Un comentario para la publicación 2 del Usuario 2',
        postId: post4.id,
        userId: user2.id,
      },
      {
        comment: 'Un comentario para la publicación 1 del Usuario 3',
        postId: post5.id,
        userId: user3.id,
      },
      {
        comment: 'Este es otro comentario para la publicación 1 del Usuario 3',
        postId: post5.id,
        userId: user3.id,
      },
      {
        comment: 'Un comentario para la publicación 2 del Usuario 3',
        postId: post6.id,
        userId: user3.id,
      },
      // Puedes agregar más comentarios si lo deseas
    ])
  }
}
