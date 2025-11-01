import React from 'react'
import AcceptTask from './AcceptTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (

    <div id='taskList' className=' mt-8 overflow-x-auto w-full p-8 flex gap-5 flex-nowrap'>
           
       {data.tasks.map((elem, idx) => {
  return (
    <>
      {elem.active && <AcceptTask data={elem} key={idx +'-active'} />}
      {elem.completed && <CompletedTask data={elem} key={idx +'-completed'} />}
      {elem.failed && <FailedTask data={elem} key={idx +'-failed'} />}
      {elem.newTask && <NewTask data={elem} key={idx +'-newTask'} />}
    </>
  );
})}
    </div>
  )
}

export default TaskList