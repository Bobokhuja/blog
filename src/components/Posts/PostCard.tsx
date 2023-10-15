import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import { useAppDispatch } from '@store/hooks.ts'
import { openPost } from '@components/Posts/postSlice.ts'
import { IPost } from '@models/IPost.ts'

function PostCard(props: IPost) {
  const {title, body} = props
  const dispatch = useAppDispatch()

  return (
    <Card boxShadow="2xl">
      <CardHeader>
        <Heading size="md" noOfLines={2}>{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text noOfLines={3}>{body}</Text>
      </CardBody>
      <CardFooter>
        <Button
          onClick={() => dispatch(openPost(props))}
        >Open</Button>
      </CardFooter>
    </Card>
  )
}

export { PostCard }