import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Spinner from "react-bootstrap/Spinner";
import '../../clientzone.css'


export default function MyAddress({data}) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  return (
    <div className="addresses box-primary">
      {loading ? (
        <Spinner
          animation="border"
          role="status"
          className="container d-flex align-items-center justify-content-center">
          <span className="visually-hidden ">Loading...</span>
        </Spinner>
      ) : (
        <div className="addresses-container">
          <div className="row">
            {data ? (
              <div className="card mb-3">
              <div className="row g-0">
                <div className="col-lg-4 text-center">
                  <img src={
                    data.image
                      ? `${data?.image}`
                      : `https://cdn-cms-s.f-static.net/versions/2/wizard/clientZone/images/noImage.png`
                    }
                    data-src="https://cdn-cms-s.f-static.net/versions/2/wizard/clientZone/images/noImage.png" className="img-fluid rounded-start" alt="img-profile" />
                </div>
                <div className="col-lg-8 font-style">
                  <div className="card-body">
                    <h4 className="card-text text-center pb-4"> {t("client-zone.myaddress.address.hello")} <b>{data.firstName}</b></h4>
                    <h5 className="card-text py-2"><i className="bi bi-person-fill fs-5 px-3"></i> {t("client-zone.myaddress.address.l-name")} : <b> {data.firstName} {data.lastName}</b></h5>
                    <h5 className="card-text py-2"><i className="bi bi-geo-alt-fill fs-5 px-3"></i> {t("client-zone.myaddress.address.l-address")} : <b> {data.country} - {data.address}</b></h5>
                    <h5 className="card-text py-2"><i className="bi bi-telephone-forward-fill fs-5 px-3"></i> {t("client-zone.myaddress.address.l-phone")} : <b> {data.phoneNumber}</b></h5>
                  </div>
                </div>
              </div>
            </div>
            ) : (
              <div className="address-empty-msg text-center">
                <h4>{t("client-zone.myaddress.address.empty-title")}</h4>
                <span className="line"></span>
              </div>
            )}
          </div>
          <div className="address-container-btn text-center btn-danger"></div>
        </div>
      )}
    </div>
  );
}
