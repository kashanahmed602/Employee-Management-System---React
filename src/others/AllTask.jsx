import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
    const [userData,setuserData] = useContext(AuthContext)
  return (
    <div id='allTask' className=' bg-[#1C1C1C] mt-8 p-4 '>
        <div className='h-12 bg-red-500 flex justify-between items-center text-xl px-2 w-full text-white rounded-lg font-bold mb-4'>
            <h3 className='w-1/5 '>Employee Name</h3>
            <h3 className='w-1/5 '>Active Task</h3>
            <h3 className='w-1/5 '>New Task</h3>
            <h3 className='w-1/5 '>Completed Task</h3>
            <h3 className='w-1/5 '>Failed Task</h3>
        </div>

        <div>
          {userData.employees.map((elem, idx)=>{
           return <div className='h-12 border-4 border-green-500 flex justify-between items-center text-xl text-white px-4 rounded-lg font-bold mb-4'>
            <h3 key={idx +"1"} className='w-1/5'>{elem.name}</h3>
            <h3 key={idx+"2"} className='w-1/5 text-blue-400'>{elem.taskCounts.active}</h3>
            <h3 key={idx+"3"} className='w-1/5 text-yellow-300'>{elem.taskCounts.newTask}</h3>
            <h3 key={idx+"4"} className='w-1/5 text-green-500'>{elem.taskCounts.completedTask}</h3>
            <h3 key={idx+"5"} className='w-1/5 text-red-500'>{elem.taskCounts.failedTask}</h3>

        </div>
          })}
        </div>

           </div>
  )
}

export default AllTask