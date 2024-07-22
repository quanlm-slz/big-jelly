"use client";

import { PropsWithChildren } from "react";
import ClientNavbar from "./_components/client-navbar/ClientNavbar";
import ClientFooter from "./_components/client-footer/ClientFooter";
import { StoreProvider } from "@/components";

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <ClientNavbar />
      {children}
      <ClientFooter />
    </StoreProvider>
  );
};

export default HomeLayout;
