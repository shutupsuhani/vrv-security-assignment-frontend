import React from 'react'
import RolePieChart from './RolePieChart'
import WeeklyBarChart from './BarChart'
import UserGrowthLineChart from './UserGrowthLineChart'

const Stastics = () => {
  return (
    <div className='p-5 bg-white shadow-md' >
      
      <div className='flex flex-col shadow-sm'>
      <RolePieChart/>
      <WeeklyBarChart />
      </div>
        
        <UserGrowthLineChart/>
    </div>
  )
}

export default Stastics