import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListNumber'
import TaskList from '../../Tasklist/TaskList'

const EmployeeDashboard = ({ data, userChange }) => {
  return (
    <div>
      <Header data={data} userChange={userChange} />
      <TaskListNumber data={data} /> 
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
