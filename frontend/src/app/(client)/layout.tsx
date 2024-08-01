"use client";

import { StoreProvider } from "@/components";
import { PropsWithChildren } from "react";
import { UserStoreInitializer } from "./_components";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <UserStoreInitializer>
        <div>{children}</div>
      </UserStoreInitializer>
    </StoreProvider>
  );
};

export default Layout;
