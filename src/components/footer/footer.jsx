import React from "react";
import '../navbar/nav.css'
import { NavLink } from "react-router-dom";
import { useTranslation} from 'react-i18next'


const Footer = () => {

  const { t } = useTranslation();
  return (
    <>
      <div className="container-fluid m-0 p-0" >
        <div className="row footer-sec pt-5 m-0">
            <ul className="list-unstyled col-md-5 text-center">
              <li className="mt-1 fs-6">
                <p>{t('footer.desc1')}</p>
                <p>{t('footer.desc2')}</p>
              </li>
            </ul>
      
            <div className="footer-sec col-md-7 text-center p-0">
            <ul className="navbar-nav footer d-flex justify-content-center flex-row text-center">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">{t("footer.home")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">{t("footer.store")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tranding" className="nav-link">{t("footer.tranding")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">{t("footer.about")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">{t("footer.contact")}</NavLink>
              </li>
            </ul>
          {/* <!-- Section: Social media --> */}
        </div>
      </div>

      <div className="text-center text-white social-div pt-3">
        {/* <!-- Grid container --> */}
        <div className="container" id="footer_social">
          {/* <!-- Section: Social media --> */}
            <section className="pb-3">
            {/* <!-- Facebook --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                <i className="bi bi-facebook"></i >
              </a>

            {/* <!-- Twitter --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                <i className="bi bi-twitter"></i >
              </a>

            {/* <!-- Google --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                <i className="bi bi-google"></i >
              </a>

            {/* <!-- Instagram --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                <i className="bi bi-instagram"></i >
              </a>
            </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;