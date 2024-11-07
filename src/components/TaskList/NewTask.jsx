/* eslint-disable react/prop-types */

const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl ">
    <div className="text-xl font-semibold flex justify-between">
      <h3 className="bg-red-600 px-3 py-1 rounded items-center text-sm">{data.category}</h3>
      <h4 className="text-sm py-1">{data.taskDate}</h4>
    </div>
    <h2 className="mt-5 text-xl font-semibold text-black">{data.taskTitle}</h2>
    <p className="mt-3 text-black">
      {data.taskDescription}
      </p>
    <div className="mt-4">
     <button>Accept Task</button>
    </div>
  </div>
  )
}

export default NewTask
