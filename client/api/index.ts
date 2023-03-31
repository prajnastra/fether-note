import axios from 'axios'
import { Notes } from './types'
import { API } from '@/backend'

export const getAllNotes = async (
  route: string
): Promise<Array<{ id: string; title: string; description: string }>> =>
  await axios.get(`${API}${route}`).then((res) => res.data)
