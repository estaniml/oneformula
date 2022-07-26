import { useContext, useEffect, useState } from 'react'
import RaceDriver from './RaceDriver'
import Spinner from './Spinner'
import { DataContext } from '../context/DataContext'
import Error from './Error'

const RaceStanding = () => {
  
  const [standings, setStandings] = useState([])
  const [drivers, setDrivers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const { grandPrix } = useContext(DataContext)

  useEffect(() => {
    if(grandPrix !== null) {
    setLoading(true)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_KEY}`,
        'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
      }
    };
    
    fetch(`https://formula-18.p.rapidapi.com/raceResult?year=${grandPrix.season}&race=${grandPrix.country}`, options)
      .then(response => response.json())
      .then(response => {
        if( response.length > 0){
          setStandings(response[0])
          setDrivers(response[0].Results)
        } else {
          setStandings([])
          setDrivers([])
          setError(true)
          return
        }
        setError(false)
        
      })
      .catch(err => console.error(err))
      .finally( () => setLoading(false))
      return
    }

  }, [grandPrix])

  return (
    <div className="my-10 overflow-x-auto mx-auto relative ">
        { !loading ? 
          <>
            <a target="_blank" href={standings.url} className='text-2xl font-bold uppercase' rel="noreferrer">
                {standings.raceName} - {standings.season}
            </a>
            <h4 className='text-xl font-bold mb-10'>Round: {standings.round}</h4>
              <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase  bg-indigo-900 text-gray-100">
                      <tr>
                          <th scope="col" className="py-3 px-6 text-center">
                            Position
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Driver
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Team
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Nationality
                          </th>
                          <th scope="col" className="py-3 px-6 text-center">
                            Points
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                        { drivers.map((driver, index) => (
                          <RaceDriver key={index} driver={driver} />
                          ))}
                  </tbody>
              </table> 
                          { error ? <Error>This event is coming soon</Error> : null }
          
          </> 
            : <Spinner />
        }
      </div>
  )
}

export default RaceStanding