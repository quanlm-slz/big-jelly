import ClientFooter from "@/components/client-footer/ClientFooter";
import ClientNavbar from "@/components/client-navbar/ClientNavbar";
import { PropsWithChildren } from "react";

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ClientNavbar />
      {children}
      <ClientFooter />
    </>
  );
};

export default HomeLayout;
