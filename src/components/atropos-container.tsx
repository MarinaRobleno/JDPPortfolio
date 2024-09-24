"use client";

import Atropos from "atropos/react";
import React from "react";

export default function AtroposContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Atropos className="my-atropos" shadow={false}>
      {children}
    </Atropos>
  );
}
