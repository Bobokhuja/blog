import { Card, CardBody, CardFooter, CardHeader, Skeleton, SkeletonText } from '@chakra-ui/react'

function PostCardSkeleton() {
  return (
    <Card boxShadow="2xl">
      <CardHeader>
        <SkeletonText noOfLines={2} skeletonHeight={4}/>
      </CardHeader>
      <CardBody>
        <SkeletonText noOfLines={3} skeletonHeight={3}/>
      </CardBody>
      <CardFooter>
        <Skeleton
          height={10}
          w={130}
        />
      </CardFooter>
    </Card>
  )
}

export { PostCardSkeleton }