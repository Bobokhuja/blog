import { Route, Routes } from 'react-router-dom'
import { Layout } from '../components/Layout.tsx'
import { PropsWithChildren } from 'react'
import { routes } from '../config/routes.tsx'

function RouterProvider({children}: PropsWithChildren) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {routes.map(({path, element}) => (
            <Route key={path} path={path} element={element}/>
          ))}
        </Route>
      </Routes>
      {children}
    </>
  )
}

export { RouterProvider }