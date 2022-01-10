import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  min-height: 312px;
  background: rgba(184, 188, 202, 0.1);
  display: flex;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const InnerLeftWapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;
const InnerCenterWapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
`;
const InnerRightWapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #12355b;
  opacity: 0.9;
`;
const TextCenter = styled(Text)`
  color: rgba(192, 118, 84, 1);
`;
const TextRight = styled(Text)`
  color: rgba(88, 50, 218, 1);
`;

const Icon = styled.img`
  padding: 10px;
`;
const ProSection = () => {
  return (
    <ContainerStyle className="ptb-100 ">
      <FlexContainer className="container">
        <InnerLeftWapper>
          <Text>
            <Icon src="../images/play.svg" alt="image" />
            Learn in-demand skills with and <br /> endless pool of video courses
          </Text>
        </InnerLeftWapper>
        <InnerCenterWapper>
          <Icon src="../images/star.svg" alt="image" />
          <TextCenter>
            Choose courses taught by real-
            <br />
            world experts
          </TextCenter>
        </InnerCenterWapper>
        <InnerRightWapper>
          <TextRight>
            <Icon src="../images/circle.svg" alt="image" />
            Learn at your own pace, with lifetime <br /> access on mobile and
            desktop
          </TextRight>
        </InnerRightWapper>
      </FlexContainer>
    </ContainerStyle>
  );
};

export default ProSection;
