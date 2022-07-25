import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { races } from '../data/races'
import { seasons } from '../data/seasons'

const Select = () => {

    const { 
        setSeason,
        setCountry
    } = useContext(DataContext)
    
    

  return (
    <>
            <label
                htmlFor="countries"
                className="block mb-2 text-xl font-medium  "
            >Select the Season</label>
            <select
                id="countries" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:ring-indigo-500 focus:indigo-blue-500 block w-full p-2.5"
                onChange={ ({target}) => setSeason(target.value) }
            >
                <option value={""}>Select</option>
                { seasons.map( option => (
                    <option 
                        className='text-gray-900'
                        key={option.id} 
                        value={option.id}
                    >{option.name}</option>
                )) }
            </select>

            <label
                htmlFor="countries"
                className="block mb-2 text-xl font-medium  "
            >Select the Race</label>
            <select
                id="countries" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:ring-indigo-500 focus:indigo-blue-500 block w-full p-2.5"
                onChange={ ({target}) => setCountry(target.value) }
            >
                <option value={""}>Select</option>
                { races.map( option => (
                    <option 
                        className='text-gray-900'
                        key={option.id} 
                        value={option.id}
                    >{option.name}</option>
                )) }
            </select>
    </>
  )
}

export default Select