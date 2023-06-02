"use client";

import React, { ChangeEvent } from "react";

type Props = {
  value: string;
  show: boolean;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ show, value, onChange }: Props) {
  return (
    <input
      type={show ? "text" : "password"}
      onChange={onChange}
      value={value}
      disabled={!show}
    />
  );
}
