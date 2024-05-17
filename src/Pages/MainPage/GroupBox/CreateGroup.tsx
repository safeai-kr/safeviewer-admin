import {
  IconDefinition,
  faBuilding,
  faCity,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
interface ItemProps {
  title: string;
  icon: IconDefinition;
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
  height: 115px;
  border: 1px solid #e3e3e3;
  background-color: #c1c1c1;
  cursor: pointer;
`;
const ItemIcon = styled(FontAwesomeIcon)`
  width: 32px;
  height: 32px;
  position: relative;
  color: black;
  background-color: #c1c1c1;
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 30px 0px 30px;
  gap: 3px;
`;

const ItemTitle = styled.div`
  margin-bottom: 3px;
  font-size: 16px;
  font-weight: 600;
  width: 216px;
`;

const Item: React.FC<ItemProps> = ({ title, icon }) => {
  return (
    <ItemContainer>
      <ItemContent>
        <ItemIcon icon={icon} />
        <ItemTitle>{title}</ItemTitle>
      </ItemContent>
    </ItemContainer>
  );
};

const CreateGroup: React.FC = () => {
  return (
    <GroupContainer>
      <Item title="New Project" icon={faPlusSquare} />
      <Item title="Coastal area infrastructure management" icon={faBuilding} />
      <Item title="Urban Development" icon={faCity} />
      <Item title="Agriculture and Rural Development" icon={faCity} />
    </GroupContainer>
  );
};

export default CreateGroup;
