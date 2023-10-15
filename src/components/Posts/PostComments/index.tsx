import { IPostComment } from '@models/IPostComment.ts'
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import { PostComment } from '@components/Posts/PostComments/PostComment.tsx'
import { PostCommentsSkeleton } from '@components/Posts/PostComments/PostCommentsSkeleton.tsx'

interface Props {
  isLoading: boolean
  comments?: IPostComment[]
}

function PostComments({comments, isLoading}: Props) {

  return (
    <>
      <Heading mb={3} size="xs">Comments</Heading>
      <Box w="100%">
        <Grid>
          {isLoading && <PostCommentsSkeleton count={3}/>}
          {!isLoading && comments?.map(comment => (
            <GridItem mb={5} key={comment.id}>
              <PostComment{...comment}/>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>

  )
}

export { PostComments }