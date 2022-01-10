import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
const Container = styled.div`
padding-right: 100px;
padding-left: 100px;
`


const TrendingArea = () => {
  
  return (
  
      <div className= "pt-100 pb-70">
        <Container>
          <div className='row'>
            <div className='col-3'>
              <div className='section-title'>
                <h6>Define your career path</h6>
              </div>
            </div>

            <div className='col-3'>
            <div className='section-title'>
                <h6>Master the required skills</h6>
              </div>
            </div>
            <div className='col-3'>
            <div className='section-title'>
                <h6>Master the required skills</h6>
              </div>
            </div>
            <div className='col-3'>
            <div className='section-title'>
                <h6>Master the required skills</h6>
              </div>
            </div>

            
          </div>

        
        </Container>
      </div>
   
  );
};

export default TrendingArea;
