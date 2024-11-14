import React,{useState} from 'react'

function UploadImage({setOption=()=>{}}) {

  const [image,setImage] = useState(null);

  const handleChange = (e) =>{
    setImage(e.target.files[0]);
  }

  const handleUpload = (e) => {

    const formData = new FormData();
    formData.append('image',image);

    try{
      // ----
    }catch(error){
      console.log(error)
      alert('Picture is not Uploaded. Error !! ')
    }


    e.preventDefault();
    console.log(image);
    alert('Picture Uploaded')
    setOption(false)
  }
  
  return (
    <div>
      <input type='file' onChange={handleChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  )
}

export default UploadImage