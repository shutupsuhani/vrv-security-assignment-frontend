import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Users from './components/Users'
import Stastics from './components/Stastics'

const Dashboard = () => {
  return (
    <div>
        
        <div className='w-64 hidden md:block fixed'>   
          <Sidebar/>
        </div>

        <div className='md:ml-64'>
            <Header/>
        </div>

        <div className='md:ml-64'>
            <Users/>
        </div>

        <div className='md:ml-64'>
            <Stastics/>
        </div>
       
    </div>
  )
}

export default Dashboard