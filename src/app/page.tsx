import Teams from "../components/teams/Teams";
import Passwords from "@/components/passwords/Passwords";
import Detail from "@/components/detail/Detail";
import Link from "next/link";

export default function Home({}: {}) {
  return (
    <>
      <div className="flex flex-col gap-6 w-96">
        <Link href={"/new"}>
          <div className="border p-6">Create new</div>
        </Link>
        <Teams />
      </div>
      <Passwords />
      <Detail />
    </>
  );
}
