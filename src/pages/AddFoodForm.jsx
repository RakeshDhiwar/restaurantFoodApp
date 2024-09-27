/* eslint-disable react/no-children-prop */
import { useState,useEffect } from "react";
import service from "../appwrite/config";
import Button from "../compponents/Button";
import { useNavigate } from "react-router-dom";


function AddFoodForm() {
  const [foodName, setfoodName] = useState("");
  const [Price, setPrice] = useState(0);
  const [desc, setdesc] = useState("");
  const [Image, setImage] = useState("");
  const [type, settype] = useState("");
  const [ImgId, setImgId] = useState("")

  const navigate = useNavigate()
  


  useEffect(() => {
    // Effect to handle side-effects like state changes or async operations
    if (ImgId) {
      // This effect runs when imgId is updated
      const addFood = async () => {
        try {
          const res = await service.AddFood({
            Name: foodName,
            Price: parseInt(Price),
            type: type,
            availability: true,
            desc: desc,
            ImageID: ImgId
          });
          console.log(res.$id);
          alert("food added")
          navigate('/menu')

        } catch (error) {
          console.error("Error adding food:", error);
          alert(error)
        }
      };
      addFood();
    }
  }, [ImgId, foodName, Price, type, desc]); // Dependencies to trigger the effect

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const res = await service.uploadImg(Image);
      setImgId(res.$id); // Update state with uploaded image ID
      console.log(res.$id); // Log the uploaded image ID
      console.log(ImgId);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  
  return (
    <div className="  ">
      <div className="p-2 m-4 text-3xl">Add new food</div>
      <div>
        <form className="p-2 m-4">
          

          {/* select type */}
          <div className="p-2 m-4">
          <label htmlFor="options">Select an type : </label>
          <select
            id="options"
            value={type}
            onChange={(e) => {
              settype(e.target.value);
            }}
          >
             <option value="Select">Select</option>
            <option value="Beverages">Beverages</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Snacks">Snacks</option>
            <option value="LunchDinner">LunchDinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Special">Special</option>
          </select>
          </div>


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



          {/* Image File Input */}
          <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-1">Choose an image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept=".jpg, .jpeg, .png"
            className="px-4 py-2 border border-gray-300 rounded-md w-full"
            onChange={(e)=>{setImage(e.target.files[0])}}
          />
        </div> 


        <Button className="p-2 m-4" onClick={handleSubmit} children={"Add Food"} />

        </form>
      </div>
    </div>
  );
}

export default AddFoodForm;
