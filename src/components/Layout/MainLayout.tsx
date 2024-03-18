type MainLayoutProps = {
  children: React.ReactElement;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div>MainLayout</div>
      {children}
    </>
  );
};

export default MainLayout;
