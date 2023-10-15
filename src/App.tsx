import { Providers } from '@components/Providers.tsx'
import { Posts } from '@components/Posts'
import { Header } from '@components/Header.tsx'
import { Box, Container } from '@chakra-ui/react'

function App() {
  return (
    <Providers>
      <Box bg="gray.100" minHeight="100vh">
        <Header/>
        <Container py={5} maxW="4xl">
          <Posts/>
        </Container>
      </Box>
    </Providers>
  )
}

export { App }
