import { csv } from 'd3-fetch'
import { useState, useEffect } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { max } from 'd3-array'

const width = 960
const height = 500
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 200,
}
const innerHeight = height - margin.top - margin.bottom
const innerWidth = width - margin.left - margin.right
// Sardegna Data
// const csvUrl = 'https://gist.githubusercontent.com/liteljaime/cd88c9646ee675de320252eacbbfc55e/raw/sardinianCovidData.csv'

const csvUrl = 'https://gist.githubusercontent.com/liteljaime/3a6537795c2ab1c29dae4ae2bbc7b8f5/raw/UN_population_2020.csv'


export default function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    const row = d => {
      d.Population = +d['2020']
      return d
    }
    csv(csvUrl, row).then(data => {
      setData(data.slice(0, 10))
    })
  }, [])

  if (!data) return <h1>Loading...</h1>

  const yScale = scaleBand()
    .domain(data.map(d => d.Country))
    .range([0, innerHeight])

  const xScale = scaleLinear()
    .domain([0, max(data, d => d.Population)])
    .range([0, innerWidth])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {xScale.ticks().map(tickValue => (
          <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight} stroke="black" />
            <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + 3}>
              {tickValue}
            </text>
          </g>
        ))}
        {yScale.domain().map(tickValue => (
          <text key={tickValue} x="-3" dy=".32em" style={{ textAnchor: 'end' }} y={yScale(tickValue) + yScale.bandwidth() / 2}>
            {tickValue}
          </text>
        ))}
        {data.map(d => <rect key={d.Country} x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()} />)}
      </g>
    </svg>
  )
}
