"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = { children: React.ReactNode };

function GoBack({ children }: Props) {
  const router = useRouter();

  return <button onClick={() => router.back()}>{children}</button>;
}

export default GoBack;
