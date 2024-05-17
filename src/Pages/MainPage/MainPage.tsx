import React, { useEffect, useState } from "react";
import SideBar from "../../Sidebar/SideBar";
import HomeView from "../../Views/HomeView";
import styled from "styled-components";

const MainBox = styled.div`
  display: flex;
`;
const MainPage = () => {
  const [sideBar, setSideBar] = useState<boolean>(true);
  const [projectCount, setProjectCount] = useState<number>(0);

  useEffect(() => {
    setProjectCount(4);
  }, []);
  return (
    <>
      <MainBox style={{ display: "flex" }}>
        {sideBar && <SideBar sideBar={sideBar} />}
        <HomeView count={projectCount} />
      </MainBox>
    </>
  );
};

export default MainPage;
