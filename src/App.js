import Face from "./components/Face"
import { range } from 'd3-array'

const width = 166
const height = 166

const numberOfFaces = range(21)

export default function App() {
  return (numberOfFaces.map(() =>
    <>
      <Face
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={10}
        eyeOffsetX={30}
        eyeOffsetY={30}
        eyeRadius={5 + Math.random() * 10}
        mouthWidth={10}
        mouthRadius={40}
      />
    </>)
  )
}
