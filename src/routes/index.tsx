import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import WelcomeRoute from "@/features/welcome/routes";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const auth = false;
  const commonRoutes = [{ path: "/", element: <WelcomeRoute /> }];
  const routes = auth ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
