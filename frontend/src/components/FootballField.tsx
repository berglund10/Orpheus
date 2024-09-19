import React from "react";
import { formation442 } from "../data/formationData";
import "./FootballField.css";
import Goalkeeper from "./goalkeeper";
import Defender from "./defender";

const FootballField = () => {
  const { goalkeeper, defenders, midfielders, forwards } = formation442;

  return (
    <div className="football-field">
      <div className="goalkeeper">
        <Goalkeeper {...goalkeeper} />
      </div>

      <div className="defenders">
        {defenders.map((defender) => (
          <Defender {...defender} />
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
    </div>
  );
};

export default FootballField;
