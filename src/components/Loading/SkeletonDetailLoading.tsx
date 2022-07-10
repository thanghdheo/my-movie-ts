import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export default function SkeletonDetailLoading() {
  return (
    <>
    
      <ImageTitle>
        <Skeleton style={{ height: "100%" }} />
      </ImageTitle>
      <Control>
        <Skeleton width={130} height={56} style={{ marginRight: "12px" }} />
        <Skeleton width={130} height={56} style={{ marginRight: "12px" }} />
        <AddButton>
          <Skeleton width={50} height={50} circle />
        </AddButton>
        <GroupButton>
          <Skeleton width={50} height={50} circle />
        </GroupButton>
      </Control>
      <SubTitle>
        <Skeleton width={200} />
      </SubTitle>
      <Description>
        <Skeleton width={500} />
      </Description>
    </>
  );
}

const ImageTitle = styled.div`
  height: 70vh;
  min-height: 170px;
  width: 25vw;
  min-width: 200px;
  margin-top: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Control = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);

  span {
    font-size: 24px;
    color: #fff;
  }
`;
const GroupButton = styled(AddButton)``;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 20px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  padding-bottom: 36px;
`;
