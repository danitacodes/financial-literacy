import React from 'react'
import { Link } from 'react-router-dom';


const Lost = () => {
  return (
    <div name='lost'>
          <div className="max-w-[1000px] mx-auto p-12 flex-col justify-center w-full text-center">
        <div>
        <h1 className="text-seagreen font-Lato text-5xl font-bold mb-4">Try Again</h1>
        <Link to="/spend/game" className="font-Lato text-3xl bg-seagreen rounded px-4 text-white hover:bg-[#FFD6BA]">Start Game</Link>
        </div>
      </div>
    </div>
  )
}

export default Lost