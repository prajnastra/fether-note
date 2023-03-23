import Button from '../Button'

export default function Navbar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FetherNote
          </span>
        </a>

        <div className="flex md:order-2">
          <Button label="Paste Note" />
        </div>
      </div>
    </nav>
  )
}
