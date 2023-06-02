"use client";

import React, { useContext, useState } from "react";
import { Context, IContext } from "@/components/Context";
import Input from "./Input";
import { getPassword } from "@/lib/lib";

type Props = {};

export default function Detail({}: Props) {
  const { data, updatePassword, setSelectedPassword } = useContext(
    Context
  ) as IContext;

  const [show, setShow] = useState<boolean>(false);

  if (data.selectedPassword === null) return <></>;

  const selectedPassword = getPassword(data.selectedPassword, data.passwords);

  if (selectedPassword === null)
    return (
      <div className="flex  w-96 flex-col gap-6 border p-6">
        Password not found
      </div>
    );

  return (
    <div className="flex w-96 flex-col gap-6 border p-6">
      <div className="flex flex-row justify-between">
        <h2>{selectedPassword.name}</h2>
        <button
          onClick={() => setSelectedPassword(null)}
          className=" text-red-400"
        >
          close
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm">Password</h3>

        <div className="flex flex-row gap-3">
          <Input
            show={show}
            onChange={(e) =>
              updatePassword({ ...selectedPassword, password: e.target.value })
            }
            value={selectedPassword.password}
          />
          <div className="flex flex-col gap-3">
            {
              <button
                className="text-sm w-24"
                onClick={() => setShow((prev) => !prev)}
              >
                {show ? "hide" : "show"}
              </button>
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm">Team</h3>
        <div className="flex flex-row gap-3">
          <select
            className="w-full"
            value={selectedPassword.team}
            onChange={(e) =>
              updatePassword({
                ...selectedPassword,
                team: e.currentTarget.value,
              })
            }
          >
            {data.teams.map((team, i) => (
              <option key={i} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
