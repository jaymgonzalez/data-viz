export default function Eyes({ wink, eyeOffsetX, eyeOffsetY, eyeRadius }) {
  return (
    <>
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
        width={30}
        height={10}
        x={eyeOffsetX - 10}
        y={-eyeOffsetY}
      />}
    </>
  )
}