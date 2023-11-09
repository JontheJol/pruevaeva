import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import User from './User'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public comment: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
public postId: number
@column()
public userId: number
  @belongsTo(() => Post, {
    foreignKey: 'post_id' // Aquí especifica el nombre de la columna de la relación
  })
  public post: BelongsTo<typeof Post>

  @belongsTo(() => User, {
    foreignKey: 'userid' // Aquí especifica el nombre de la columna de la relación
  })
  public user: BelongsTo<typeof User>



}
