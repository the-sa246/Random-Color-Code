

const Button = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full flex items-center justify-center mt-5 py-2 sticky bottom-3 left-0">
      <button
        className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-3 px-6 border-2 border-black rounded cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={onClick}
      >
        Refresh Now
      </button>
    </div>
  )
}

export default Button