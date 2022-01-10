import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  background: white;
  min-height: 312px;
  background: rgba(184, 188, 202, 0.1);
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
const Brands = styled.img`
  width: 150px;
`;
const IbmIcon = styled.img``;
const Heading = styled.p`
  display: flex;
  align-items: center;
  opacity: 0.9;
  font-size: 32px;
  line-height: 125%;
  color: #c07654;
`;
const Text = styled.p`
  display: flex;
  align-items: center;
  opacity: 0.9;
  font-size: 20px;
  color: #808080;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const BrandSection = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex: 1;
`;
const TrustedBy = () => {
  return (
    <ContainerStyle>
      <FlexContainer className="container">
        <InnerWrapper>
          <Heading>Trusted by</Heading>
          <Text>
            Top brands across <br /> diverse industries like:
          </Text>
        </InnerWrapper>
        <BrandSection>
          <Brands src="../images/microsoft.svg" alt="image" />
          <Brands src="../images/coursera.svg" alt="image" />
          <Brands src="../images/tesla.svg" alt="image" />
          <Brands src="../images/emory.svg" alt="image" />
          <IbmIcon src="../images/ibm.svg" alt="image" />
        </BrandSection>
      </FlexContainer>
    </ContainerStyle>
  );
};

export default TrustedBy;
