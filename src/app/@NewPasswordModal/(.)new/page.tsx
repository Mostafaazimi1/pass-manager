import React from "react";
import CreatePassword from "@/components/passwords/create/CreatePassword";
import GoBack from "./GoBack";

type Props = {};

function page({}: Props) {
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />

      <div className="fixed inset-0 z-10">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative bg-white text-left shadow-xl ">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col gap-6">
              <div>Create new Password</div>
              <CreatePassword GoBack />
            </div>
            <div className="bg-gray-50 px-4 py-3 flex flex-row gap-6">
              <GoBack>Cancel</GoBack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
