import React from "react";
import TeamButton from "./TeamButton";
import ClearSelectedTeam from "./ClearSelectedTeam";
import { getTeams } from "@/lib/lib";

type Props = {};

async function Teams({}: Props) {
  const teams = await getTeams();

  return (
    <div className="flex flex-col gap-6 border p-6">
      <div className="flex flex-row justify-between">
        <h2>Teams</h2>
        <ClearSelectedTeam />
      </div>
      <div>
        {teams.map((team, i) => (
          <TeamButton key={i} team={team} />
        ))}
      </div>
    </div>
  );
}

export default Teams;
