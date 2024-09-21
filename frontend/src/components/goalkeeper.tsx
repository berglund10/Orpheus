import React, { useEffect, useState } from "react";

interface GoalkeeperProps {
  name: string;
  id: string;
  position: string;
  goalkeepers: { id: string; name: string }[];
}

const Goalkeeper = (props: GoalkeeperProps) => {
  const [goalkeeper, setGoalkeeper] = useState("GK");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGoalkeeper = event.target.value;
    setGoalkeeper(selectedGoalkeeper);
  };

  return (
    <>
      {goalkeeper}
      <br />
      <select name="goalkeepers" onChange={handleChange}>
        {props.goalkeepers.length > 0 ? (
          props.goalkeepers.map((goalkeeper) => (
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
