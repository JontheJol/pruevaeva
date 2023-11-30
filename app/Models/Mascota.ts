import { DateTime } from 'luxon'
import { BaseModel,BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
export default class Mascota extends BaseModel {
  @column({ isPrimary: true })
  public idMascotas: number

  @column()
  public nombre: string

  @column()
  public dueño: number

  @column()
  public RazaPeso: string

  @column()
  public altura: string


  @belongsTo(() => User, {
    foreignKey: 'dueño' // Specify the name of the relationship column
  })
  public owner: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
