/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl ">
    <div className="text-xl font-semibold flex justify-between">
      <h3 className="bg-red-600 px-3 py-1 rounded items-center text-sm">{data.category}</h3>
      <h4 className="text-sm py-1">{data.taskDate}</h4>
    </div>
    <h2 className="mt-5 text-xl font-semibold text-black">{data.taskTitle}</h2>
    <p className="mt-3 text-black">
    {data.taskDescription}
      </p>
    <div className="mt-4">
     <button className="bg-green-500 py-1 px-2 text-sm rounded border-2">Complete</button>
    </div>
  </div>
  )
}

export default CompleteTask
