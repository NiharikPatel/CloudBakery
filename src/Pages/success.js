import React, {useEffect} from 'react'


function Success() {
  localStorage.setItem("payment_status", "true");
    useEffect(() => {
   
      const paymentStatus = localStorage.getItem("payment_status");
  
      const saveOrderDetails = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/save-order-details', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              paymentStatus: paymentStatus,
            }),
          });
  
          if (!response.ok) {
            throw new Error('Failed to save order details');
          }
  
          localStorage.removeItem("payment_status");
        } catch (error) {
          console.error('Error saving order details:', error.message);
        }
      };
  
      saveOrderDetails();
    }, []);
  
  return (
    <div>
      <p>your payment is successful</p>
    </div>
  )
}

export default Success
