// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VerboController {
  public index ({ request, response }: HttpContextContract) {
    const method = request.method()
    return response.json({ verbo: method })
  }
}
