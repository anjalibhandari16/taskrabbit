import React,{useState} from 'react'

function UpdateProfile({setOption=()=>{}}) {
    const [profile, setProfile] = useState({
        name:'',
        bio:'',
    })

    const handleChange = (e) =>{
        setProfile({...profile,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(profile);
        alert('Profile Updated')
        setOption(false)
    }

  return (
    <div>
            <div>
                <label>Name</label>
                <input className='form-item' type='text' name='name' placeholder='Name' onChange={handleChange} required></input>
            </div>


            <div>
                <textarea className='form-item' name='bio' placeholder='Bio' onChange={handleChange} required></textarea>
            </div>

            <button className='form-item' onClick={handleSubmit}>Update profile</button>
    </div>
  )
}

export default UpdateProfile