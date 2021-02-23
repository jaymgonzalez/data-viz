import { useState } from 'react'
import BackgroundCircle from './BackgroundCircle'
import Eyes from './Eyes'
import FaceContainer from './FaceContainer'
import Mouth from './Mouth'

export default function Face({ width, height, centerX, centerY, strokeWidth, eyeOffsetY, eyeOffsetX, eyeRadius }) {
  const [wink, setWink] = useState(false)
  return (
    <FaceContainer wink={wink} setWink={setWink} width={width} height={height} centerX={centerX} centerY={centerY}>
      <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />
      <Eyes eyeOffsetY={eyeOffsetY} eyeOffsetX={eyeOffsetX} eyeRadius={eyeRadius} wink={wink} />
      <Mouth wink={wink} />
    </FaceContainer>
  )
}