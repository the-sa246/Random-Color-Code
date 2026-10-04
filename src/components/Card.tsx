

const Card = (props: { color: string; onCopy: (color: string) => void }) => {
  return (
    <div
      onClick={() => props.onCopy(props.color)}
      className="w-40 h-45 bg-gray-100 flex items-center justify-center flex-col gap-2 rounded-2xl border-2 border-black cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="w-30 h-30 border rounded-md" style={{ backgroundColor: props.color }}></div>
      <h1 className="font-bold text-lg">{props.color}</h1>
    </div>
  )
}

export default Card