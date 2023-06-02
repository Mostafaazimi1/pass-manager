import { IPassword, ITeam } from "@/types/types";

export async function getTeams(): Promise<ITeam[]> {
  const res = await fetch("https://pastebin.com/raw/zSFTiVWr");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const teams = (await res.json()) as ITeam[];

  return teams;
}

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

  let random = 0;

  while (usedIDs.includes(random)) random += 1;

  return random;
};
