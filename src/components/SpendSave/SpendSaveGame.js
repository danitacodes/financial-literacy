import React, {useState, useEffect } from 'react'
import Dropzone from './SpendSaveGameSetup/Dropzone'
import { DragDropContext } from 'react-beautiful-dnd'
import { CHOICES, CATEGORIES } from './SpendSaveConfig/data'
import { move, shuffle } from './SpendSaveConfig/utils'


const initialState = {
    bench: shuffle(CHOICES),
    [CATEGORIES.SAVE]:[],
    [CATEGORIES.SPEND]: []
}

const SpendSaveGame = ({ isDropDisabled, choices, id }) => {

    const [state, setState] = useState(initialState)

    const onDragEnd = ({ source, destination }) => {
        if (!destination) {
            return;
        }

        setState(prevState => {
            return move(prevState, source, destination)
        })
    }

    const { bench, ...groups } = state;
    

    return(
        <>
        <div className='pt-28 bg-[#555B6E]'>
            <DragDropContext onDragEnd={onDragEnd}>
            <div className="">
                <div className=''>
                        <Dropzone
                            id = {CATEGORIES.SAVE}
                            choices = {state[CATEGORIES.SAVE]}
                            isDropDisabled={isDropDisabled}
                        />

                        <Dropzone id="bench" choices={bench} isDropDisabled={isDropDisabled} />

                        <Dropzone
                            id={CATEGORIES.SPEND}
                            choices = {state[CATEGORIES.SPEND]}
                            isDropDisabled={isDropDisabled}
                        />
                </div>
            </div>
            </DragDropContext>
        </div>
        
        </>
    )
}

export default SpendSaveGame