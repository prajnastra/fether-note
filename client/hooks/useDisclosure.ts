import { useState } from 'react'

export default function useDisclosure() {
  const [open, setOpen] = useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return { open, onOpen, onClose }
}
