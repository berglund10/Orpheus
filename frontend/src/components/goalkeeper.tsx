import React from "react";

interface GoalkeeperProps {
  name: string;
  id: string;
  position: string;
}

const Goalkeeper = (props: GoalkeeperProps) => {
  return (
    <>
      {props.name}
      <br />
      {/* fetch(någonfotbollsapi)*/}
      <select name="goalkeepers">
        <option value="Buffon">Buffon</option>
        <option value="Cech">Cech</option>
        <option value="Isaksson">Isaksson</option>
        <option value="Szczesny">Szczesny</option>
      </select>
    </>
  );
};

export default Goalkeeper;
