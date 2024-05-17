import {
  IconDefinition,
  faBuilding,
  faCity,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface ItemProps {
  img: string;
  location: string;
  tech: string;
  locX: number;
  locY: number;
  date: string;
  detailtech1: string;
  detailtech2: string;
}
interface RecentProps {
  count: number;
}

const GroupContainer = styled.div`
  display: flex;
  gap: 0px 12px;
  flex-wrap: wrap;
  margin-left: 2.5rem;
  max-width: 1280px;
  width: calc(100% - 2.5rem);
`;

const ItemContainer = styled.div`
  width: 216px;
  height: 257px;
  cursor: pointer;
`;
const ItemImg = styled.img`
  width: 67px;
  height: 88px;
  position: relative;
`;
const ItemBox = styled.div`
  gap: 3px;
  width: 100%;
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c1c1c1;
  border: 1px solid #e3e3e3;
`;

const ItemContent = styled.div`
  width: 96px;
  height: 126px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;
const ContentTitle = styled.div`
  width: 91px;
  height: 17px;
  font-weight: bold;
  background-color: white;
  color: black;
  font-size: 10px;
  border-radius: 4.73px;
  margin-top: 16px;
  margin-bottom: 6px;
  padding: 2px;
  text-align: center;
`;
const ContentTech = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  min-width: 120px;
`;
const Location = styled.div`
  font-size: 10px;
  margin: 8px 0px 8px 0px;
`;
const ProjectDate = styled.div`
  font-size: 10px;
`;
const DetailTech = styled.div`
  font-size: 12px;
`;

const Item: React.FC<ItemProps> = ({
  img,
  location,
  tech,
  locX,
  locY,
  date,
  detailtech1,
  detailtech2,
}) => {
  return (
    <ItemContainer>
      <ItemBox>
        <ItemImg src={img} />
      </ItemBox>
      <ItemContent>
        <ContentTitle>{location}</ContentTitle>
        <ContentTech>{tech}</ContentTech>
        <DetailTech>-{detailtech1}</DetailTech>
        <DetailTech>-{detailtech2}</DetailTech>
        <Location>
          {locX}
          {locY}
        </Location>
        <ProjectDate>{date}</ProjectDate>
      </ItemContent>
    </ItemContainer>
  );
};

const RecentGroup: React.FC<RecentProps> = ({ count }) => {
  return (
    <GroupContainer>
      <Item
        location="Pyeongtaek Port"
        tech="Ship detection"
        img="/image_46615.png"
        locX={36.5}
        locY={127.26}
        date="4.24"
        detailtech1="Super resolution"
        detailtech2="Inpainting"
      />
      <Item
        location="Pyeongtaek Port"
        tech="Super resolution"
        img="/image_46615.png"
        locX={36.5}
        locY={127.26}
        date="4.24"
        detailtech1="Super resolution"
        detailtech2="Inpainting"
      />
      <Item
        location="Pyeongtaek Port"
        tech="Inpainting"
        img="/image_46615.png"
        locX={36.5}
        locY={127.26}
        date="4.24"
        detailtech1="Super resolution"
        detailtech2="Inpainting"
      />
      <Item
        location="Pyeongtaek Port"
        tech="Inpainting"
        img="/image_46615.png"
        locX={36.5}
        locY={127.26}
        detailtech1="Super resolution"
        detailtech2="Inpainting"
        date="4.24"
      />
    </GroupContainer>
  );
};

export default RecentGroup;
