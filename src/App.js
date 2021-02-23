import { useState } from 'react'
import BackgroundCircle from './components/BackgroundCircle'
import Eyes from './components/Eyes'
import Mouth from './components/Mouth'

const width = 960
const height = 500
const centerX = width / 2
const centerY = height / 2
const strokeWidth = 15
const eyeOffsetX = 110
const eyeOffsetY = 100
const eyeRadius = 50

export default function App() {
  const [wink, setWink] = useState(false)

  return (
    <>
      <svg width={width} height={height} onClick={() => setWink(!wink)}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />
          <Eyes eyeOffsetY={eyeOffsetY} eyeOffsetX={eyeOffsetX} eyeRadius={eyeRadius} wink={wink} />
          <Mouth wink={wink} />
        </g>
      </svg>
    </>
  )
}
