import React from "react";
import { useState, useContext, useEffect } from "react";
// import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import axios from "axios";


import GeneralContext from "./GeneralContext";
import { DoughnutGraph } from "./DoughnutGraph";

export default function WatchList() {
  const [watchlist, setWatchlist] = useState([]);

  const symbols = [
    "AAPL",  // Apple
    "MSFT",  // Microsoft
    "GOOGL", // Alphabet
    "INTC",  // Intel
    "ORCL",  // Oracle
    "CSCO",  // Cisco
    "CRM",   // Salesforce
    "IBM",   // IBM
    "UBER",  // Uber
    "LYFT",  // Lyft
    "SHOP",  // Shopify
    "PYPL",  // PayPal
    "SPOT"   // Spotify
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
            percent: quote.dp,    // day percent change
            price: quote.c,   // current price
            isDown: quote.d < 0,
          };
        });

        const results = await Promise.all(promises);
        setWatchlist(results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStocks();
  }, []);

  const labels = watchlist.map((subArray) => (subArray["name"]));

  const data = {
    labels,
    label: "Price",
    datasets: [
      {
        data: watchlist.map((stock) => stock["price"]),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',   // red
          'rgba(54, 162, 235, 0.2)',   // blue
          'rgba(255, 206, 86, 0.2)',   // yellow
          'rgba(75, 192, 192, 0.2)',   // teal
          'rgba(153, 102, 255, 0.2)',  // purple
          'rgba(255, 159, 64, 0.2)',   // orange
          'rgba(0, 200, 83, 0.2)',     // green
          'rgba(233, 30, 99, 0.2)',    // pink
          'rgba(121, 85, 72, 0.2)',    // brown
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 200, 83, 1)',
          'rgba(233, 30, 99, 1)',
          'rgba(121, 85, 72, 1)',
        ],
        borderWidth: 1,
      }
    ]
  }

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list" style={{ paddingLeft: "0px" }}>
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />
        })}
      </ul>
      <DoughnutGraph data={data}/>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  let [showWatchListAction, setShowWatchListAction] = useState(false)

  const handleMouseEnter = () => {
    setShowWatchListAction(true)
  }

  const handleMouseLeave = () => {
    setShowWatchListAction(false)
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent.toFixed(2)}%</span>
          {stock.isDown ? <KeyboardArrowDownIcon className="down" /> : <KeyboardArrowUpIcon className="up" />}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListActions uid={stock.name} />}
    </li>
  )
}

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  return (
    <>
      <span className="actions">
        <span>
          <Tooltip
            title="Buy (B)"
            placement="top"
            arrow
            TransitionComponent={Grow}
            onClick={handleBuyClick}
          >
            <button className="buy">Buy</button>
          </Tooltip>
          <Tooltip
            title="Sell (S)"
            placement="top"
            arrow
            TransitionComponent={Grow}
            onClick={handleSellClick}
          >
            <button className="sell">Sell</button>
          </Tooltip>
          <Tooltip
            title="Analytics (A)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="action">
              <BarChartIcon className="icon" />
            </button>
          </Tooltip>
          <Tooltip
            title="More"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="action"><MoreHorizRoundedIcon className="icon" /></button>
          </Tooltip>
        </span>
      </span>
    </>
  )

}
