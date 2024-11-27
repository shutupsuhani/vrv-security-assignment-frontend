
import Sidebar from '../dashboard/components/Sidebar'
import Header from '../dashboard/components/Header'
import ProfileCard from './ProfileCard'
import AttendanceGraph from './AttendanceGraph'

const Profile = () => {
  return (
    <div>
       <div className='w-64 hidden md:block fixed'>   
          <Sidebar/>
        </div>

        <div className='md:ml-64'>
            <Header/>
        </div>

         <div className='md:ml-64 flex-col flex items-center justify-center mt-5'>
            <ProfileCard/>
            <AttendanceGraph />
         </div>

    </div>
  )
}

export default Profile