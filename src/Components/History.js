import React, { useState, useEffect } from 'react';

function OrderHistory() {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    // Fetch purchase history for the logged-in user
    const userId = localStorage.getItem('userId');
    fetchPurchaseHistory(userId);
  }, []); // Empty dependency array ensures that this effect runs only once

  const fetchPurchaseHistory = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/purchase-history?userId=${userId}`);
      const data = await response.json();
      console.log(data);
      setPurchaseHistory(data); // Assuming the response is an array of purchase history items
    } catch (error) {
      console.error('Error fetching purchase history:', error.message);
    }
  };
  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();
    return { formattedDate, formattedTime };
  };

  return (
    <div className='container m-2 p-3'>
      <h4>Purchase History</h4>
      {purchaseHistory.map((purchase) => (
        <div className='card m-3 p-2' key={purchase._id}>
          <p className='list-group pink d-flex flex-row'>
          <span >Date: {formatDateTime(purchase.date).formattedDate}</span>
          <span className='ml-auto'>Time: {formatDateTime(purchase.date).formattedTime}</span>
          </p>
          <ul className='list-group'>
            {purchase.orderitems.map((item) => (
              <li className='list-group-item' key={item._id}>
                Item: {item.name}; Quantity: {item.quantity}; Amount: Rs. {item.amount}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
