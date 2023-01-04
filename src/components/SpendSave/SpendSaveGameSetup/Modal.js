import React from 'react'
import { GAME_STATE, getTotalScore } from '../SpendSaveConfig/utils'

const Modal = () => {
    
        <div className='modal active fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto py-24'>
        <div className='max-w-[1000px] mx-auto p-4 flex justify-center w-full h-full'>
            <div className='modal-header'>
                <h4 className='text-[#fff] text-3xl bg-black'>Line up the Categories</h4>
            </div>
            <div className='modal-body'>
                <div className='content h6'>
                    {/* {''}
                    {gameState === GAME_STATE.READY
                    ? `Drag and Drop the items into the correct category. The quicker you go the better the score`: `You scored - ${getTotalScore(groups, timeLeft)}`} */}
                </div>
            </div>
            <div className='modal-footer'>
                {/* <button className=''
                onClick={gameState === GAME_STATE.READY ? startGame : resetGame}
                >
                    {gameState === GAME_STATE.READY ? 'Start new game' : 'Restart game'}
                </button> */}
            </div>
        </div>
    </div>  
}



export default Modal