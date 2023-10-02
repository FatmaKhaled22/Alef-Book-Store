import React from 'react';
import { useTranslation } from 'react-i18next';

const Tranding = () => {
  const { t } = useTranslation();


  return (
    <div id="trending" className='pt-5'>
      <div className="heading d-flex flex-column align-items-center" id="Trending">
        <div><h1>{t('home.tranding.title')}</h1></div><div className="small"></div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 my-5">
          <img src='/assets/images/1.jpg' className='pb-4'/>
          <img src='/assets/images/2.webp' className='pb-4'/>
          <img src='/assets/images/3.webp' className='pb-4'/>
          <img src='/assets/images/4.jpg' className='pb-4'/>
          <img src='/assets/images/5.webp' className='pb-4'/>
          <img src='/assets/images/6.jpg' className='pb-4'/>
          <img src='/assets/images/7.jpg' className='pb-4'/>
          <img src='/assets/images/8.jpg' className='pb-4'/>
          <img src='/assets/images/9.jpg' className='pb-4'/>
          <img src='/assets/images/10.jpg' className='pb-4'/>
        </div>
      </div>
        
    </div>
  )
}

export default Tranding;
