import Header from '../dashboard/components/Header'
import Sidebar from '../dashboard/components/Sidebar'

const User = () => {
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

export default User