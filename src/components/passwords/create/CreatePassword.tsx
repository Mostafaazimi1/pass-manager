"use client";

import React, { useContext } from "react";
import { Context, IContext } from "@/components/Context";
import { useRouter } from "next/navigation";

type Props = { GoBack?: boolean };

function CreatePassword({ GoBack }: Props) {
  const { data, addPassword } = useContext(Context) as IContext;
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
          name: { value: string };
          password: { value: string };
          team: { value: string };
        };

        const data = {
          name: target.name.value,
          password: target.password.value,
          team: target.team.value,
        };

        addPassword(data);

        if (GoBack) router.back();
      }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <p>name</p>
          <input name="name" required className="border" />
        </div>
        <div className="flex flex-col">
          <p>password</p>
          <input required name="password" className="border" />
        </div>
        <div className="flex flex-col">
          <p>team</p>
          <select name="team" className="border">
            {data.teams.map((team, i) => (
              <option key={i} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        <input
          type="submit"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        />
      </div>
    </form>
  );
}

export default CreatePassword;
