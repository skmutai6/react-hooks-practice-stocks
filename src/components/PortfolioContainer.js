import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stock}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {/* render your portfolio stocks here */}
      <Stock key={stock.id} stock={stock} />
    </div>
  );
}

export default PortfolioContainer;
