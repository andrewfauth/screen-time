import {FaRegLightbulb} from 'react-icons/fa'

function Navbar({toggle}) {
  return (
    <div>
      <button
          className="absolute right-2" 
          onClick={toggle}
        >
          <FaRegLightbulb className="text-2xl" />
        </button>
    </div>
  )
}

export default Navbar