import Card from '../Card'

export default function NotesList() {
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
