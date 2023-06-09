import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'

import Button from '../Button'
import Modal from '../Modal'
import PasteNote from '../PasteNote'

import { useDisclosure } from '@/hooks'

export default function Navbar() {
  const { open, onOpen, onClose } = useDisclosure()

  return (
    <nav className="bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FetherNote
          </span>
        </Link>

        <div className="flex md:order-2">
          <Button label="Paste Note" onClick={onOpen}>
            <FaPlus className="w-4 h-4 ml-2 -mr-1 inline" />
          </Button>
          {open && (
            <Modal onClose={onClose} title="Paste Note">
              <PasteNote />
            </Modal>
          )}
        </div>
      </div>
    </nav>
  )
}
