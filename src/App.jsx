import React ,{useContext, useEffect, useState} from 'react'
import Login from './components/Auth/Login'
import Header from './others/Header'
import TaskListNumber from './others/TaskListNumber'
import TaskList from './Tasklist/TaskList'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setItem } from './utils/LocalStorage'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [userData,setuserData] = useContext(AuthContext)
  //  console.log(AuthData)

  const [user, setuser] = useState(null)
  const [UserlogginData, setUserlogginData] = useState(null);

  useEffect(() => {
    if(userData){
       const Loggin = localStorage.getItem('loggin')
       if(Loggin){
        const userData = JSON.parse(Loggin);
        setuser(userData.role)
        setUserlogginData(userData.data)
       }
    }

  }, [userData])
  

  const handleForm = (email,password)=>{
     if(userData){
      const admin = email == "admin@me.com" && password == 123
      if(admin){
        setuser('admin')
        setUserlogginData(admin)
        localStorage.setItem('loggin', JSON.stringify({role:'admin', data: admin}))
        return
      }
     
      const employee = userData.employees.find((e)=>email == e.email && password == e.password)
      if(employee){
        setuser('employee')
        localStorage.setItem('loggin', JSON.stringify({role:'employee', data: employee}))
        setUserlogginData(employee)
        return
      }

     }
     else{
      alert("Enter correct data")
     }
  }
  
  return (
    <>

    {!user ? <Login handleForm={handleForm} /> : ''} 
    {(user == 'admin' ? <AdminDashboard userChange={setuser} data={UserlogginData}/>:null) || (user == 'employee'? <EmployeeDashboard userChange={setuser} data={UserlogginData}/> : null)}

    {/* <Login/> */}
    {/* <Header/>
    <TaskListNumber/>
    <TaskList/> */}
    {/* <AdminDashboard/> */}

    </>
  )
}

export default App