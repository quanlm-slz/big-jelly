import { PropsWithChildren } from "react";
import ClientNavbar from "./_components/client-navbar/ClientNavbar";
import ClientFooter from "./_components/client-footer/ClientFooter";

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
