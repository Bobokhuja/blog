import { Grid } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <Grid bg='tomato' w='100%' p={4} color='white'>
      <Outlet />
    </Grid>
  )
}

export { Layout }