import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import WelcomeRoute from "@/features/welcome/routes";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <WelcomeRoute /> }];
  const element = useRoutes([...protectedRoutes, ...commonRoutes]);

  return <>{element}</>;
};
