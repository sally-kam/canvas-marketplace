import React from 'react'
import LineProduct from '../LineProduct/LineProduct';
import OrderLineProduct from '../OrderLineProduct/OrderLineProduct';
export default function OrderDetail({order, setOrders}) {
    if (!order) return null;

    const orderLineProducts = order.lineProducts.map(product =>
      <OrderLineProduct
        lineProduct={product}
        isPaid={order.isPaid}
        key={product._id}
      />
    );
    console.log("THESE ARE THE LINE PRODUCTS", orderLineProducts[0]);
    return (
        <>
        Order Details:
    <div className="text-center">
    <span>Order Id: {order.orderId}</span>
    <span>{new Date(order.updatedAt).toLocaleString()}</span>
    <div className="text-right">{orderLineProducts}</div>
        
      
      </div>
    </>
  )
}
