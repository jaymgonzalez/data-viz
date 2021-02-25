export default function App() {
  const csvUrl = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni-latest.csv'

  const fetchText = async (url) => {
    const res = await fetch(url)
    return res.text()
  }

  fetchText(csvUrl).then(text => {
    console.log(text)
  })


  return (
    <div>New App</div>
  )
}