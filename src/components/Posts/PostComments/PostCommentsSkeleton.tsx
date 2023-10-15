import { PostCommentSkeleton } from '@components/Posts/PostComments/PostCommentSkeleton.tsx'
import { GridItem } from '@chakra-ui/react'

interface Props {
  count: number
}

function PostCommentsSkeleton({count}: Props) {
  return (
    <>
      {Array(count).fill('').map((_, index) => (
        <GridItem key={index} mb={5}>
          <PostCommentSkeleton/>
        </GridItem>
      ))}
    </>
  )
}

export { PostCommentsSkeleton }