import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react'
import { IPostComment } from '@models/IPostComment.ts'

function PostComment({name, body, email}: IPostComment) {
  return (
    <Card boxShadow="md">
      <CardHeader pb={2} fontSize={13} color="gray">{name} &lt;{email}&gt;</CardHeader>
      <CardBody pt={0}>
        <Text fontSize={14}>{body}</Text>
      </CardBody>
    </Card>
  )
}

export { PostComment }
