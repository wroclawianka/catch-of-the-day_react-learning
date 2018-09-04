import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvialable = fish && fish.status === "available";
    // make sure the fish is loaded before we continue
    if(!fish) return null;
    if (isAvialable) {
      return (
        <li key={key}>
          {count} lbs {fish.name}
          {formatPrice(count * fish.price)}
        </li>
      );
    } else {
      return (
        <li key={key}>Sorry, {fish ? fish.name : "fish"} is not longer avialable</li>
      );
    }
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvialable = fish && fish.status === "available";
      if (isAvialable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
