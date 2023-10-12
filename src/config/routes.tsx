import { IRoute } from '../models/IRoute.ts'
import { MainPage } from '../pages/MainPage.tsx'

export const routes: IRoute[] = [
  {
    path: '/',
    element: <MainPage/>,
  },

  /** not fount*/
  {
    path: '*',
    element: <>Not Found 404</>,
  },
]