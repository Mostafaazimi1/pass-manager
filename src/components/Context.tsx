"use client";

import { getTeams, createUUID } from "@/lib/lib";
import { getPasswords } from "../lib/lib-client";
import { IPassword, ITeam } from "@/types/types";
import React, { createContext, useEffect, useMemo, useState } from "react";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
  data: {
    teams: ITeam[];
    passwords: IPassword[];
  };
};

interface IData {
  selectedTeam: string | null;
  selectedPassword: number | null;
  passwords: IPassword[];
  teams: ITeam[];
  search: string;
}

export interface IContext {
  data: IData;
  setSelectedTeam: (teamName: string | null) => void;
  setSelectedPassword: (password: number | null) => void;

  updatePassword: (password: IPassword) => void;
  showPasswords: IPassword[];
  setSearch: (str: string) => void;
  addPassword: (data: { name: string; password: string; team: string }) => void;
}

export const Context = createContext({});

export function ContextProvider(props: Props) {
  const [data, setData] = useState<IData>({
    selectedTeam: null,
    selectedPassword: null,
    search: "",
    teams: [],
    passwords: [],
  });

  useEffect(() => {
    setData((prev) => {
      return { ...prev, teams: getTeams(), passwords: getPasswords() };
    });
  }, []);

  const setSelectedTeam = (teamName: string | null): void =>
    setData((prev) => {
      return { ...prev, selectedTeam: teamName };
    });

  const addPassword = (data: {
    name: string;
    password: string;
    team: string;
  }): void => {
    console.log(data);
    if (!data.name || !data.password || !data.team) return;

    setData((prev) => {
      prev.passwords.push({ id: createUUID(prev.passwords), ...data });
      console.log({ ...prev, passwords: [...prev.passwords] });
      return { ...prev, passwords: [...prev.passwords] };
    });
  };

  const setSelectedPassword = (passwordId: number | null): void =>
    setData((prev) => {
      return { ...prev, selectedPassword: passwordId };
    });

  const updatePassword = (password: IPassword): void => {
    setData((prev) => {
      const passwordId = prev.passwords.findIndex((i) => i.id === password.id);
      prev.passwords[passwordId] = password;
      return { ...prev, passwords: [...prev.passwords] };
    });
  };

  const setSearch = (str: string): void =>
    setData((prev) => {
      return { ...prev, search: str };
    });

  const showPasswords = useMemo((): IPassword[] => {
    let _passwords =
      data.search !== ""
        ? data.passwords.filter((i) =>
            i.name.toLowerCase().includes(data.search.toLowerCase())
          )
        : data.passwords;

    if (data.selectedTeam === null) return _passwords;

    return _passwords.filter((i) => i.team === data.selectedTeam);
  }, [data.search, data.selectedTeam, data.passwords]);

  const context: IContext = {
    data,
    setSelectedTeam,
    setSelectedPassword,
    showPasswords,
    setSearch,
    updatePassword,
    addPassword,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}
