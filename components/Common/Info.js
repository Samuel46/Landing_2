import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

const Header = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: #12355b;
  text-align: left;
`;
const Text = styled.p`
  text-align: left;
  font-size: 16px;
  color: #000000;
`;

const Button = styled.button`
  border: none;
  min-width: 200px;
  min-height: 48px;
  background: #5832da;
  border-radius: 8px;
  color: white;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ContainerStyle = styled.div`
  background: white;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;
const Icon = styled.img`
  width: 150px;
`;
const Info = () => {
  return (
    <>
      <ContainerStyle className=" ptb-100">
        <FlexContainer className="container">
          <InnerWrapper>
            <Icon src="../images/icon1.svg" alt="image" />
            <Header>Define your career path</Header>
            <Text>
              Define your career path for yourself, or chart a new territory
              entirely; we’ve got your back either way.
            </Text>
            <Button>
              Discover your career
              <i class="ri-arrow-right-s-line"></i>
            </Button>
          </InnerWrapper>
          <InnerWrapper>
            <Icon src="../images/icon2.svg" alt="image" />
            <Header>Match Skills</Header>
            <Text>
              With our skill-matching technology, we can accurately match your
              skills to the right job opportunites for you.
            </Text>
            <Button>
              Match Skills
              <i class="ri-arrow-right-s-line"></i>
            </Button>
          </InnerWrapper>
          <InnerWrapper>
            <Icon src="../images/icon3.svg" alt="image" />
            <Header>Apply to the right job</Header>
            <Text>
              Get expert coaching to deliver on-demand skills that can help you
              navigate through list of jobs to find that right one.
            </Text>
            <Button>
              Search now
              <i class="ri-arrow-right-s-line"></i>
            </Button>
          </InnerWrapper>
        </FlexContainer>
      </ContainerStyle>
      {/* <div className=' ptb-100'>
        <div className='container'>
          <div className='row'>
                <div className='col-4'>
                  <div>
                    <ImageIcon
                      src='../images/icon1.svg'
                      alt='image'
                    />
                    <Header>Define your career path</Header>
                    <Text>
                    Define your career path for yourself, or chart a new territory entirely; we’ve got your back either way.
                    </Text>
                    
                  </div>
                  <Button>Discover your career
                  
                  <i class="ri-arrow-right-s-line"></i>
                  </Button>
                </div>

                <div className='col-4' >
                  <div >
                    <ImageIcon
                      src='../images/icon2.svg'
                      alt='image'
                    />
                      <Header>Match Skills</Header>
                    <Text>
                    With our skill-matching technology, we can accurately match your skills to the right job opportunites for you.
                    </Text>
                  </div>
                  <Button>Discover your career <i class="ri-arrow-right-s-line"></i></Button>
                </div>

                <div className='col-4' >
            
                  <div >
                    <ImageIcon
                      src='../images/icon3.svg'
                      alt='image'
                    />
                    <Header>Apply to the right job</Header>
                    <Text>
                    Get expert coaching to deliver on-demand skills that can help you navigate through list of jobs to find that right one.
                    </Text>
                  </div>
                  <Button>Search now <i class="ri-arrow-right-s-line"></i></Button>
                </div>
            
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Info;
