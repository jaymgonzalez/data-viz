import { csvFormat } from 'd3-dsv'
import { csv } from 'd3-fetch'

export default function App() {
  const csvUrl = 'https://gist.githubusercontent.com/liteljaime/cd88c9646ee675de320252eacbbfc55e/raw/sardinianCovidData.csv'
  csv(csvUrl).then(data =>
    console.log(`${Math.round(csvFormat(data).length / 1024)} kB`)
  )

  return (
    <div>New App</div>
  )
}