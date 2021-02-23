export default function FaceContainer({ wink, setWink, children, width, height, centerX, centerY }) {
  return (
    <svg width={width} height={height} onClick={() => setWink(!wink)}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {children}
      </g>
    </svg >
  )
}