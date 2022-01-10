import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  background: rgba(184, 188, 202, 0.1);
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 100px;
`;
const InnerLeftWapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 20px;
`;
const InnerRightWapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
`;
const Heading = styled.p`
  font-weight: bold;
  font-size: 40px;
  display: flex;
  align-items: center;
  color: #000000;
  opacity: 0.9;
`;
const HeadingText = styled.p`
  font-size: 22px;
  color: #000000;
  opacity: 0.9;
`;
const Text = styled.p`
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #12355b;
  opacity: 0.9;
`;
const Icon = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 9999px;
  background: rgba(88, 50, 218, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: -100px;
  font-size: 20px;
  color: #5832da;
`;
const ViewallLink = styled.a`
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #5832da;
  opacity: 0.9;
  cursor: pointer;
`;
const Button = styled.button`
  border: none;
  width: 220px;
  height: 48px;
  background: #5832da;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const SecondaryButton = styled(Button)`
  background: white;
  border: #5832da solid 1px;
  color: #5832da;
`;
const ButtonWrapper = styled.div`
  display: flex;
  padding-right: 50px;
  gap: 30px;
  margin-top: 20px;
`;
const CourseWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const HeaderWrapper = styled.div`
display: flex:
align-items: flexx-start;
gap: 20px;

`;
const TopWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const CitiesImage = styled.img``;
const CourseFeatures = () => {
  return (
    <ContainerStyle className=" ptb-100">
      <FlexContainer className="container">
        <InnerLeftWapper>
          <CourseWrapper>
            <CitiesImage src="../images/cities.svg" alt="image" />
            <Text>2,305+ Courses</Text>
          </CourseWrapper>
          <Heading>Find suitable learning courses</Heading>
          <Text>
            Unifaires helps people seeking to learn by providing them with
            multiple courses to learn form; across various industries and
            fields.
          </Text>
          <Text>
            We’ll never tell your current company or a third-party recruiter
            about your job search, we respect your privacy. And it’s completely
            free to search.
          </Text>
          <ButtonWrapper>
            <Button>
              Match Skills <i class="ri-arrow-right-s-line"></i>
            </Button>
            <SecondaryButton>
              Match Skills <i class="ri-arrow-right-s-line"></i>
            </SecondaryButton>
          </ButtonWrapper>
        </InnerLeftWapper>
        <InnerRightWapper>
          <HeaderWrapper>
            {/* <Icon>
              <i class="ri-search-line"></i>
            </Icon> */}
            <HeadingText>Find suitable learning courses</HeadingText>
          </HeaderWrapper>
          <TopWrapper>
            <Text>
              We’ll never tell your current company or a third-party recruiter
              about your job search, we respect your privacy. And it’s
              completely free to search.
            </Text>
            <ViewallLink>
              View all courses <i class="ri-arrow-right-s-line"></i>
            </ViewallLink>
          </TopWrapper>
          <>
            <HeaderWrapper>
              {/* <Icon>
                <i class="ri-qr-scan-line"></i>
              </Icon> */}
              <HeadingText>Match skills with our advanced AI </HeadingText>
            </HeaderWrapper>
            <Text>
              We’ll never tell your current company or a third-party recruiter
              about your job search, we respect your privacy. And it’s
              completely free to search.
            </Text>
            <ViewallLink>
              View all courses <i class="ri-arrow-right-s-line"></i>
            </ViewallLink>
          </>
        </InnerRightWapper>
      </FlexContainer>
    </ContainerStyle>
  );
};

export default CourseFeatures;
