import {  useContext, useEffect, useState  } from 'react'
import Login from'./components/Auth/Login'
 import AdminDashboard from './components/Dashboar/AdminDashboard'
import EmployeeDashboad from './components/Dashboar/EmployeeDashboad'
import { AuthContext } from './context/AuthProvider'


const App = () => {
const [user ,setUser]=useState('')
const [loggedInUserData ,setloggedInUserData]=useState(null)
// const authData = useContext(AuthContext)
// eslint-disable-next-line no-unused-vars
const [userData,setUserData]= useContext(AuthContext)

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData =JSON.parse(loggedInUser)
    setUser(userData.role)
    setloggedInUserData(userData.data)
  }
},)

 
const handleLogin =(email,password)=>{
if(email =='admin@me.com' && password =='123'){
  setUser('admin')
  localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
}else if(userData){
  const employee =userData.find((e)=>email == e.email && e.password == password)
  if(userData){
    setUser('employee')
    setloggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:employee}))
  }

}
else{
   alert("Inavlid Credentials")
  } 
}



  return (
   <>
   {!user ? <Login  handleLogin={handleLogin} />: ''}
   {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboad changeUser={setUser} data={loggedInUserData} /> : null)}

   </>
  )
}

export default App
