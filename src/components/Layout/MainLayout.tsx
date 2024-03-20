import Sidebar from "../Sidebar/Sidebar";

type MainLayoutProps = {
  children: React.ReactElement;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="md:flex h-screen bg-bg md:p-3">
        <Sidebar />
        <div className="w-full md:ml-4 sm:mt-4">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
