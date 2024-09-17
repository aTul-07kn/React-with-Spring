import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const EditUser = ({user, setUser}) => {

  //to navigate to different pages
  let navigate=useNavigate();

  const {username, name, email}=user;
  const handleOnChange=(e)=>{
    setUser({...user, [e.target.name] : e.target.value})
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:8080/userapi/v1", user);
      console.log(response.data);
      console.log(`${user.name} added successfully!!`);
      navigate("/dashboard");
    }catch(error){
      console.error("ERROR in Posting user into the Database!!");
    }
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <form className="m-5 bg-gray-800 p-6 rounded-2xl"  onSubmit={handleSubmit}>
        <div className="mb-5">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
            <input type="text" id="username" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="Abc@123" required onChange={handleOnChange} name="username" value={username}/>
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
            <input type="text" id="name" className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="Zexar Poal" required onChange={handleOnChange} name="name" value={name} />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
            <input type="email" id="email" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="name@example.com" required onChange={handleOnChange} name="email" value={email} />
          </div>

          <button type="submit" className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Save User</button>
          <Link to="/" className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800">Add User</Link>
      </form>
    </div>
  )
}

export default EditUser