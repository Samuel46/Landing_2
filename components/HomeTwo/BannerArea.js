import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import styled from "styled-components";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const ColoredText = styled.span``;
const SvgTopLeft = styled.img`
  margin-top: -50px;
  width: 300px;
`;
const SvgTopLeftCenter = styled.img`
  margin-top: 10px;
  width: 300px;
`;
const SvgTopCenter = styled.img`
  width: 300px;
  margin-top: -180px;
`;

const SvgTopCenterRight = styled.img`
  width: 300px;
  margin-bottom: -100px;
`;
const SvgBottomLeft = styled.img`
  width: 300px;
  margin-bottom: -10px;
  margin-left: 50px;
`;

const SvgBottomCenter = styled.img`
  width: 300px;
  margin-bottom: -60px;
`;

const SvgBottomRight = styled.img`
  width: 300px;
  margin-bottom: -30px;
  margin-right: 100px;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 800px;
  z-index: 3;
`;

const Button = styled.button`
  width: 308px;
  height: 60px;
  background: #ffffff;
  border-radius: 34px;
  color: #5832da;
  border: none;
  font-size: 20px;
  -webkit-transition: 0.5s;
  &:hover {
    background: ;
  }
`;

const TopWrapper = styled.div`
  position: relative;
  z-index: -9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -910px;
  overflow: hidden;
  gap: 100px;
  min-height: 600px;
`;
const ButtomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  gap: 100px;
  min-height: 350px;
`;
const BannerArea = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="banner-area-two">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner-content-two">
                <FlexContainer>
                  <h1>
                    Find affordable <ColoredText>Learning</ColoredText>{" "}
                    Resources
                  </h1>
                  <div className="banner-btn">
                    <Button>Get in Touch</Button>
                  </div>
                </FlexContainer>
              </div>
            </div>
          </div>
        </div>
        <TopWrapper>
          <SvgTopLeft src="../images/Card.svg" alt="Images" />

          <SvgTopLeftCenter src="../images/card_two.svg" alt="Images" />

          <SvgTopCenter src="../images/card_three.svg" alt="Images" />

          <SvgTopCenterRight src="../images/card_four.svg" alt="Images" />
        </TopWrapper>
        <ButtomWrapper>
          <SvgBottomLeft src="../images/card-five.svg" alt="Images" />

          <SvgBottomCenter src="../images/card_six.svg" alt="Images" />

          <SvgBottomRight src="../images/card_seven.svg" alt="Images" />
        </ButtomWrapper>
      </div>
    </>
  );
};

export default BannerArea;
