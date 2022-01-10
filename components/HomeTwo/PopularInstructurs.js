import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  min-height: 400px;
  background: white;
  padding: 100px;
  position: relative;
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
const Instructor = styled.img`
  margin-top: -100px;
`;
const Icon = styled.img``;
const OnlineSvg = styled.img`
  padding: 5px;
`;
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 120px;
`;

const LeftInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const RightInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Box = styled.div`
  min-width: 384px;
  min-height: 336px;
  background: rgba(88, 50, 218, 0.05);
  border-radius: 24px;
  -webkit-transition: 0.5s;
  &:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 384px;
  padding: 24px;
`;
const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 384px;
  padding: 24px;
`;
const BoxHeader = styled.p`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: rgba(88, 50, 218, 1);
`;

const BoxText = styled.p`
  font-size: 14px;
  color: #808080;
  opacity: 0.9;
`;
const RatingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const RatingHeader = styled.p`
  font-weight: bold;
  font-size: 40px;
  align-text: center;
  color: #12355b;
`;
const BoxRightText = styled(BoxText)`
  font-size: 14px;
  color: #12355b;
`;
const PopularInstructurs = () => {
  return (
    <ContainerStyle>
      <HeadingText>Popular Instructors</HeadingText>
      <FlexContainer>
        <>
          <Heading>
            The people that are making the most impact on Unifaires at the
            moment
          </Heading>
        </>
        <Text>
          See all <i class="ri-arrow-right-s-line"></i>
        </Text>
      </FlexContainer>
      <Wrapper>
        <Box>
          <Flex>
            <Instructor src="../images/instructor.svg" alt="image" />
            <RatingSection>
              <RatingHeader> 4.6</RatingHeader>
              <Brands src="../images/ratings.svg" alt="image" />
            </RatingSection>
          </Flex>
          <InnerWrapper>
            <BoxHeader> Simon Mudessar</BoxHeader>
            <BoxText>
              Teaches Construction Estimation, AutoCAD, Structural support
            </BoxText>
          </InnerWrapper>
          <FooterWrapper>
            <LeftInnerWrapper>
              <OnlineSvg src="../images/OnlineSvg.svg" alt="image" />
              <BoxText> 12 Courses</BoxText>
            </LeftInnerWrapper>
            {/* right */}
            <RightInnerWrapper>
              <OnlineSvg src="../images/adoptionImage.svg" alt="image" />
              <BoxRightText> 4.5K+ Registered</BoxRightText>
            </RightInnerWrapper>
          </FooterWrapper>
        </Box>
        <Box>
          <Flex>
            <Instructor src="../images/instructor.svg" alt="image" />
            <RatingSection>
              <RatingHeader> 4.6</RatingHeader>
              <Brands src="../images/ratings.svg" alt="image" />
            </RatingSection>
          </Flex>
          <InnerWrapper>
            <BoxHeader> Simon Mudessar</BoxHeader>

            <BoxText>
              Teaches Construction Estimation, AutoCAD, Structural support
            </BoxText>
          </InnerWrapper>
          <FooterWrapper>
            <LeftInnerWrapper>
              <OnlineSvg src="../images/OnlineSvg.svg" alt="image" />
              <BoxText> 12 Courses</BoxText>
            </LeftInnerWrapper>
            {/* right */}
            <RightInnerWrapper>
              <OnlineSvg src="../images/adoptionImage.svg" alt="image" />
              <BoxRightText> 4.5K+ Registered</BoxRightText>
            </RightInnerWrapper>
          </FooterWrapper>
        </Box>
        <Box>
          <Flex>
            <Instructor src="../images/instructor.svg" alt="image" />
            <RatingSection>
              <RatingHeader> 4.6</RatingHeader>
              <Brands src="../images/ratings.svg" alt="image" />
            </RatingSection>
          </Flex>
          <InnerWrapper>
            <BoxHeader>Simon Mudessar</BoxHeader>

            <BoxText>
              Teaches Construction Estimation, AutoCAD, Structural support
            </BoxText>
          </InnerWrapper>
          <FooterWrapper>
            <LeftInnerWrapper>
              <OnlineSvg src="../images/OnlineSvg.svg" alt="image" />
              <BoxText> 12 Courses</BoxText>
            </LeftInnerWrapper>
            {/* right */}
            <RightInnerWrapper>
              <OnlineSvg src="../images/adoptionImage.svg" alt="image" />
              <BoxRightText> 4.5K+ Registered</BoxRightText>
            </RightInnerWrapper>
          </FooterWrapper>
        </Box>
      </Wrapper>
    </ContainerStyle>
  );
};

export default PopularInstructurs;
