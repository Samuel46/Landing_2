import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import styled from "styled-components";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const ColoredText = styled.span``;
const SvgTopLeft = styled.div`
  position: absolute;
  width: 368px;
  height: 364px;
  left: -76px;
  top: 10px;

  background: linear-gradient(
    180deg,
    #ffffff 7.89%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 32px;
`;
const SvgTopLeftCenter = styled.div`
  position: absolute;
  width: 368px;
  height: 364px;
  left: 410px;
  top: 202px;

  background: linear-gradient(
    180deg,
    #ffffff 7.89%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 32px;
`;
const SvgTopCenter = styled.div`
  position: absolute;
  width: 368px;
  height: 364px;
  left: 900px;
  top: 48px;

  background: linear-gradient(
    180deg,
    #ffffff 7.89%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 32px;
`;

const SvgTopCenterRight = styled.div`
  position: absolute;
  width: 368px;
  height: 364px;
  left: 1400px;
  top: 322px;

  background: linear-gradient(
    180deg,
    #ffffff 7.89%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 32px;
`;
const SvgBottomLeft = styled.div`
  position: absolute;
  width: 368px;
  height: 270px;
  left: 74px;
  top: 700px;

  background: linear-gradient(
    180deg,
    #ffffff 7.89%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 32px;
`;

const SvgBottomCenter = styled.div`
  position: absolute;
  width: 368px;
  height: 270px;
  left: 600px;
  top: 750px;

  background: linear-gradient(
    180deg,
    #ffffff 7.89%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 32px;
`;

const SvgBottomRight = styled.div`
  position: absolute;
  width: 368px;
  height: 364px;
  left: 1080px;
  top: 700px;

  background: linear-gradient(
    180deg,
    #ffffff 7.89%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 32px;
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
                <h1>
                  Find affordable <ColoredText>Learning</ColoredText> Resources
                </h1>
                <div className="banner-btn">
                  <Link href="/add-wallet">
                    <a className="default-btn two border-radius-5">
                      Get in Touch
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SvgTopLeft />

        <SvgTopLeftCenter />

        <SvgTopCenter />

        <SvgTopCenterRight />

        <SvgBottomLeft />

        <SvgBottomCenter />

        <SvgBottomRight />
      </div>
    </>
  );
};

export default BannerArea;
