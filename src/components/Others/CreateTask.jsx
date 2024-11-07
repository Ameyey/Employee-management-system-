import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"

const CreateTask = () => {

  // eslint-disable-next-line no-unused-vars, no-undef
  const [userData,setUserData]= useContext(AuthContext)

  const [taskTitle,setTaskTitle]=useState('')
  const [teskDescription ,setrTeskDescription]=useState('')
  const [taskDate,seTaskDate]=useState('')
  const [asigTo,setAsigTo]=useState('')
  const [category,setCategory]=useState('')

  
 const [newTask,setNewTask]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault()

    setNewTask({taskTitle,teskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
     const data =userData        

    data.forEach(function(elem){
      if(asigTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCounts.newTask= elem.taskCounts.newTask+1   
      }    
    })
  
   setUserData(data) 
   
   console.log(data)

    setTaskTitle('') 
    setrTeskDescription('')
    seTaskDate('')
    setAsigTo('')
    setCategory('')

    

  } 

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form  onSubmit={(e)=>{
      submitHandler(e)
    }} 
    className='flex flex-wrap w-full items-start justify-between'>
     <div className='w-1/2'>
     <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
        <input type="text" value={taskTitle} onChange={(e)=>{
          setTaskTitle(e.target.value)

        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Make a Ui Design '  />
      </div>
      <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Data</h3>
        <input type="date" value={taskDate} onChange={(e)=>{
          seTaskDate(e.target.value)
        }}  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'   />
      </div>
      <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to Name</h3>
        <input type="text" value={asigTo} onChange={(e)=>{
          setAsigTo(e.target.value)
        }}  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Employee Name'  />
      </div>
      <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input type="text" value={category} onChange={(e)=>{
          setCategory(e.target.value)
        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Design Dev,etc'  />
      </div>
   </div>

      <div className='w-2/5 flex flex-col items-start'>
      <h3 className='text-sm text-gray-400 mb-0.5'>Description</h3>
      <textarea value={teskDescription} onChange={(e)=>{
        setrTeskDescription(e.target.value)
      }} className='w-full h-44 text-sm py-4 rounded  outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
      <button className='bg-red-600  py-3 hover:bg-red-500 px-5 rounded text-sm mt-4 w-full'>Create Task</button>

      </div>

    </form>
   </div>
  )
}

export default CreateTask
