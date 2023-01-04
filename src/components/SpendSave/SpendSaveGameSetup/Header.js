import React from 'react'

import { GAME_STATE, getSeconds } from '../SpendSaveConfig/utils'

const Header = ({ timeLeft, gameState, endGame }) => {
    <div className='max-w-6xl mx-auto px-4 mt-12'>
                <div>
                {/* {gameState === GAME_STATE.PLAYING && ( */}
                    <>
                    <div  className='flex justify-between'>
                    <section className='text-[#faf9f9] text-xl'>{getSeconds(timeLeft)} Seconds Left</section>
                    <section>
                        <button className='bg-[#ffd6ba] p-2 rounded-md text-[#5b5b5b]' onClick={endGame}>End Game</button>
                    </section>
                    </div>
                    
                    </>
                {/* )} */}
                </div>
                
            </div>
}

export default Header