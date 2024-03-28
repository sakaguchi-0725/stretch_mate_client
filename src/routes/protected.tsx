import MainLayout from "@/components/Layout/MainLayout";
import { useAuth } from "@/features/auth";
import ExampleRoute from "@/features/example/routes";
import { HomeRoutes } from "@/features/home";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/signin");
    }
  }, [isAuthenticated])

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [
      { path: "home", element: <HomeRoutes /> },
      { path: "example", element: <ExampleRoute /> }
    ],
  },
];
