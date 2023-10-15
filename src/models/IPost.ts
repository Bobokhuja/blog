import { IUser } from '@models/IUser.ts'

export interface IPost {
  id: number
  userId: number
  title: string
  body: string
}

export interface PostWithUser extends IPost{
  user: IUser
}