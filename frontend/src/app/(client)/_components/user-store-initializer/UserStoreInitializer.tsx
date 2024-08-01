import { initializeClientStates } from "@/lib/features/appSlice";
import { initializeCart } from "@/lib/features/cartSlice";
import { initializeUser, resetStore } from "@/lib/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import cookie from "@boiseitguru/cookie-cutter";
import { PropsWithChildren, useEffect } from "react";

const UserStoreInitializer: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const token = cookie.get("token");
  const status = useAppSelector((state) => state.user.status);

  useEffect(() => {
    dispatch(initializeClientStates());
    dispatch(initializeCart());
    token && dispatch(initializeUser(token));
  }, []);

  useEffect(() => {
    if (status === "error") {
      cookie.set("token", "");
      dispatch(resetStore());
    }
  }, [status]);

  return <>{children}</>;
};

export default UserStoreInitializer;
