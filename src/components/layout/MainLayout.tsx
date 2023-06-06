import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { StorageHandler } from "../StorageHandler";

interface MainProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <StorageHandler />
    </>
  );
};

export default MainLayout;
