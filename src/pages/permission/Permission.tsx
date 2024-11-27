import React from 'react'
import Sidebar from '../dashboard/components/Sidebar'
import Header from '../dashboard/components/Header'

const Permission = () => {
  return (
    <div>

<div className='w-64 hidden md:block fixed'>   
          <Sidebar/>
        </div>

        <div className='md:ml-64'>
            <Header/>
        </div>

    </div>
  )
}

export default Permission