import React from 'react'
import Photo from '../components/Photo'
const Home = () => {
  return (
    <div className='container mx-auto py-12 '>
      {/* grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-sm md:max-w-none md:mx-0'>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>

      </div>
    </div>
  )
}

export default Home