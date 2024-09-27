// import Login from "./compponents/Login"
import Header from "./compponents/Header"
import { useSelector } from "react-redux"
import {UserName} from './store/userSlice'


function App() {
  

  const Username  = useSelector(UserName)

  return (
    
    <div className=" bg-main1 bg-cover w-full h-screen">

          
        <div>
          <Header />
          <h1  className="mx-40 my-10 p-2 text-3xl font-sans ">Welcome {Username} to Dhiwar&apos;s Cafe</h1>
        </div>
        <div className="bg-slate-100">
       
        </div>
    </div>
    
      
  )
}

export default App
