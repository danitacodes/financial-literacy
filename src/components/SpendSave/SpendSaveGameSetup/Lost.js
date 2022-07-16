import React from 'react'
import { Link } from 'react-router-dom';


const Lost = () => {
  return (
    <div id="Start">
        <h1>Sorry that wasn't it</h1>
        <Link to="/game">Try Again</Link>
    </div>
  )
}

export default Lost