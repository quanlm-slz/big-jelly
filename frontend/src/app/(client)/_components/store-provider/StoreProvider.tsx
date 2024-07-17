"use client";

import { AppStore, makeStore } from "@/lib/store";
import { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";

const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) storeRef.current=makeStore()

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
