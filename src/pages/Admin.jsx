// Admin.js
import { useSelector } from "react-redux";
import orderService from "../appwrite/orderConfig";
import { useState, useEffect } from "react";
import OrderList from "../compponents/OrderList";

function Admin() {
  const AdminStatus = useSelector((state) => state.admin.AdminTrue);
  const [documents, setDocuments] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [todaySum, setTodaySum] = useState(0);

  useEffect(() => {
    orderService.getOrderList()
      .then(result => {
        setDocuments(result.documents);
        calculateTotalSum(result.documents);
        calculateTodaySum(result.documents);
        console.log(result.documents);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const calculateTotalSum = (orders) => {
    const sum = orders.reduce((acc, order) => acc + order.TotalPrice, 0);
    setTotalSum(sum);
  };
  
  const calculateTodaySum = (orders) => {
    const today = new Date().toISOString().split('T')[0];
    const filteredOrders = orders.filter(order => order.Date.split('T')[0] === today);
    const total = filteredOrders.reduce((acc, order) => acc + order.TotalPrice, 0);
    setTodaySum(total);
  }

  if (AdminStatus) {
    return (
      <>
        <div className="text-2xl">Admin</div>
        <div className="flex flex-row">
          <div className="w-1/2 border-black border-2 m-4 p-4 bg-yellow-200"> Total Sales : {totalSum}Rs</div>
          <div className="w-1/2 border-black border-2 m-4 p-4 bg-yellow-200"> Todays Sales : {todaySum}Rs</div>
        </div>
        <OrderList orders={documents} />
      </>
    );
  } else {
    return null;
  }
}

export default Admin;
