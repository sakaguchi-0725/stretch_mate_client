import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import WelcomeRoute from "@/features/welcome/routes";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <WelcomeRoute /> }];
  const element = useRoutes([
    ...publicRoutes,
    ...protectedRoutes,
    ...commonRoutes,
  ]);

  return <>{element}</>;
};
