import { useEffect, useState, type JSX } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

const App = () => {

  const maxColors = 36

  const generateRandomColor = ():string => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    return `#${randomColor.padStart(6, '0')}`.toUpperCase()
  }

  const [colorCode, setColorCode] = useState<string[]>([])

  const generateColorCodes = (): void => {
    const colors: string[] = []
    for (let i = 0; i < maxColors; i++) {
      colors.push(generateRandomColor())
    }
    setColorCode(colors)
  }

  useEffect(() => {
    generateColorCodes()
  }, [])

  const copyToClipboard = (color: string): void => {
    navigator.clipboard.writeText(color)
      .then(() => {
        alert(`Copied ${color} to clipboard!`)
      })
      .catch((error) => {
        console.error('Failed to copy color code:', error)
      })
  }

  return (
    <div>
      <Navbar/>
      <div className="w-full flex flex-wrap gap-5 justify-center items-center mt-3 md:px-5">
        {
          colorCode.map((color, index): JSX.Element => (
            <Card key={index} color={color} onCopy={copyToClipboard} />
          ))
        }
      </div>
      <Button onClick={generateColorCodes} />
    </div>
  )
}

export default App