import { IPassword, ITeam } from "@/types/types";

const teams: ITeam[] = [
  {
    name: "Payroll Select",
    color: "#0000FF",
  },
  {
    name: "Benu Direct",
    color: "#259617",
  },
  {
    name: "Schotpoort Connect",
    color: "#e3c922",
  },
  {
    name: "KNHB",
    color: "#e39c22",
  },
];

export const getTeams = () => {
  return teams;
};

export const getTeam = (teamName: string, teams: ITeam[]): ITeam | null => {
  const foundTeam = teams.find((i) => i.name === teamName);

  if (foundTeam) return foundTeam;

  return null;
};

export const getPassword = (
  id: number,
  passwords: IPassword[]
): IPassword | null => {
  const password = passwords.find((password) => password.id === id);

  if (!password) return null;

  return password;
};

export const createUUID = (passwords: IPassword[]): number => {
  const usedIDs = passwords.map((i) => i.id);

  let random = Math.max(...usedIDs);

  while (usedIDs.includes(random)) random += 1;

  return random;
};
