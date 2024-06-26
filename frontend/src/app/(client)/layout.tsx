import ClientNavbar from "@/components/navbar/ClientNavbar";
import { PropsWithChildren } from "react";

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <ClientNavbar />
      {children}
    </div>
  );
};

export default HomeLayout;
