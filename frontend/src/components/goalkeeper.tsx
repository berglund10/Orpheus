import React, { useEffect, useState } from "react";

interface GoalkeeperProps {
  name: string;
  id: string;
  position: string;
}

const Goalkeeper = (props: GoalkeeperProps) => {
  const [goalkeeper, setGoalkeeper] = useState(props.name);
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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGoalkeeper = event.target.value;
    setGoalkeeper(selectedGoalkeeper);
  };

  return (
    <>
      {goalkeeper}
      <br />
      <select name="goalkeepers" onChange={handleChange}>
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
