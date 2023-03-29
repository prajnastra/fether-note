import axios from 'axios'
import { Notes } from './types'
import { API } from '@/backend'

export const getAllNotes = async () =>
  await axios.get(`${API}/`).then((res) => res.data)
