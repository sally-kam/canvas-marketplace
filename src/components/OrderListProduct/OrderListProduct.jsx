import React from 'react'

export default function OrderListProduct({ order, isSelected, setSelectedOrder, handleDeleteOrder }) {
  return (
    <div className="py-2">
    <div
      className={`OrderListProduct ${isSelected ? 'selected outline outline-offset-2 ' : ''}`}
    onClick={() => setSelectedOrder(order)}
  >
    <div className="grid grid-cols-2 gap-3 hover:outline outline-offset-2 outline-red-500 ">
    <div>
    <div>Order Id: </div>
      <div>{order.orderId}</div>
      <div className="smaller">{new Date(order.createdAt).toLocaleDateString()}</div>
    </div>
    <div className="text-right">
    <button onClick={() => handleDeleteOrder(order._id)}>✖️</button>
      <div>{order.totalQty} Product{order.totalQty > 1 && 's'}</div>
      <div>Total: ${order.orderTotal.toFixed(2)}</div>
    </div>
    </div>
  </div>
</div>
  )
}
