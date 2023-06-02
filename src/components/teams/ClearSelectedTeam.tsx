"use client";

import React, { useContext } from "react";
import { Context, IContext } from "@/components/Context";

type Props = {};

function ClearSelectedTeam({}: Props) {
  const { setSelectedTeam, data } = useContext(Context) as IContext;

  if (data.selectedTeam === null) return <></>;

  return <button onClick={() => setSelectedTeam(null)}>clear</button>;
}

export default ClearSelectedTeam;
