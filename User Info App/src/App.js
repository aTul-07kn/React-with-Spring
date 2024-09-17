import { useState, useEffect } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import axios from "axios";
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [users, setUsers]=useState([])
  
  const [user, setUser]=useState({
    username: "",
    name: "",
    email: ""
  });

  useEffect(() => {
    const fetchUsers= async () => {
      try{
        const response=await axios.get("http://localhost:8080/userapi/v1/users");
        console.log(response.data);
        setUsers(response.data);
        console.log("User data fetched successfully!!");
      }
      catch(error){
        console.error("Error fetching USERS : ", error);
      }
    }
    fetchUsers();
  }, [])
  
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AddUser user={user} setUser={setUser}/>} />
        <Route path="/dashboard" element={<Dashboard users={users}/>}/>
      </Routes>
    </div>
  );
}

export default App;