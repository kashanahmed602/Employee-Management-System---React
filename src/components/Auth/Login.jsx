import React, {useState} from 'react'


const Login = ({handleForm}) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  function handler(e){
     e.preventDefault()
     handleForm(email, password)
     setemail('')
     setpassword('')


  }
  return (
    <div className='flex justify-center items-center h-screen'>
        <form onSubmit={(e)=>{
            handler(e)
        }}  className='flex-col items-center border-4 border-red-600  gap-10 p-20 inline-flex'>
           
            <input value={email}
             onChange={(e)=>{
              setemail(e.target.value);
            }} className="px-4 py-2 rounded-lg bg-gray-300 text-black placeholder-black
             focus:outline-none focus:ring-2 focus:ring-red-600" type="email" placeholder='Enter Email...' />
            
            <input value={password}
             onChange={(e)=>{      
                 setpassword(e.target.value);
            }} className='px-4 py-2 rounded-lg bg-gray-300 text-black placeholder-black
             focus:outline-none focus:ring-2 focus:ring-red-600' type="password" placeholder='Enter Password...' />
             <button className='p-3 px-7 bg-red-600 rounded-lg text-xl text-white mt-5'>Login</button>
        </form>
    </div>
  )
}

export default Login