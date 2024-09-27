/* eslint-disable react/no-children-prop */
import { useDispatch, useSelector } from "react-redux";
import { reduceTP, removeFood } from "../store/paySlice";
import Button from "../compponents/Button";
import orderService from "../appwrite/orderConfig";
const Order = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.pay.foodItems);
  const totalAmount = useSelector((state) => state.pay.totalPrice);
  const Username = useSelector((state) => state.user.name);


  // Date and time
  const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // Pad single digits with zero
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day} `;
const formattedTime = `${year}-${month}-${day}${hours}:${minutes}:${seconds}`
console.log(formattedDate);
console.log(formattedTime);

const foodNames = foods.map(food => food.Name);
console.log(foodNames); 

const foodPrices = foods.map(food => food.price);
console.log(foodPrices); 


  
  const handlePayment = () => {
    orderService.AddOrder({
      CustName:Username,
      TotalAmount:totalAmount,
      foodsname:foodNames,
      price:foodPrices,
      date:formattedDate,
      time:parseInt(formattedTime),
      paymentStatus:true
    })
  };
  return (
    <>
      <div className="m-4 p-4">
        <div className="text-2xl text-center border-2 border-black backdrop-blur">Order Summary</div>
        <div className="text-xl">Custumer Name : {Username}</div>
        <div className="text-xl">
          <ul>
            {foods.map((food) => (
              <li key={food.ID}>
                {food.Name} -- {food.price}rs/-
                <button
                  className="mx-8 bg-black"
                  onClick={() => {
                    dispatch(removeFood(food.ID));
                    dispatch(reduceTP(food.price));
                  }}
                >
                  ❌
                </button>
              </li>
            ))}
            <div className="text-xl">Total Amount to be Paid:{totalAmount}</div>
          </ul>
        </div>
        <div>
          <Button
            children={"Make Payment"}
            onClick={handlePayment}
            className="mx-2"
          ></Button>
        </div>
      </div>
    </>
  );
};

export default Order;
