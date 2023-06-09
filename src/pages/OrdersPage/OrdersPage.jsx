import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './OrdersPage.css'
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';

export default function OrdersPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setOrders(orders);
      setSelectedOrder(orders[0]);
    }
    getOrders();
  }, []);

  async function handleDeleteOrder(orderId) {
    const orderFilter = orders.filter(order => order.id !== orderId)
    await ordersAPI.deleteOrder(orderId);
    setOrders(orderFilter);
    setSelectedOrder(null);
  }
  return (
    <main>
      
      <div className="text-left">
        <div className="text-xl text-center">My Orders: </div>
        {orders.length > 0 ? (
          <div className="text-left grid grid-cols-3 gap-3">
            <div className="col-start-1 col-end-2"> 
            <OrderList
              orders={orders}
              selectedOrder={selectedOrder}
              setSelectedOrder={setSelectedOrder}
              handleDeleteOrder={handleDeleteOrder}
            />
          </div>
      <div className=" col-span-2">
        {selectedOrder ? (
          <div>
            
            <OrderDetail order={selectedOrder} />
            
          </div>
        ) : (
          <p>Select an order to view its details</p>
        )}
      </div>

          </div>
        ) : (
          <p className="text-lg font-bold text-center">No orders yet</p>
        )}
      </div>

    </main>
  );
}