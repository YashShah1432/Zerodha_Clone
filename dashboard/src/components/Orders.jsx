import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Orders() {
  let [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/allOrders").then((res) => {
      setAllOrders(res.data);
    })
  }, []) 

  return (
    <>
    <h3 className="title">Orders ({allOrders.length})</h3>

    <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>LTP</th>
              <th>Mode</th>
            </tr>
          </thead>

          {allOrders.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit"

            return (
              <tbody key={index}>
                <tr>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className= {stock.mode === "BUY" ? "profit" : "loss"}>{stock.mode}</td>
                </tr>
              </tbody>
            )
          })}
        </table>
    </div>
    </>
  );
};
