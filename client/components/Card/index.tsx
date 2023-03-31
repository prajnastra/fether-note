import { FaTrash } from 'react-icons/fa'

import { DangerButton } from '../Button'

interface Props {
  data: {
    id: string
    title: string
    description: string
  }
}

export default function Card({ data }: Props) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {data.description}
      </p>
      <DangerButton label="Delete">
        <FaTrash className="w-4 h-4 ml-2 -mr-1 inline" />
      </DangerButton>
    </div>
  )
}
