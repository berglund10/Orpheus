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
