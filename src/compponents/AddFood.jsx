/* eslint-disable react/no-children-prop */
import { useNavigate } from "react-router-dom"
import Button from "./Button"
import Empty from "../assets/Empty.jpeg"

function AddFood() {
  const navigate = useNavigate()
  return (
    <>
      <div className='h-72 w-72 m-4 rounded-xl bg-white font-serif'>
        <div>
          <img className='w-3/4 h-2/3 m-4 rounded-lg' src={Empty} alt="" />
        </div>
    
        <div>
        <Button children={'Add food'} className='mx-4' onClick={()=> {navigate('/foodform')}} ></Button>
        </div>
      </div>
    </>
  )
}

export default AddFood