/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const TaskListNumber = ({data}) => {
  console.log(data)
  return (
    <div className="flex mt-5  justify-between gap-5  screen">
        <div className="p-10 text-black rounded-2xl w-[45%] bg-red-400">
          <h2 className="text-6xl font-semibold">{data.taskCount.newTask}</h2>
          <h3 className="text-3xl font-medium">New Task</h3>
        </div>
        <div className="p-10 text-black rounded-2xl w-[45%] bg-blue-400">
          <h2 className="text-6xl font-semibold">{data.taskCount.completed}</h2>
          <h3 className="text-3xl  font-medium">Completed Task</h3>
        </div>
        <div className="p-10 text-black rounded-2xl w-[45%] bg-green-400">
          <h2 className="text-6xl font-semibold">{data.taskCount.active}</h2>
          <h3 className="text-3xl font-medium">Accepted Task</h3>
        </div>
        <div className="p-10 rounded-2xl text-black w-[45%] bg-amber-300">
          <h2 className="text-6xl font-semibold">{data.taskCount.failed}</h2>
          <h3 className="text-3xl font-medium">Failed Task</h3>
        </div>
    </div>    
  )
}

export default TaskListNumber
