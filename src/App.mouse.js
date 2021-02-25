import { useState, useCallback } from "react"

const width = 960
const height = 500
const circleRadius = 30

const initialMousePosition = {
  x: width / 2,
  y: height / 2
}

export default function App() {

  const [mousePosition, setMousePosition] = useState(initialMousePosition)

  const handleMouseMove = useCallback(e => {
    const { clientX, clientY } = e
    setMousePosition({
      x: clientX,
      y: clientY
    })
  }, [setMousePosition])
  return (
    <svg height={height} width={width} onMouseMove={handleMouseMove}>
      <circle
        cx={mousePosition.x}
        cy={mousePosition.y}
        r={circleRadius}
      />
    </svg>
  )
}