import axios from 'axios';
import React, {useState} from 'react';
import './styles.css';

function Login() {

    const [formData, setFormData] = useState({
        email:'',
        username:'',
        password:''
    })

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!formData.email || !formData.username || !formData.password){
            alert('Please fill all the fields');
            return;
        }

        // try{
        //     const response = await axios.post('./', formData)
        // }catch(error){
        //     console.log(error);
        //     alert('Login Failed')
        // }

        console.log(formData)
    }

  return (
    <div className='container1'>
        <form onSubmit={handleSubmit} className='form-container'>

            <div>
                <label>Email</label>
                <input className='form-item' type='email' name='email' placeholder='Email' onChange={handleChange} required></input>
            </div>

            <div>
                <label>User Name</label>
                <input className='form-item' type='text' name='username' placeholder='User Name' onChange={handleChange} required></input>
            </div>

            <div>
                <label>Password</label>
                <input className='form-item' type='password' name='password' placeholder='Password' onChange={handleChange} required></input>
            </div>

            <button className='form-item' type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Login