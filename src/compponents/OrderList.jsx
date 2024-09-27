/* eslint-disable react/prop-types */
// OrderList.js
// import React from 'react';



function OrderList({ orders }) {
  
  return (
    <div>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.$id} className={`border-black border-2 m-4 p-4 bg-yellow-200 ${order.PaymentStatus ? 'bg-green-100' : 'bg-red-100'}`}>
            <p><strong>Order ID:</strong> {order.$id}</p>
            <p><strong>Username:</strong> {order.username}</p>
            <p><strong>Date:</strong> {order.Date}</p>
            <p className="text-red-600"><strong className="text-black">Foods:</strong> {order.Foodsname.join(', ')}</p>
            <p><strong>Prices:</strong> {order.Price.join(', ')}</p>
            <p><strong>Total Price:</strong> {order.TotalPrice}</p>
            <p><strong>Payment Status:</strong> {order.PaymentStatus ? "Paid" : "Pending"}</p>
            
          </div>
        ))
      ) : (
        <p>No orders available.</p>
      )}
    </div>
  );
}

export default OrderList;
