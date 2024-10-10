import React from 'react'
import './style.scss'
const MatchHead = ({name}) => {
  return (
    <>
    <div className="match">

    <div className='matchhead'>Inplay {name} Match</div>
    <div className='matchhead-right'></div>
    </div>
    </>
  )
}

export default MatchHead