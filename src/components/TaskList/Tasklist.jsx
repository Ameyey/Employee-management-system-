/* eslint-disable react/prop-types */

import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

// eslint-disable-next-line no-unused-vars
const Tasklist = ({data}) => {
  return (
    <div id="tasklist" className=" h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap  py-5  mt-4 rounded-2xl">
         {data.tasks.map((elem,idx)=>{
          if(elem.active){
            // eslint-disable-next-line react/jsx-key
            return <AcceptTask key={idx} data={elem}/>
          }
          else if(elem.newTask){
            // eslint-disable-next-line react/jsx-key
            return <NewTask key={idx}  data={elem} />
          }
          else if(elem.completed){
            // eslint-disable-next-line react/jsx-key
            return <CompleteTask key={idx}   data={elem}/>
          }
          else if(elem.failed) {
            // eslint-disable-next-line react/jsx-key
            return <FailedTask key={idx}   data={elem}/>
          }
         })}
    </div>
  )
}

export default Tasklist
