import { axiosInstance } from '@api/axiosInstance.ts'

export async function getFetcher(url: string) {
  const response = await axiosInstance.get(url)
  return response.data
}
