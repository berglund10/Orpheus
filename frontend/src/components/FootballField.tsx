import React, { useEffect, useState } from "react";
import { formation442 } from "../data/formationData";
import "./FootballField.css";
import Goalkeeper from "./goalkeeper";
import Defender from "./defender";
import { useNavigate } from "react-router-dom";
import DeadlineCounter from "./deadlineCounter";

const FootballField = () => {
  const [goalkeepers, setGoalkeepers] = useState<any[]>([]);
  const [defenders, setDefenders] = useState<any[]>([
    { name: "BAck1", id: 1 },
    { name: "BAck2", id: 2 },
    { name: "BAck3", id: 3 },
    { name: "BAck4", id: 4 },
  ]);
  const [fforwards, setForwards] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const [goalkeepersResponse, defendersResponse, forwardResponse] = await Promise.all([
        fetch("http://localhost:3000/api/goalkeepers", { method: "GET" }),
        fetch("http://localhost:3000/api/defenders", { method: "GET" }),
        fetch("http://localhost:3000/api/forward"), {method: "GET"},
      ]);

      if (
        goalkeepersResponse.status === 200 &&
        defendersResponse.status === 200 &&
        forwardResponse.status === 200

      ) {
        const [goalkeepersData, defendersData, forwardData] = await Promise.all([
          goalkeepersResponse.json(),
          defendersResponse.json(),
          forwardResponse.json(),
        ]);

        setGoalkeepers(goalkeepersData);
        setDefenders(defendersData);
        setForwards(forwardData);
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

  const { goalkeeper, midfielders, forwards } = formation442;

  return (
    <div className="football-field">
      <div>
        <DeadlineCounter />
      </div>
      <div className="goalkeeper">
        <Goalkeeper goalkeepers={goalkeepers} {...goalkeeper} />
      </div>

      <div className="defenders">
        {defenders
          .slice(0, 4) // Här beror det på vilken formation du valt, 4 för 4-4-2
          .map((defender) => (
            <div key={defender.id} className="defender">
              <Defender defenders={defenders} {...defender} />
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
