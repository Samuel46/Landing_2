import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  background: white;
  padding-top: 100px;
  padding-bottom: 0px;
  position: relative;
`;
const TopicContainer = styled.div`
  min-height: 400px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;
const Icon = styled.img``;
const Brands = styled.img``;
const Heading = styled.p`
  font-size: 22px;
  display: flex;
  align-items: center;
  color: #000000;
`;
const HeadingText = styled.p`
  display: flex;
  align-items: center;
  opacity: 0.9;
  font-size: 45px;
  line-height: 125%;
  color: #c07654;
`;
const Text = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #c07654;
  opacity: 0.9;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-top: 40px;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 1px;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 1px;
`;
const Box = styled.div`
  min-width: 384px;
  min-height: 336px;
  background: rgba(88, 50, 218, 0.05);
  border-radius: 24px;
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 384px;
  min-height: 300px;
  padding: 24px;
`;
const BoxHeader = styled.p`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: rgba(88, 50, 218, 1);
`;
const BoxSubheader = styled(BoxHeader)`
  color: #b8bcca;
  opacity: 0.5;
`;
const SpanStyle = styled(BoxHeader)`
  color: #12355b;
`;
const BoxText = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: #808080;
  opacity: 0.9;
`;
const TopicButton = styled.button`
  min-width: 240px;
  height: 60px;
  background: rgba(254, 185, 95, 0.2);
  border-radius: 104px;
  border: none;
`;
const TopicButton2 = styled(TopicButton)`
  background: rgba(18, 53, 91, 0.2);
  border-radius: 104px;
`;
const PopularTopic = () => {
  return (
    <>
      <TitleContainer className="container">
        <HeadingText>Popular Topics</HeadingText>
        <FlexContainer>
          <>
            <Heading>
              The topics that are making the most impact on Unifaires at the
              moment
            </Heading>
          </>
          <Text>
            See all <i class="ri-arrow-right-s-line"></i>
          </Text>
        </FlexContainer>
      </TitleContainer>
      <TopWrapper>
        <TopicButton>Product Design</TopicButton>
        <TopicButton2>Productivity</TopicButton2>
        <TopicButton>Product Design</TopicButton>
        <TopicButton2>Productivity</TopicButton2>
        <TopicButton>Product Design</TopicButton>
      </TopWrapper>
      <BottomWrapper>
        <TopicButton2>Productivity</TopicButton2>
        <TopicButton>Product Design</TopicButton>
        <TopicButton2>Productivity</TopicButton2>
        <TopicButton>Product Design</TopicButton>
        <TopicButton2>Productivity</TopicButton2>
      </BottomWrapper>
    </>
  );
};

export default PopularTopic;
