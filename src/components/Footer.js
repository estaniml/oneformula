import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    
    <footer className="p-4 border-t font-bold shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-lg sm:text-center">© 2022 <Link to="#" className="hover:underline focus:underline">OneFormula</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-lg  sm:mt-0">
            <li>
                <Link to="/" className="mr-4 hover:underline focus:underline md:mr-6 ">Home</Link>
            </li>
            <li>
                <Link to="drivers" className="mr-4 hover:underline focus:underline md:mr-6">Driver Standing</Link>
            </li>
            <li>
                <Link to="teams" className="mr-4 hover:underline focus:underline md:mr-6">Team Standing</Link>
            </li>
            <li>
                <Link to="races" className="hover:underline focus:underline">Races Standings</Link>
            </li>
        </ul>
    </footer>

  )
}

export default Footer