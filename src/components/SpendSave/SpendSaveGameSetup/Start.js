import React from 'react'
import { Link } from 'react-router-dom';
import { spendSaveConfig } from '../util';

const Start = () => {
  return (
    <div id="Start">
        <h1 className='text-black'>{spendSaveConfig.gameTitle}</h1>
        <Link to="/spend/game">Let's Do This</Link>
    </div>
  )
}

export default Start