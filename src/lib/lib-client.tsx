"use client";

import { IPassword } from "@/types/types";

export const getPasswords = (): IPassword[] => {
  let passwords = localStorage.getItem("passwords");

  if (passwords === null) return [];

  return JSON.parse(passwords) as IPassword[];
};

export const savePasswords = (passwords: IPassword[]): void => {
  const data = JSON.stringify(passwords);
  localStorage.setItem("passwords", data);
};
