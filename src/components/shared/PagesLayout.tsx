"use client";
import React, { PropsWithChildren } from "react";
import Navbar from "../heading-components/Navbar";
import Sidebar from "./Sidebar";
import { usePathname, useRouter } from "next/navigation";
import { ArrowDown, ArrowDownAz } from "lucide-react";

const PagesLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <main className="flex h-screen flex-col ">
     
      <div className="h-full flex">
        <Sidebar />
        {children}
      </div>
    </main>
  );
};

export default PagesLayout;
