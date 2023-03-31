import useSwr from 'swr'

import Card from '../Card'
import Loader from '../Loader'

import { getAllNotes } from '@/api'

export default function NotesList() {
  const { data, isLoading } = useSwr('/', getAllNotes)

  return (
    <>
      {isLoading && <Loader />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.isArray(data) &&
          data.map((dat, idx) => <Card key={idx} data={dat} />)}
      </div>
    </>
  )
}
