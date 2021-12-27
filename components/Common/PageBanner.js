import React from 'react';
import Link from 'next/link'

const PageBanner = ({ bannerHeading, parentTitle, pageTitle,bg }) => {
  return (
    <>
      <div className={`inner-banner ${bg}`}>
        <div className='container'>
          <div className='inner-title'>
            <h3>{bannerHeading}</h3>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
