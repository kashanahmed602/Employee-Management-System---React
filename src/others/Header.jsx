import React from 'react'

const Header = (props) => {
  const logOut = (()=>{
      localStorage.setItem("loggin","")
      // window.location.reload()
      props.userChange('')
  })
  return (
    <div className='flex justify-between p-6 px-12 items-center'>
        <h1 className='text-white text-xl'>Hello, <br/> <span className=' text-2xl font-bold'>{props.data.name}👋</span></h1>
        <button onClick={logOut} className='text-white ring-2 ring-white hover:ring-red-600 hover:text-red-600 hover:bg-white active:scale-90 cursor-pointer bg-red-600 px-5 py-3 text-xl rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header