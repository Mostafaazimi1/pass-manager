"use client";

import { getTeams, createUUID } from "@/lib/lib";
import { getPasswords, savePasswords } from "../lib/lib-client";
import { IPassword, ITeam } from "@/types/types";
import React, { createContext, useEffect, useMemo, useState } from "react";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
  data: {
    teams: ITeam[];
  };
};

interface IData {
  selectedTeam: string | null;
  selectedPassword: number | null;
  passwords: IPassword[];
  teams: ITeam[];
  search: string;
  initialized: boolean;
}

export interface IContext {
  data: IData;
  setSelectedTeam: (teamName: string | null) => void;
  setSelectedPassword: (password: number | null) => void;
  updatePassword: (password: IPassword) => void;
  showPasswords: IPassword[];
  setSearch: (str: string) => void;
  addPassword: (data: { name: string; password: string; team: string }) => void;
  deletePassword: (id: number) => void;
}

export const Context = createContext({});

export function ContextProvider(props: Props) {
  const [data, setData] = useState<IData>({
    selectedTeam: null,
    selectedPassword: null,
    search: "",
    teams: props.data.teams,
    passwords: [],
    initialized: false,
  });

  useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        passwords: getPasswords(),
        initialized: true,
      };
    });
  }, []);

  useEffect(() => {
    if (!data.initialized) return;
    savePasswords(data.passwords);
  }, [data.passwords, data.initialized]);

  const setSelectedTeam = (teamName: string | null): void =>
    setData((prev) => {
      return { ...prev, selectedTeam: teamName };
    });

  const addPassword = (newData: {
    name: string;
    password: string;
    team: string;
  }): void => {
    if (!newData.name || !newData.password || !newData.team) return;

    setData((prev) => {
      prev.passwords.push({ id: createUUID(prev.passwords), ...newData });
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

  const deletePassword = (id: number): void => {
    setData((prev) => {
      return { ...prev, passwords: prev.passwords.filter((i) => i.id !== id) };
    });

    if (id === data.selectedPassword) setSelectedPassword(null);
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
    deletePassword,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}
