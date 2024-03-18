import MainLayout from "@/components/Layout/MainLayout";
import ExampleRoute from "@/features/example/routes";
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
    path: "/",
    element: <App />,
    children: [{ path: "/example/*", element: <ExampleRoute /> }],
  },
];
