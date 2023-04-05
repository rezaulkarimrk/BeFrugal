import React from 'react';
import { FaCheck } from 'react-icons/fa';

function offer({data}) {
  console.log(data);
  return (
    <div className='item' >
      <div className='offer-icon' >
        <span><FaCheck /></span>
      </div>
      <div className='offer-title'>
        <h2>{data.offer}</h2>
      </div>
      
    </div>
  )
}

export default offer;