import React, { useEffect, useState } from "react";

interface DefenderProps {
  name: string;
  id: string;
  position: string;
}

const Defender = (props: DefenderProps) => {
  const [defender, setDefender] = useState(props.name);
  const [defenders, setDefenders] = useState<any[]>([
    { name: "BAck1", id: 1 },
    { name: "BAck2", id: 2 },
    { name: "BAck3", id: 3 },
    { name: "BAck4", id: 4 },
  ]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/defenders", {
        method: "GET",
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setDefenders(data);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    //fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDefender = event.target.value;
    setDefender(selectedDefender);
  };

  return (
    <>
      {defender}
      <br />
      <select name="defenders" onChange={handleChange}>
        {defenders.length > 0 ? (
          defenders.map((defender) => (
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
