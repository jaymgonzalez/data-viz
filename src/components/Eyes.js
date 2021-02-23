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
        width={100}
        height={20}
        x={eyeOffsetX - 50}
        y={-eyeOffsetY}
      />}
    </>
  )
}