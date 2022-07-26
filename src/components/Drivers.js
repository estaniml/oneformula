import { useEffect, useState } from 'react'
import Driver from './Driver';
import Spinner from './Spinner';

const Drivers = () => {

  const [standings, setStandings] = useState([])
  const [loading, setLoading] = useState(false)

  

  useEffect(() => {
    setLoading(true)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_KEY}`,
        'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
      }
    };
    
    fetch('https://formula-18.p.rapidapi.com/driverStanding?year=2022', options)
      .then(response => response.json())
      .then(response => setStandings(response))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))

  }, [])
  

  return (
    <div className='w-full sm:w-3/5 mx-auto my-10 min-h-screen px-4'>
      
      <h1 className='text-xl font-bold my-10 text-center uppercase'>Drivers standings season 2022</h1>

      <div className="overflow-x-auto relative shadow-md ">
      { loading ? <Spinner /> :
          <table className="w-full text-sm text-left overflow-x-scroll">
              <thead className="text-xs uppercase  bg-indigo-900 text-gray-100">
                  <tr>
                      <th scope="col" className="text-center py-3 px-6">
                        Position
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Driver
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Country
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Team
                      </th>
                      <th scope="col" className="text-center py-3 px-6">
                          Points
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {standings.map(driver => (
                    <Driver key={driver.POS} driver={driver} />
                  ))}
              </tbody>
          </table>
        }
      </div>

    </div>
  )
}

export default Drivers