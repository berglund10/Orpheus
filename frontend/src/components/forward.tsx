import React, { useState } from "react";

interface ForwardProps {
  name: string;
  id: string;
  position: string;
  forwards: { id: string; name: string }[];
}

const Forward = (props: ForwardProps) => {
  const [forward, setForward] = useState(props.name);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedForward = event.target.value;
    setForward(selectedForward);
  };

  return (
    <>
      {forward}
      <br />
      <select name="forwards" onChange={handleChange}>
        {props.forwards.length > 0 ? (
          props.forwards.map((forward) => (
            <option key={forward.id} value={forward.name}>
              {forward.name}
            </option>
          ))
        ) : (
          <option>Loading...</option>
        )}
      </select>
    </>
  );
};

export default Forward;
