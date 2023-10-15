import { PropsWithChildren } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from '@store/index.ts'
import { Provider } from 'react-redux'

function Providers({children}: PropsWithChildren) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </ChakraProvider>
  )
}

export { Providers }