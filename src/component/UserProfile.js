import React,{useState} from 'react'
import './styles.css';
import UploadImage from './UploadImage'
import UpdateProfile from './UpdateProfile';
import TaskManagement from './TaskManagement';

function UserProfile({setIsLogin=()=>{}}) {

    const [option, setOption] = useState(false);

    if(option==='image_upload'){
        return(
            <div>
                <div>
                    <button className='logout-button' onClick={()=>setIsLogin(false)}>Logout</button>
                </div>
                
                <UploadImage setOption={setOption} />
                <button className='goBack-button' onClick={()=>setOption(false)}>Go Back</button>
            </div>
        )
    }

    if(option==='task_management'){
        return(
            <div>
                <div>
                    <button className='logout-button' onClick={()=>setIsLogin(false)}>Logout</button>
                </div>
                
                <TaskManagement />
                
                    <button className='goBack-button' onClick={()=>setOption(false)}>Go Back</button>
                </div>
        )
    }

    if(option==='update_profile'){
        return(
            <div>
                <div>
                    <button className='logout-button' onClick={()=>setIsLogin(false)}>Logout</button>
                </div>
                <UpdateProfile setOption={setOption}/>
                
                    <button className='goBack-button' onClick={()=>setOption(false)}>Go Back</button>
                </div>
        )
    }

  return (
    <div>

        <div>
            <button className='logout-button' onClick={()=>setIsLogin(false)}>Logout</button>
        </div>
        
        <div>
            <button className='option-button' onClick={()=>setOption('image_upload')}>
                Upload Image
            </button>
        </div>

        <div>
            <button className='option-button' onClick={()=>setOption('task_management')}>Task Management</button>
        </div>

        <div>
            <button className='option-button' onClick={()=>setOption('update_profile')}>
                Update Profile
            </button>
        </div>
        
    </div>
  )
}

export default UserProfile