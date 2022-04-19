import React from "react";
import OrderHistory from "./OrderHistory";
import { orders } from "../../data";
const Orders = () => {
  return (
    <div>
      {orders.map((order) => {
        const price = order.products.reduce(
          (sum, product) => {
            return +sum + +product.price;
          },
          [0]
        );
        return (
          <OrderHistory
            key={order.id}
            status={order.status}
            products={order.products}
            totalPrice={price}
          />
        );
      })}
    </div>
  );
};

export default Orders;
