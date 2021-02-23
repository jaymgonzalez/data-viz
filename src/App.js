import { arc } from 'd3-shape'
import { useState } from 'react'
import BackgroundCircle from './components/BackgroundCircle'

const width = 960
const height = 500
const centerX = width / 2
const centerY = height / 2
const strokeWidth = 15
const eyeOffsetX = 110
const eyeOffsetY = 100
const eyeRadius = 50
const mouthWidth = 20
const mouthRadius = 130

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3 / 2)

const mouthArc2 = arc()
  .innerRadius(mouthRadius - mouthWidth - 10)
  .outerRadius(mouthRadius)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3 / 2)

export default function App() {
  const [wink, setWink] = useState(false)

  return (
    <>
      <svg width={width} height={height} onClick={() => setWink(!wink)}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />
          <circle
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
          />
          {!wink && <circle
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
          />}
          {wink && <rect
            width={100}
            height={20}
            x={eyeOffsetX - 50}
            y={-eyeOffsetY}
          />}
          {wink && <ellipse cy={165} rx={50} ry={60} fill="red" />}
          <path d={mouthArc()} />
          <path d={mouthArc2()} fill="yellow" />
        </g>
      </svg>
    </>
  )
}
