/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl ">
    <div className="text-xl font-semibold flex justify-between">
      <h3 className="bg-red-600 px-3 py-1 rounded items-center text-sm">{data.category}</h3>
      <h4 className="text-sm py-1">{data.taskDate}</h4>
    </div>
    <h2 className="mt-5 text-xl font-semibold text-black">{data.taskTitle}</h2>
    <p className="mt-3 text-black">
      {data.taskDescription}
      </p>
    <div className="flex justify-between mt-4 ">
      <button className="bg-green-500 py-1 px-2 text-sm rounded border-2">Mark as Completed</button>
      <button className="bg-red-500 py-1 px-2 text-sm  rounded border-2">Mark as Failed</button>
    </div>
  </div>
  )
}

export default AcceptTask
