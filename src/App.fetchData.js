import { csv } from 'd3-fetch'
import { useState, useEffect } from 'react'

const csvUrl = 'https://gist.githubusercontent.com/liteljaime/cd88c9646ee675de320252eacbbfc55e/raw/sardinianCovidData.csv'

export default function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csvUrl).then(setData)
  }, [])

  console.log(data[120])

  return (
    <div>
      <h1>Deceduti</h1>
      {data.map(day => {
        return <p key={day.data}>{day.deceduti}</p>
      })}</div>
  )
}
