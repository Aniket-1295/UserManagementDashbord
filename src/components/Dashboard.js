import React from 'react'

const Dashboard = ({ users }) => {

  const totalUsers=users.length;

  console.log(totalUsers)


  return (
    // <div>Dashboard</div>

    <div  className="dashboard">

      <div >
        <h2>Hello Admin !</h2>
      </div>

      <div className="user-count-card">
        <h2>Total Users</h2>
        <p style={{color: 'black'}}>{totalUsers}</p>
      </div>






      
    </div>
  )
}

export default Dashboard