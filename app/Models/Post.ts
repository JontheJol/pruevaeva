import { DateTime } from 'luxon'
import { hasMany, HasMany, BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Comment from './Comment'
import User from './User'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public post: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Comment)
  public comment: HasMany<typeof Comment>

  @column()
public userId: number
  @belongsTo(() => User, {
    foreignKey: 'user_id' // Aquí especifica el nombre de la columna de la relación
  })
  public user: BelongsTo<typeof User>

}
