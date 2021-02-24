import { arc } from 'd3-shape'

export default function Mouth({ wink, mouthWidth, mouthRadius }) {
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

  return (
    <>
      {wink && <ellipse cy={50} rx={15} ry={10} fill="red" />}
      <path d={mouthArc()} />
      <path d={mouthArc2()} fill="yellow" />
    </>
  )
}