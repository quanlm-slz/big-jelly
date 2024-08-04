import { initializeClientStates } from "@/lib/features/appSlice";
import { initializeCart } from "@/lib/features/cartSlice";
import { initializeUser, resetStore } from "@/lib/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import cookie from "@boiseitguru/cookie-cutter";
import { PropsWithChildren, useEffect } from "react";

const UserStoreInitializer: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.user.status);

  useEffect(() => {
    dispatch(initializeClientStates());
    dispatch(initializeCart());
    const token = cookie.get("token");
    token && dispatch(initializeUser(token));
  }, [dispatch]);

  useEffect(() => {
    if (status === "error") {
      cookie.set("token", "");
      dispatch(resetStore());
    }
  }, [status, dispatch]);

  return <>{children}</>;
};

export default UserStoreInitializer;
