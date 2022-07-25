import 'animate.css';

const Home = () => {
  return (
    <>
        <div className='w-4/5 mx-auto min-h-screen'>
            <h1 className='text-4xl my-20 font-bold text-center'>FORMULA 1 - Championship</h1>

            <div className='my-10 grid lg:grid-cols-2 border border-indigo-800 hover:scale-105 transition-all duration-500 ease-in-out animate__animated animate__fadeInRight'>
                <img 
                    alt='one formula' 
                    src='https://images5.alphacoders.com/317/thumb-1920-317664.jpg' 
                    className='grayscale-100'
                />
                <p className='flex justify-center items-center text-xl p-4'>
                    Formula One (also known as Formula 1 or F1) is the highest class of international racing for open-wheel single-seater formula racing cars sanctioned by the Fédération Internationale de l'Automobile (FIA). 
                    <br></br>. A Formula One season consists of a series of races, known as Grands Prix, which take place worldwide on both purpose-built circuits and closed public roads.
                </p>
            </div>
            
        </div>
    </>
    
  )
}

export default Home