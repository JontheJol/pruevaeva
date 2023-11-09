import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  async handle({ params, request, response }: HttpContextContract) {
    const method = request.method();

    switch (method) {
      case 'GET':
        const users = await User.all()
        return response.json(users)

        case 'POST':
          const postSchema = schema.create({
            email: schema.string({}, [
              rules.email(),
              rules.minLength(8)
            ]),
            password: schema.string(),
            name: schema.string(),
            edad: schema.number([rules.range(18, 99)]),
          });
          const payload = await request.validate({ schema: postSchema });
          const newUser = await User.create(payload)
          return response.status(201).json(newUser)

          /*
          {
            "email": "correo@ejemplo.com",
            "password": "contraseña",
            "name": "Nombre del usuario",
            "edad": 25
          }
          */


      case 'DELETE':
        const userId = params.id;
        const userToDelete = await User.findOrFail(userId);
        await userToDelete.delete();
        return response.status(200).json({error:'Usuario eliminado', usuario: userToDelete})


        case 'PUT':
          const putSchema = schema.create({
            email: schema.string.optional({}, [
              rules.email(),
              rules.minLength(8)
            ]),
            password: schema.string.optional(),
            name: schema.string.optional(),
            edad: schema.number.optional([rules.range(18, 99)]),
          });

          const putData = await request.validate({ schema: putSchema });

          const userIdToUpdate = params.id;
          const userToUpdate = await User.findOrFail(userIdToUpdate);
          if (!userToUpdate) return response.status(400).json({ error: 'id no existe' });

          userToUpdate.merge(putData);
          await userToUpdate.save();
          return response.json(userToUpdate);
    }
  }
}
