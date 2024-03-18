type MainLayoutProps = {
  children: React.ReactElement;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="test">MainLayout</div>
      {children}
    </>
  );
};

export default MainLayout;
