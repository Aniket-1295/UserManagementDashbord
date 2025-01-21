import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
import SideNav from './components/SideNav';
import ViewUsers from './components/ViewUsers';
import SearchAndFilter from './components/SearchAndFilter';
import UserForm from './components/UserForm';

import './styles.css';





function App() {
  return (
    // <div className="App">

    //   <h1> Lets Build User Management Dashbord</h1>




     
    // </div>

    <Router>
    <div className="app-container">
      <SideNav />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/users/create" element={<UserForm />} />
          <Route path="/view-users" element={<ViewUsers/>} /> 
          <Route path="/users/edit/:id" element={<UserForm/>} />
          <Route path="/search" element={<SearchAndFilter/>} /> 

        </Routes>
      </div>
    </div>
  </Router>



  );
}

export default App;
