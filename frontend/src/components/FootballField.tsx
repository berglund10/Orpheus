import React from "react";
import { formation442 } from "../data/formationData";
import "./FootballField.css";
import Goalkeeper from "./goalkeeper";
import Defender from "./defender";
import { useNavigate } from "react-router-dom";

const FootballField = () => {
  const navigate = useNavigate();
  function selectEleven() {
    navigate("/bets");
  }
  const { goalkeeper, defenders, midfielders, forwards } = formation442;

  return (
    <div className="football-field">
      <div className="goalkeeper">
        <Goalkeeper {...goalkeeper} />
      </div>

      <div className="defenders">
        {defenders.map((defender) => (
          <div className="defender">
            <Defender {...defender} />
          </div>
        ))}
      </div>

      <div className="midfielders">
        {midfielders.map((midfielder) => (
          <div key={midfielder.id} className="midfielder">
            {midfielder.name}
          </div>
        ))}
      </div>

      <div className="forwards">
        {forwards.map((forward) => (
          <div key={forward.id} className="forward">
            {forward.name}
          </div>
        ))}
      </div>
      <button onClick={selectEleven} className="selectEleven">
        Select Eleven
      </button>
    </div>
  );
};

export default FootballField;
