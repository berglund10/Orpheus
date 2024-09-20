import React from "react";
import AvailableBets from "../components/availableBets";
import CreateBet from "../components/createBet";

function Bets() {
  return (
    <div>
      <h1>Place bets</h1>
      <AvailableBets/>
      <CreateBet/>
    </div>
  );
}

export default Bets;
