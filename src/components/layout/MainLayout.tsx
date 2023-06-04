import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";

interface MainProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default MainLayout;
