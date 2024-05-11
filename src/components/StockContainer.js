import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer() {
  const [ stocks, setStocks ] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => {
        setStocks(data)
      });
  }, [setStocks])

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} />
      ))}

    </div>
  );
}

export default StockContainer;
