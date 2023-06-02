"use client";

import { ITeam } from "@/types/types";
import React, { useContext } from "react";
import { Context, IContext } from "@/components/Context";

type Props = {
  team: ITeam;
};

export default function TeamButton({ team }: Props) {
  const { setSelectedTeam, data } = useContext(Context) as IContext;

  return (
    <button
      onClick={() => setSelectedTeam(team.name)}
      className={`flex flex-row gap-3 w-full items-center ${
        data.selectedTeam === team.name && "bg-slate-400"
      }`}
    >
      <div className="h-4 w-4" style={{ backgroundColor: team.color }}></div>
      <p className="truncate">{team.name}</p>
    </button>
  );
}
