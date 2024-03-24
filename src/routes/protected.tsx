import MainLayout from "@/components/Layout/MainLayout";
import ExampleRoute from "@/features/example/routes";
import { HomeRoutes } from "@/features/home";
import { Outlet } from "react-router-dom";

const App = () => {
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
