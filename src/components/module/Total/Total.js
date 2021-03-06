import React from "react";
import "../Bag/Bag.css";
import { Link } from "react-router-dom";
import Button from "../../base/Button/Button"
const Total = ({ totalPrice, deleveri, shopping,Sumprice,price }) => {
  return (
    <div className="col-lg-4">
      <div className="card card-details card-right">
        <h3 className="title-shoping">Shopping summary</h3>
        <table className="mt-2">
          <tr>
            <th className="text-left sum-price">{totalPrice}</th>
            <td className="float-end text-black">$ 40.0</td>
          </tr>
          <tr>
            <th className="text-left sum-price">{deleveri}</th>
            <td className="float-end text-black">{price}</td>
          </tr>
        </table>
        <hr />
        <table>
          <tr>
            <th className="total-shopping">{shopping}</th>
            <td className="float-end text-end text-black">{Sumprice}</td>
          </tr>
        </table>
        <Link to="/Checkout">
          <Button
            className="mt-3 w-100 btn btn-checkout"
            title=" Select payment"
          >
          </Button>
        </Link>
      </div>
    </div>
  );
};
Total.defaultProps = {
  totalPrice: "Order",
};
export default Total;
