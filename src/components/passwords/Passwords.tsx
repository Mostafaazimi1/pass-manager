"use client";

import React, { useContext } from "react";
import { getTeam } from "@/lib/lib";
import { Context, IContext } from "@/components/Context";
import Search from "./Search";

type Props = {};

function Passwords({}: Props) {
  const { data, showPasswords, setSelectedPassword } = useContext(
    Context
  ) as IContext;

  return (
    <div className="w-full flex flex-col border p-6 gap-6">
      <div className="flex w-full flex-row justify-between">
        <h2>Wachtwoorden</h2>
        <Search />
      </div>
      <div className="flex flex-col gap-3">
        {showPasswords.map((password, i) => (
          <button
            onClick={() => setSelectedPassword(password.id)}
            className="border p-3 flex flex-row gap-6 items-center text-left"
            key={i}
          >
            <div
              className="h-8 w-8"
              style={{
                backgroundColor: getTeam(password.team, data.teams)?.color,
              }}
            ></div>
            <div className="flex flex-col">
              <p className="text-md">{password.name}</p>
              <p className=" text-xs">{password.team}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Passwords;
