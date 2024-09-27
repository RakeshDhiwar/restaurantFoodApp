/* eslint-disable react/no-children-prop */
import { useState,} from "react";
import service from "../appwrite/config";
import Button from "../compponents/Button";
import { useDispatch, useSelector } from "react-redux";
import { setfoodId } from "../store/foodIdSlice";
import { useNavigate } from "react-router-dom";


function UpdateFoodForm() {
  const [foodName, setfoodName] = useState("");
  const [Price, setPrice] = useState(0);
  const [desc, setdesc] = useState("");
  
//   const [type, settype] = useState("");

  // const [prevFood, setPrevFood] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const FoodId = useSelector((state) => state.foodId.foodid);
  console.log(FoodId);

  // useEffect(() => {
    
  
  // const promise = service.getFood({Name:FoodId})
  // console.log(promise);
  // promise.then((result)=>{
  //   console.log(result);
  //   setPrevFood(result)
  // })
  //   console.log(prevFood.Name);
  // }, [])
  
  
  const handleSubmit = () => {
    service.updateFood({
      Name:foodName,
      Price:parseInt(Price),
      desc:desc,
      DocumentID:FoodId
    })
    
    dispatch(setfoodId(""))
    alert("Food Updated")
    navigate("/menu")

  };

  return (
    <div className="  ">
      <div className="p-2 m-4 text-3xl">Update Food</div>
      <div>
        <form className="p-2 m-4">
          



          {/* Select food */}
          <div className="p-2 m-4">
            <label>Food Name :</label>
            <input
              type="text"
              value={foodName}
              placeholder="Food Name"
              onChange={(e) => {
                setfoodName(e.target.value);
              }}
            />
          </div>

          {/* select price */}
          <div className="p-2 m-4">
          <label>Price :</label>
            <input
              type="number"
              value={Price}
              placeholder="Price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          {/* decription */}
          <div className="p-2 m-4">
          <label>Description :</label>
            <input
              type="text"
              value={desc}
              placeholder="Description"
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
          </div>



        <Button className="p-2 m-4" onClick={handleSubmit} children={"Update"} />

        </form>
      </div>
    </div>
  );
}

export default UpdateFoodForm;
