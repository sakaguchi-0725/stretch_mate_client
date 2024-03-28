import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import WelcomeRoute from "@/features/welcome/routes";
import { publicRoutes } from "./public";
import { useAuth } from "@/features/auth";

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  const commonRoutes = [{ path: "/", element: <WelcomeRoute /> }];
  const routes = isAuthenticated ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
