import React from "react";
import styled from "styled-components";
import CreateGroup from "../Pages/MainPage/GroupBox/CreateGroup";
import RecentGroup from "../Pages/MainPage/GroupBox/RecentGroup";

interface HomeProps {
  count: number;
}

const HomeContainer = styled.div`
  flex: 1;
  background-color: black;
`;
const HomeTitle = styled.div`
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 60px 0 16px 0;
  text-align: center;
  float: left;
  margin-left: 2.5rem;
`;
const CountSpan = styled.span`
  color: #c1c1c1;
`;
const HomeView: React.FC<HomeProps> = ({ count }) => {
  return (
    <HomeContainer>
      <HomeTitle>Create Project</HomeTitle>
      <CreateGroup />
      <HomeTitle>
        Recent Projects <CountSpan>{count}</CountSpan>
      </HomeTitle>
      <RecentGroup count={count} />
    </HomeContainer>
  );
};

export default HomeView;
