import { IPost } from '@models/IPost.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostState {
  post: IPost | null
}

const initialState: PostState = {
  post: null,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    openPost(state, action: PayloadAction<IPost>) {
      state.post = action.payload
    },
    closePost(state) {
      state.post = null
    },
  },
})

export const {openPost, closePost} = postSlice.actions