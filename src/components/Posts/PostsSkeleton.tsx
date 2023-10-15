import { PostCardSkeleton } from '@components/Posts/PostCardSkeleton.tsx'

interface Props {
  perPage: number
}

function PostsSkeleton({perPage}: Props) {
  return (
    <>
      {Array(perPage).fill('').map((_, index) => (
        <PostCardSkeleton key={index}/>
      ))}
    </>
  )
}

export { PostsSkeleton }