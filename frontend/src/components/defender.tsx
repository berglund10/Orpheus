import React, { useEffect, useState } from "react";

interface DefenderProps {
  name: string;
  id: string;
  position: string;
  defenders: { id: string; name: string }[];
}

const Defender = (props: DefenderProps) => {
  const [defender, setDefender] = useState(props.name);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDefender = event.target.value;
    setDefender(selectedDefender);
  };

  return (
    <>
      {defender}
      <br />
      <select name="defenders" onChange={handleChange}>
        {props.defenders.length > 0 ? (
          props.defenders.map((defender) => (
            <option key={defender.id} value={defender.name}>
              {defender.name}
            </option>
          ))
        ) : (
          <option>Loading...</option>
        )}
      </select>
    </>
  );
};

export default Defender;
