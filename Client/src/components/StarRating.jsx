import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({rating = 4}) => {
  return (
    <>
      <div className='flex items-center gap-1'>
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={assets.star}
            alt="star"
            className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          />
        ))}
        <span className='text-sm text-gray-500 ml-2'>{rating.toFixed(1)}</span>
      </div>
    </>
  )
}
//{Array(5).fill('').map((_, index) => (
          //<img src={rating > index ? assets.starIconFilled : assets.starIconOutlined} 
          //alt="star-icon" className='h-4.5 w-4.5'/>
      //))} 
export default StarRating;
