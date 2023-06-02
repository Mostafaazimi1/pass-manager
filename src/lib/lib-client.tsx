"use client";

import { IPassword } from "@/types/types";

export const getPasswords = (): IPassword[] => {
  let passwords = localStorage.getItem("passwords");

  if (passwords !== null) return JSON.parse(passwords) as IPassword[];

  return [{ id: 1, name: "test", team: "Payroll Select", password: "123" }];
};
