import { Box, SimpleGrid } from '@chakra-ui/react'
import useSWR from 'swr'
import { IPost } from '@models/IPost.ts'
import { getFetcher } from '@api/getFetcher.ts'
import { PostCard } from '@components/Posts/PostCard.tsx'
import { useState } from 'react'
import { IPaginationModel } from '@models/IPaginationModel.ts'
import { Pagination } from '@components/Pagination.tsx'
import { PostModal } from '@components/Posts/PostModal.tsx'
import { PostsSkeleton } from '@components/Posts/PostsSkeleton.tsx'

function Posts() {
  const [paginationModel, setPaginationModel] = useState<IPaginationModel>({
    page: 0,
    perPage: 10,
  })
  const {
    data: posts,
    isLoading,
    error,
    isValidating,
  } = useSWR<IPost[]>(`/posts?_page=${paginationModel.page + 1}&_limit=${paginationModel.perPage}`, getFetcher, {
    revalidateOnFocus: false,
  })

  if (error) {
    return <>error</>
  }

  return (
    <Box>
      <PostModal/>
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {(isLoading || isValidating) && <PostsSkeleton perPage={paginationModel.perPage}/>}
        {!(isLoading || isValidating) && posts?.map(post => (
          <PostCard
            key={post.id}
            {...post}
          />
        ))}
      </SimpleGrid>
      <Pagination
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
      />
    </Box>
  )
}

export { Posts }