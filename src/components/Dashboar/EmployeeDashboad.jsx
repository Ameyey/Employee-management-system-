/* eslint-disable react/prop-types */
import Header from "../Others/Header"
import TaskListNumber from "../Others/TaskListNumber"
import Tasklist from "../TaskList/Tasklist"

const EmployeeDashboad = (props) => {
  return (
   <div className="p-10 bg-[#1c1c1c] h-screen">
    <Header changeUser={props.changeUser}  data={props.data}/>
    <TaskListNumber data={props.data}/>
    <Tasklist data={props.data}/>
   </div>
  )
}

export default EmployeeDashboad
