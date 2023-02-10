import React from 'react'

const Photo = () => {
  return (
    <div>
      <div className='border border-[#e4e4e4] rounded-md h-[200px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[300px] rounded-md group-hover:scale-110 transition duration-300' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxgniMI_j9cLknHFDbwekChidyg_SKm1PFg&usqp=CAU' alt="/" />
          </div>
        </div>
   
        
      </div>
    </div>
  )
}

export default Photo