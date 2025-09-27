import { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

export default function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  const symbols = [
    "AAPL",  // Apple
    "MSFT",  // Microsoft
    "GOOGL", // Alphabet
    "AMZN",  // Amazon
    "TSLA",  // Tesla
    "META",  // Meta Platforms
    "NFLX",  // Netflix
    "NVDA",  // Nvidia
    "ADBE",  // Adobe
    "INTC",  // Intel
    "ORCL",  // Oracle
    "CSCO",  // Cisco
    "CRM",   // Salesforce
    "IBM",   // IBM
    "UBER",  // Uber
    // "LYFT",  // Lyft
    // "SHOP",  // Shopify
    // "SQ",    // Block
    // "PYPL",  // PayPal
    // "SPOT"   // Spotify
  ];

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const promises = symbols.map(async (symbol) => {
          const res = await axios.get(
            `${import.meta.env.VITE_STOCK_URL}symbol=${symbol}&token=${import.meta.env.VITE_STOCK_API_KEY}`
          );

          const quote = res.data;

          // create object with all table fields
          return {
            name: symbol,
            qty: Math.floor(Math.random() * 100) + 1,          // example quantity
            avg: 250,         // example average cost
            price: quote.c,   // current price
            net: quote.d,     // net change
            day: quote.dp,    // day percent change
            isLoss: quote.d < 0,
            high: quote.h,
            low: quote.l,
          };
        });

        const results = await Promise.all(promises);
        setAllHoldings(results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStocks();
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{((curValue + stock.price) / stock.qty).toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net.toFixed(2)}</td>
                  <td className={dayClass}>{stock.day.toFixed(2)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <VerticalGraph data={data} />
    </>
  );
}
