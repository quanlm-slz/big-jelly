import ClientNavbar from "@/components/navbar/ClientNavbar";
import { PropsWithChildren } from "react";

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ClientNavbar />
      {children}
    </>
  );
};

export default HomeLayout;
