import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {
 

 // eslint-disable-next-line no-unused-vars
 const [userData,setUserData]= useContext(AuthContext)    
 
  return (
    <div   className="bg-[#1c1c1c] p-5 mt-5  rounded-xl h-48 ">
      <div className="bg-red-400 mb-2 py-2 px-4 rounded flex justify-between font-bold">
         <h2 className="w-1/5 text-center  ">Employees Name</h2>
         <h3 className="w-1/5 text-center ">New Task </h3>
         <h5 className="w-1/5 text-center">Active Task</h5>
         <h5 className="w-1/5 text-center ">Completed Task</h5>
         <h5 className="w-1/5  text-center">Failed Task</h5>
         </div>

      <div id="AllTask" className="h-[80%] overflow-auto">
     {userData.map(function(elem){
        return <>
        <div  className="bg-transparent border font-semibold mb-2 py-2 px-4 rounded flex justify-between gap-2 text-center" >
         <h2 className="w-1/5 text-white">{elem.firstName}</h2>
         <h3 className="w-1/5 text-blue-600 text-lg">{elem.taskCount.newTask}</h3>
         <h5 className="w-1/5 text-yellow-500 text-lg">{elem.taskCount.active}</h5>
         <h5 className="w-1/5 text-green-600 text-lg">{elem.taskCount.completed}</h5>
         <h5 className="w-1/5 text-lg ">{elem.taskCount.failed}</h5>
         </div>
         </>
      })}
      
      </div>
    </div>
  )
}

export default AllTask
