import { csv } from 'd3-fetch'
import { useState, useEffect } from 'react'
import { arc, pie } from 'd3-shape'

const width = 960
const height = 500
const centerX = width / 2
const centerY = height / 2
// Sardegna Data
// const csvUrl = 'https://gist.githubusercontent.com/liteljaime/cd88c9646ee675de320252eacbbfc55e/raw/sardinianCovidData.csv'

const csvUrl = 'https://gist.githubusercontent.com/liteljaime/793291ca2b1a06c194c4660f5c6ca811/raw/cssNamedColors.csv'

const pieArc = arc()
  .innerRadius(0)
  .outerRadius(width)

export default function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csvUrl).then(setData)
  }, [])

  if (!data) return <h1>Loading...</h1>

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {/* WITH ARC FUNCTION
        {data.map((d, i) => (
          <path
            fill={d['RGB hex value']}
            key={d['RGB hex value']}
            d={pieArc({
              startAngle: i / data.length * 2 * Math.PI,
              endAngle: (i + 1) / data.length * 2 * Math.PI
            })}
          />
        ))} */}
        {pie().value(1)(data).map(d => (
          <path
            fill={d.data['RGB hex value']}
            key={d['RGB hex value']}
            d={pieArc(d)}
          />
        ))}
      </g>
    </svg>
  )
}
