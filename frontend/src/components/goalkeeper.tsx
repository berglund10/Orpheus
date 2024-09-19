import React, { useEffect, useState } from "react";

interface GoalkeeperProps {
  name: string;
  id: string;
  position: string;
}

const Goalkeeper = (props: GoalkeeperProps) => {
  const [goalkeepers, setGoalkeepers] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://v3.football.api-sports.io/players/squads?team=496", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "secrect" // FREE KEY;
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        const playersArray = data.response[0].players;
        const goalies = playersArray.filter((player: { position: string }) => player.position === 'Goalkeeper');
        console.log(goalies)
        setGoalkeepers(goalies);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      {props.name}
      <br />
      <select name="goalkeepers">
        {goalkeepers.length > 0 ? (
          goalkeepers.map((goalkeeper) => (
            <option key={goalkeeper.id} value={goalkeeper.name}>
              {goalkeeper.name}
            </option>
          ))
        ) : (
          <option>Loading...</option>
        )}
      </select>
    </>
  );
};

export default Goalkeeper;
