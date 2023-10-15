import { Box, Heading, Input, SimpleGrid } from '@chakra-ui/react'
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
  const [search, setSearch] = useState('')
  const {
    data: posts,
    isLoading,
    error,
    isValidating,
  } = useSWR<IPost[]>(`/posts?${search ? `title=${search}&` : ''}_page=${paginationModel.page + 1}&_limit=${paginationModel.perPage}`, getFetcher, {
    revalidateOnFocus: false,
  })

  if (error) {
    return <>error</>
  }

  return (
    <Box>
      <PostModal/>
      <Input
        bg="white"
        placeholder="Search..."
        size="lg"
        mb={5}
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
        }}
      />
      {posts && posts.length === 0 && (
        <Heading textAlign="center" my={10}>
          Not found
        </Heading>
      )}
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(48%, 1fr))">
        {(isLoading || isValidating) && <PostsSkeleton perPage={paginationModel.perPage}/>}
        {!(isLoading || isValidating) && posts?.map(post => (
          <PostCard
            key={post.id}
            {...post}
          />
        ))}
      </SimpleGrid>
      {!!posts?.length && posts?.length !== 1 && <Pagination
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
      />}
    </Box>
  )
}

export { Posts }