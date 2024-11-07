import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Login = ({handleLogin}) => {

  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
        <div className="border-2 rounded-2xl border-red-600 p-20">
          <form  onSubmit={(e)=>{
              submitHandler(e)
          }}
          className="flex flex-col items-center justify-center">  
            <input value={email} required onChange={(e)=>{
              setEmail(e.target.value)    
            }} className=" text-white  outline-none bg-transparent border-2 border-red-600 rounded-full  text-xl py-3 px-5 placeholder:text-gray-400" type="email" placeholder="Enter Your Email" />
            <input value={password}  required onChange={(e)=>{
              setPassword(e.target.value)
            }} className=" text-white outline-none bg-transparent border-2 border-red-600 rounded-full  text-xl mt-3 py-3 px-5 placeholder:text-gray-400" type="password" placeholder="Enter  Password"/>
            <button className="bg-red-600 mt-7  rounded-2xl  mt-3 my-2 py-2 px-10 text-xl" >Log in</button>
          </form>
        </div>
    </div>
  )
}

export default Login
