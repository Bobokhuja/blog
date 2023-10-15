import { Card, CardBody, CardHeader, SkeletonText } from '@chakra-ui/react'

function PostCommentSkeleton() {
  return (
    <Card>
      <CardHeader pb={2} fontSize={13} color="gray">
        <SkeletonText/>
      </CardHeader>
      <CardBody pt={0}>
        <SkeletonText/>
      </CardBody>
    </Card>
  )
}

export { PostCommentSkeleton }
