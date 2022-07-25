import React from 'react'

const Team = ({team}) => {
    const {POS, PTS, Team } = team
  return (
    <tr className=" border-b bg-gray-900 border-indigo-700 text-white text-xl">
        <td className="text-center text-white py-4 px-6">
            {POS}
        </td>
        <td className="text-center py-4 px-6">
            {Team}
        </td>
        <td className="text-center py-4 px-6">
            {PTS}
        </td>
    </tr>
)
}
export default Team