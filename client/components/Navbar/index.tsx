import { useState } from 'react'
import Button from '../Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="container md:flex items-center justify-between bg-white py-4 mx-auto px-4">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          FetherNote
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        ></div>

        <div
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          <Button label="Add Note" />
        </div>
      </div>
    </div>
  )
}
