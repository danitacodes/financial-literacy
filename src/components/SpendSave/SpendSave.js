import React, { useState } from 'react';
import {DragDropContext} from 'react-beautiful-dnd'
import { CHOICES, OPTIONS } from './spendSaveData';
import { shuffle, GAME_STATE } from './utils'

const SpendSave = () => {

  const [gameState, setGameState] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [bench , setBench] = useState();

  const isDropDisabled = gameState = GAME_STATE.DONE;

  const initialState = {
    bench: shuffle(CHOICES),
    [OPTIONS.SAVE]: [],
    [OPTIONS.SPEND]: [],
    gameState: GAME_STATE.READY,
    timeLeft: 0,
  }

  return (
    <div>SpendSave</div>
  )
}

export default SpendSave