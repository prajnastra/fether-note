import useSWRMutation from 'swr/mutation'
import { customAlphabet } from 'nanoid'
import { useForm, SubmitHandler } from 'react-hook-form'

import { addNoteAPI } from '@/api'

interface Inputs {
  id: string
  title: string
  description: string
}

const nanoid = customAlphabet('1234567890abcdef', 10)

export default function PasteNote() {
  const { trigger, isMutating } = useSWRMutation('/', addNoteAPI)
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      id: nanoid(),
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await trigger(data)
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Note title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Lorem ipsam"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          {...register('title', { required: true })}
          disabled={isMutating}
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Note description
        </label>
        <textarea
          id="description"
          rows={5}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="..."
          {...register('description', { required: true })}
          disabled={isMutating}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isMutating}
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Paste it
      </button>
    </form>
  )
}
