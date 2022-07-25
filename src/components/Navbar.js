import { Link } from 'react-router-dom'
import { GiCarWheel, GiHamburgerMenu } from 'react-icons/gi'
import Switch from './Switch'
import { useState } from 'react'

const Navbar = ({mode, setMode}) => {

    const [menu, setMenu] = useState(false)

  return (
    <nav className='w-4/5 mx-auto py-5 flex justify-between uppercase'>
        <div className='flex items-center gap-2 text-lg hover:scale-110  transition-all duration-500 ease-in-out'>
            <GiCarWheel className='animate-spin	' />
            <Link to="/" className="font-lato font-black">One formula</Link>
        </div>
        <div className='font-poppins flex'>
            <div className="hidden lg:flex gap-5 items-center font-semibold">
                <Link className='hover:underline focus:underline' to="/">Home</Link>
                <Link className='hover:underline focus:underline' to="drivers">Driver Standing</Link>
                <Link className='hover:underline focus:underline' to="teams">Team Standing</Link>
                <Link className='hover:underline focus:underline' to="races">Races Standings</Link>
                <Switch mode={mode} setMode={setMode} />
            </div>
            <div 
                className='lg:hidden cursor-pointer'
                onClick={ () => setMenu(!menu) }
            >
                <GiHamburgerMenu className='text-4xl' />
                {
                    menu && (
                        <div className='absolute right-20 bg-white/90 text-indigo-900 z-10 py-10 px-4'>
                            <div className='flex flex-col items-center gap-y-4 font-bold'>
                                <Link className='hover:underline focus:underline' to="/">Home</Link>
                                <Link className='hover:underline focus:underline' to="drivers">Driver Standing</Link>
                                <Link className='hover:underline focus:underline' to="teams">Team Standing</Link>
                                <Link className='hover:underline focus:underline' to="races">Races Standings</Link>  
                                <Switch mode={mode} setMode={setMode} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar