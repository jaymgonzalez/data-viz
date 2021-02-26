import { csv } from 'd3-fetch'
import { useState, useEffect } from 'react'

// Sardegna Data
// const csvUrl = 'https://gist.githubusercontent.com/liteljaime/cd88c9646ee675de320252eacbbfc55e/raw/sardinianCovidData.csv'

const csvUrl = 'https://gist.githubusercontent.com/liteljaime/793291ca2b1a06c194c4660f5c6ca811/raw/cssNamedColors.csv'

export default function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csvUrl).then(setData)
  }, [])

  if (!data) return <h1>Loading...</h1>

  return (
    <div>{data.map(d => {
      return <div style={{
        backgroundColor: d['RGB hex value'],
        width: '960px',
        height: '4px'
      }}
        key={d['RGB hex value']}></div>
    })}</div >
  )
}
