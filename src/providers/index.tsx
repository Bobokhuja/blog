import { PropsWithChildren } from 'react'
import { RouterProvider } from './RouterProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

function Providers({children}: PropsWithChildren) {
  return (
    <BrowserRouter>
      <RouterProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </RouterProvider>
    </BrowserRouter>
  )
}

export { Providers }