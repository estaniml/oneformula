import React from 'react'

const Driver = ({driver}) => {
    const {POS, Name, Country, Car, PTS } = driver
  return (
    <tr className=" border-b bg-gray-900 border-indigo-700 text-white text-xl">
        <th scope="row" className="text-center py-4 px-6 font-medium  whitespace-nowrap">
            {POS}
        </th>
        <td className="py-4 px-6">
            {Name}
        </td>
        <td className="py-4 px-6">
            {Country}
        </td>
        <td className="py-4 px-6">
            {Car}
        </td>
        <td className="text-center py-4 px-6">
            {PTS}
        </td>
    </tr>
)
}

export default Driver