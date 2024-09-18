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
  goalkeeper: { id: "1", name: "Michele Di Gregorio", position: "goalkeeper" },
  defenders: [
    { id: "2", name: "Pierre Kalulu", position: "defender" },
    { id: "3", name: "Federico Gatti", position: "defender" },
    { id: "4", name: "Bremer", position: "defender" },
    { id: "5", name: "Andrea Cambiaso", position: "defender" },
  ],
  midfielders: [
    { id: "6", name: "Manuel Locatelli", position: "midfielder" },
    { id: "7", name: "Weston McKennie", position: "midfielder" },
    { id: "8", name: "Nicolás González", position: "midfielder" },
    { id: "9", name: "Teun Koopmeiners", position: "midfielder" },
  ],
  forwards: [
    { id: "10", name: "Kenan Yildiz", position: "forward" },
    { id: "11", name: "Dušan Vlahović", position: "forward" },
  ],
};
