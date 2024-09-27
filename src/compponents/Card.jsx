/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate ,} from 'react-router-dom';
import { setfoodId } from '../store/foodIdSlice';
import { addFood, updateTP ,} from '../store/paySlice';
import service from '../appwrite/config';
function Card ( {
  ID,
  Name,
  Desc = "",
  img,
  price
}) {
  // console.log("Card ID:", ID); // Check if ID is received
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  
  const handleEdit = () => {
    console.log("Edit ID:", ID); // Check if handleEdit gets the ID
    dispatch(setfoodId(ID));
    navigate('/updatefoodform');
  };
  const handleDelete = () => {
    console.log(ID);
    service.deletefood(ID);
    service.deleteImage(img)
    alert("Food Item " + Name + " deleted ")
    navigate('/menu')
  }

  const handleOrder = () => {
    const newFood = { ID: ID, Name: Name, price: price };
    dispatch(addFood(newFood));
    dispatch(updateTP(price))
    alert(Name +" "+ "added to your order list Go to order page to make order")
  }

  const AdminStatus = useSelector((state) => state.admin.AdminTrue);
  const Editbutton = AdminStatus ? (
    <Button children={'✏️'} onClick={handleEdit} className='mx-2 '></Button>
  ) : null;
  const Deletebutton = AdminStatus ? (
    <Button children={'❌'} onClick={handleDelete} className='mx-2 '></Button>
  ) : null;


  

  return (
    <>
      <div className='h-72 w-72 m-4 rounded-xl bg-white font-serif'>
        <div className=' py-1'>
          {console.log(img)}
          {console.log(service.getImgPreview(img))}
          <img className='w-3/4 h-2/3 m-2 rounded-lg' src={service.getImgPreview(img)} alt="" />
        </div>
        <p className='mx-4 font-bold'>{`${Name}`}</p>
        <p className='mx-4'>{`${Desc}`}</p>
        <p className='mx-4'>{`${price}rs/-`}</p>
        <div>
        <Button children={'Add to Order'} onClick={handleOrder} className='mx-2'></Button>
        {Editbutton}
        {Deletebutton}
        </div>
      </div>
    </>
  )
}

export default Card