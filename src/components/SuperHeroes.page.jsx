import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then(res => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      {
        isLoading
          ? <h2>Loading...</h2>
          : <>
            <h2>Super Heroes Page</h2>
            {data.map(hero => <div key={hero.name}>{hero.name}</div>)}
          </>
      }
    </>
  )
}
