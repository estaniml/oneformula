
const RaceDriver = ({driver}) => {

    return (
        <tr className=" border-b text-white bg-gray-900 border-indigo-700">
            <td className="w-1/6 py-4 px-6 text-center">
                {driver.position}
            </td>
            <td className="text-white py-4 px-6">
                {driver.Driver.givenName} {driver.Driver.familyName}
            </td>
            <td className="py-4 px-6">
                <a href={driver.Constructor.url}>{driver.Constructor.name}</a>
            </td>
            <td className="py-4 px-6">
                {driver.Driver.nationality}
            </td>
            <td className="py-4 px-6 text-center">
                {driver.points}
            </td>
        </tr> 
    )
}

export default RaceDriver

