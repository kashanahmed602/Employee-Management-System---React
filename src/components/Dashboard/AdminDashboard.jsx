import React, { useContext } from 'react'
import Header from '../../others/Header'
import AddTask from '../../others/AddTask'
import AllTask from '../../others/AllTask'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen bg-[#121111]'>
        <Header userChange={props.userChange} data={props.data}/>
        <AddTask />
        <AllTask data={props.data}/>
    </div>
  )
}

export default AdminDashboard