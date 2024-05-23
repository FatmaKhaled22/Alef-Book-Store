import React from "react";
import { useTranslation } from "react-i18next";
import './hero.css'
import ResponsiveHeader from "../../navbar/ResponsiveHeader";


const Hero = () => {
  const { t } = useTranslation();
  const translatedTitle = t('home.hero.title');
  return (
    <>
      <div className="p-0 m-0">
        <div className="text-center p-lg-6" style={{background: "url(https://static1.s123-cdn-static-a.com/uploads/5171355/800_627548307dd06_filter_627548f613ae4.jpg) center/ cover no-repeat"}}>
          <div className="col-xxl">
            <div className="p-0 m-0 text-light" style={{backgroundColor : "rgba(0, 0, 0, 0.542)"}}>
                <div>
                    <br /><br /><br /><br /><br /><br /><br />
                    {/* <h1 className="hero-title hero-shadow">{t('home.hero.title')}</h1> */}
                    <h1 className="hero-title hero-shadow">
                      <ResponsiveHeader title={translatedTitle}/>
                    </h1>
                    <h2 className="hero-des hero-shadow">
                      {t('home.hero.description')}<br />
                    </h2>
                    <h3 className="license hero-shadow">
                      {t('home.hero.license')}<br />
                      526-006-684<br />
                    </h3>
                    <br /><br /><br /><br /><br /><br />
                </div>
            </div>
            <div className="lc-block">
              <div editable="rich"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
