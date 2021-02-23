import Face from "./components/Face"

const width = 960
const height = 500

export default function App() {
  return (
    <>
      <Face
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={15}
        eyeOffsetX={110}
        eyeOffsetY={100}
        eyeRadius={50}
        mouthWidth={20}
        mouthRadius={130}
      />
    </>
  )
}
