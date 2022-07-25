import  { useContext, useState } from 'react'
import RaceStanding from './RaceStanding'
import Select from './Select' 
import { DataContext } from '../context/DataContext'
import Error from './Error'
import { AiOutlineWarning } from 'react-icons/ai'

const Races = () => {

  const [error, setError] = useState(false)

  const { 
    season,
    country,
    grandPrix,
    setGrandPrix
  } = useContext(DataContext)

  const handleSubmit = e => {
    e.preventDefault()

    if(season !== '' && country !== '') {
      setGrandPrix({season, country})
      console.log(grandPrix)
      return
    } else {
      setError(true)
    }


  }

  return (
    <div className='w-3/5 mx-auto my-10 min-h-screen'>
      <form
        className='flex flex-col gap-3 '
        onSubmit={handleSubmit}
      >
        <Select />
        { error && <Error>Please select a season and country</Error> }
        <button
          type='submit'
          className='border bg-indigo-500 text-white border-indigo-800 w-1/3 mx-auto rounded-sm h-10 mt-4 transition-all  hover:bg-indigo-600 hover:border-none '
        >Search!</button>
        <p className='mt-4 bg-indigo-300 flex items-center rounded-lg text-white px-4 py-2 lg:w-1/2 mx-auto text-center'><AiOutlineWarning className='text-4xl ' />Because of API's delay, you may need to search twice for the same result!</p>
      </form>
      
      <RaceStanding />
    </div>
  )
}

export default Races