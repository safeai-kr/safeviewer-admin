import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
interface SideBarProps {
  sideBar: boolean;
}
const SideBarDiv = styled.div`
  width: 23.44vw;
  min-height: 100vh;
  background-color: #58595b;
  position: sticky;
  top: 0;
`;
const SideBarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const SideBarTitle = styled.div`
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 60px;
  left: 40px;
  text-shadow: 0px 4px 4px #404040;
  width: 171px;
  white-space: normal;
  text-align: left;
`;
const SideBarMenu = styled.div`
  position: absolute;
  top: 211px;
  width: 100%;
`;
const SideBarItem = styled.div`
  color: white;
  cursor: pointer;
  font-size: 18px;
  height: 51px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;
const SideBarIcon = styled(FontAwesomeIcon)`
  margin-left: 40px;
  margin-right: 8px;
  color: white;
  height: 14px;
  width: 14px;
`;

const SideBar: React.FC<SideBarProps> = ({ sideBar }) => {
  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {};
  return (
    <>
      <SideBarDiv>
        <SideBarContainer>
          <SideBarTitle>Project Management</SideBarTitle>
          <SideBarMenu>
            <SideBarItem
              style={{ backgroundColor: "#727477" }}
              onClick={onClick}
              id="Home"
            >
              <SideBarIcon icon={faHouse} />
              Home
            </SideBarItem>
            <SideBarItem
              style={{ backgroundColor: "#58595B" }}
              onClick={onClick}
              id="Dashboard"
            >
              <SideBarIcon icon={faHouse} />
              DashBoard
            </SideBarItem>
          </SideBarMenu>
        </SideBarContainer>
      </SideBarDiv>
    </>
  );
};

export default SideBar;
