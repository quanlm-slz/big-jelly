import { StoreProvider } from "@/components";
import { PropsWithChildren } from "react";

const CheckoutLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default CheckoutLayout;
