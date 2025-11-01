import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex gap-10 p-8 mt-10'>
          <div className='h-30 w-[45%] bg-blue-500 flex-col justify-between items-center p-5 rounded-lg'>
               <h1 className='text-white text-3xl font-extrabold '>{data.taskCounts.newTask}</h1>
               <h2 className='text-white text-2xl font-bold'>NewTask</h2>
          </div>

        <div className='h-30 w-[45%] bg-green-300 flex-col justify-between items-center p-5 rounded-lg'>
             <h1 className='text-white text-3xl font-extrabold '>{data.taskCounts.completedTask}</h1>
             <h2 className='text-white text-2xl font-bold'>Completed</h2>
        </div>

        <div className='h-30 w-[45%] bg-amber-500 flex-col justify-between items-center p-5 rounded-lg'>
             <h1 className='text-white text-3xl font-extrabold '>{data.taskCounts.active}</h1>
             <h2 className='text-white text-2xl font-bold'>Accepted</h2>
        </div>

        <div className='h-30 w-[45%] bg-red-500 flex-col justify-between items-center p-5 rounded-lg'>
             <h1 className='text-white text-3xl font-extrabold '>{data.taskCounts.failedTask}</h1>
             <h2 className='text-white text-2xl font-bold'>Failed</h2>
        </div>
    </div>
  )
}

export default TaskListNumber