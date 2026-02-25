import { useEffect, useState } from 'react'
import { getWeatherData } from '../Services/weatherServices'

export default function RequestsType1() {

  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await getWeatherData()
      console.log("FULL RESPONSE:", res)

      if (!res.data) {
        console.log("No data found")
        return
      }

      const cityObject = res.data

      const cityArray = Object.entries(cityObject).map(([id, name]) => ({
        id,
        name
      }))

      console.log("Converted Array:", cityArray)

      setCities(cityArray)
      setLoading(false)

    } catch (err) {
      console.error(err)
      setError("Failed to fetch data")
      setLoading(false)
    }
  }

  fetchData()
}, [])

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

  return (
    <div>
      <h2>Indian Cities Weather Data</h2>

      {cities.map((city) => (
        <div key={city.id}
             style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{city.name}</h3>
          <p>IMD ID: {city.id}</p>
        </div>
      ))}
    </div>
  )
}