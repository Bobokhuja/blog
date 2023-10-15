import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Skeleton,
  Text
} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@store/hooks.ts'
import { closePost } from '@components/Posts/postSlice.ts'
import useSWR from 'swr'
import { IUser } from '@models/IUser.ts'
import { getFetcher } from '@api/getFetcher.ts'
import { useEffect } from 'react'

function PostModal() {
  const {post} = useAppSelector(state => state.post)

  const {
    data: user,
    isLoading,
    mutate,
  } = useSWR<IUser>(`/users/${post?.userId}`, getFetcher, {
    isPaused: () => {
      return !post?.userId
    }
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    mutate()
  }, [post])

  const onClose = () => {
    dispatch(closePost())
  }

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={!!post}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader maxW="sm">{post?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" alignItems="center">
            <Text mr={2}>Author:</Text>
            <Skeleton
              isLoaded={!isLoading}
              width={120}
              height={6}
              noOfLines={1}
            >
              {user && user.name}
            </Skeleton>
          </Box>
          <Text>{post?.body}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export { PostModal }