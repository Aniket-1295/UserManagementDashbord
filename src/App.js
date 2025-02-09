import React from 'react';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
import SideNav from './components/SideNav';
import ViewUsers from './components/ViewUsers';
import SearchAndFilter from './components/SearchAndFilter';
import UserForm from './components/UserForm';

import './styles.css';





function App() {

  // State to store the list of users
  const [users,setUsers]=useState([])

  // Fetch users from an external API when the component mounts
  useEffect(()=>{

    fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()).then(data =>setUsers(data))

  },[]);

    // Function to add a new user to the list
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };


   // Function to update a user in the list

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

 // Function to delete a user from the list
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };


  return (
    // <div className="App">

    //   <h1> Lets Build User Management Dashbord</h1>




     
    // </div>

    // Main router setup

    <Router>
    <div className="app-container">
      <SideNav />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Dashboard users={users}/>} />
          <Route path="/users" element={<UserList users={users} deleteUser={deleteUser} />} />
          <Route path="/users/create" element={<UserForm addUser={addUser} />} />
          <Route path="/view-users" element={<ViewUsers users={users} />} /> 
          <Route path="/users/edit/:id" element={<UserForm users={users} updateUser={updateUser}/>} />
          <Route path="/search" element={<SearchAndFilter users={users} />} /> 

        </Routes>
      </div>
    </div>
  </Router>



  );
}

export default App;
