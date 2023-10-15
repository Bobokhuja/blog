import { Box, Heading } from '@chakra-ui/react'

function Header() {
  return (
    <Box bg="orange" py={5}>
      <Heading
        color="white"
        size="2xl"
        fontSize={48}
        textAlign="center"
      >Blog</Heading>
    </Box>
  )
}

export { Header }