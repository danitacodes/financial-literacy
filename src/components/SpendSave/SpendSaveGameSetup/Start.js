import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <div name="start" className='bg-[#555b6e] pt-16 h-screen grid place-items-center'>
            <div className='max-w-[1000px] mx-auto p-12 flex-col justify-center w-full text-center'>
                <div>
                    <h1 className='text-[#faf9f9] font-Lato text-5xl font-bold mb-4'>Spend or Save?</h1>
                    <div className='mb-12 text-[#faf9f9] text-xl'>
                    <p className=''>Drag and drop the items into the correct category.</p> <p> The quicker you go the better the score.</p>
                    </div>
                    
                    <Link to='/spend/game' className='font-Lato text-3xl bg-seagreen rounded p-2 text-[#5b5b5b] hover:bg-[#ffd6ba]'>Start Game</Link>
                </div>
            </div>
        </div>
    )
}

export default Start