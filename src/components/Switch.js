
const Switch = ({mode, setMode}) => {

  return (
    <label className="switch flex self-center" >
        <input type="checkbox" />
        <span 
          className="slider"
          onClick={ () => setMode(!mode) }
        ></span>
    </label>
  )
}

export default Switch