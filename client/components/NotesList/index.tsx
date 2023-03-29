import useSwr from 'swr'

import Card from '../Card'
import { getAllNotes } from '@/api'

export default function NotesList() {
  const { data, isLoading } = useSwr('', getAllNotes)
  console.log({ isLoading })
  console.log({ data })
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array(15)
        .fill(8)
        .map((elem, idx) => (
          <Card key={idx} />
        ))}
    </div>
  )
}
