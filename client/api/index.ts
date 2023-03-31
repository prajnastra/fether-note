import axios from 'axios'
import { Note } from './types'
import { API } from '@/backend'

export const getAllNotes = async (route: string): Promise<Array<Note>> =>
  await axios.get(`${API}${route}`).then((res) => res.data)

export const addNoteAPI = async (
  route: string,
  { arg }: { arg: Note }
): Promise<Note> =>
  await axios.post(`${API}${route}`, arg).then((res) => res.data)
