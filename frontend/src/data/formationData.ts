export interface Player {
  id: string;
  name: string;
  position: string;
}

export interface Formation {
  goalkeeper: Player;
  defenders: Player[];
  midfielders: Player[];
  forwards: Player[];
}

export const formation442: Formation = {
  goalkeeper: { id: "1", name: "GK", position: "goalkeeper" },
  defenders: [
    { id: "2", name: "RB", position: "defender" },
    { id: "3", name: "CB", position: "defender" },
    { id: "4", name: "CB", position: "defender" },
    { id: "5", name: "LB", position: "defender" },
  ],
  midfielders: [
    { id: "6", name: "MF", position: "midfielder" },
    { id: "7", name: "MF", position: "midfielder" },
    { id: "8", name: "MF", position: "midfielder" },
    { id: "9", name: "MF", position: "midfielder" },
  ],
  forwards: [
    { id: "10", name: "CF", position: "forward" },
    { id: "11", name: "CF", position: "forward" },
  ],
};
