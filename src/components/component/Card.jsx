import React from 'react'

const Card = ({cardName}) => {
  return (
    <div className='md:w-96 w-64 md:h-14 h-12  bg-gray-50'>
        <div className='name'></div>
        <div className='middleIcon'></div>
        <div className='returns'></div>

    </div>
  )
}

export default Card