/* eslint-disable react/prop-types */



// eslint-disable-next-line react/prop-types

const Header = (props) => {
//   const [username ,setUsername] =useState('')

// if(!data){
//   setUsername('Admin')
// }else{
//   setUsername(data.firstName)
// }

const logOutUser= ()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  // window.location.reload()
}
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">Hello <br /> <span className="text-5xl font-semibold">username👋 </span> </h1>
      <button  onClick={logOutUser} className="bg-red-600 text-white text-lg font-medium px-4 py-2 rounded-xl " > Log Out</button>
    </div>
  )
}

export default Header
