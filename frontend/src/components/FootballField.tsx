import React, { useEffect, useState } from "react";
import { formation442 } from "../data/formationData";
import "./FootballField.css";
import Goalkeeper from "./goalkeeper";
import Defender from "./defender";
import { useNavigate } from "react-router-dom";

const FootballField = () => {
  const [goalkeepers, setGoalkeepers] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/goalkeepers", {
        method: "GET",
      });
      if (response.status === 200) {
        const data = await response.json();
        setGoalkeepers(data);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const navigate = useNavigate();
  function selectEleven() {
    navigate("/bets");
  }

  useEffect(() => {
    fetchData();
  }, []);

  const { goalkeeper, defenders, midfielders, forwards } = formation442;

  return (
    <div className="football-field">
      <div className="goalkeeper">
        <Goalkeeper goalkeepers={goalkeepers} {...goalkeeper} />
      </div>

      <div className="defenders">
        {defenders.map((defender) => (
          <div key={defender.id} className="defender">
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
