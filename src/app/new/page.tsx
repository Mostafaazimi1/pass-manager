import CreatePassword from "@/components/passwords/create/CreatePassword";
import React from "react";
import GoBack from "../@NewPasswordModal/(.)new/GoBack";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="border p-6">
        <a href="/">Cancel</a>
      </div>
      <div className="border p-6">
        <CreatePassword />
      </div>
    </>
  );
}
