import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserPreloadsController {
  public async index({response}: HttpContextContract) {

      const users = await User.query()
        .preload('post')
        .preload('comment')
        .exec()

      return response.json(users)

  }
  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
