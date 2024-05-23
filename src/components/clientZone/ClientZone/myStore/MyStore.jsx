import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MyStore() {

  const [loading, setLoading] = useState(false);
  const order = useSelector((state) => state.order);
  console.log("order---->" , order)

  const { t } = useTranslation();

  return (
    <div className="orders box-primary ">
      <div className="orders-container">
      <div className="client-zone-orders-loader">
          {loading ? (
            <Spinner
              animation="border"
              role="status"
              className="container d-flex align-items-center justify-content-center">
              <span className="visually-hidden ">Loading...</span>
            </Spinner>
          ) : (
        <div className="client-zone-orders">
          <h3>{t("client-zone.store.title")}</h3>
          <div className="client-zone-orders-rows">
            <div className="client-zone-orders-rows">
            {order.map((e) => (
              <div className="card w-100 mb-3" style={{ width: "18rem", background: "rgba(240, 248, 255, 0.752)",}} key={e._id}>
                <div className="card-body">
                  <div className="row w-100 ms-0">
                    <div className="col-lg-5 mb-5 order-info">
                      <h6 className="card-text">{t("client-zone.store.l-address")} : <b> {e.address}</b></h6>
                      <h6 className="card-text ">{t("client-zone.store.method")} : <b> {e.paymentMethod}</b></h6>
                      <h6 className="card-text">{t("client-zone.store.items")} : <b> {e.items.length}</b></h6>
                      <h6 className="card-text">{t("client-zone.store.price")} : <b>{e.totalPrice}.00 {t('product-details.p-egp')}</b></h6>
                    </div>
                    <div className="col-lg-7">
                      <div className="card-text">{e.items.map((b)=>{
                      return(
                        <div className="card mb-3 details-order" style={{maxWidth: "500px"}} key={b._id}>
                          <div className="row g-0">
                            <div className="col-sm-4">
                              <img src={b.book.bookImage} className="img-fluid rounded-start" alt="img_order"/>
                            </div>
                            <div className="col-sm-8">
                              <div className="card-body text-center">
                              <Link to={`/details/${b.book._id}`} style={{textDecoration:"none"}}>
                                <h4 className="card-text ">{b.book.bookTitle}</h4>
                              </Link>
                                <h6 className="card-text text-color p-3">{b.book.price}.00 {t('product-details.p-egp')}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      )})}
                    </div>
                  </div>
                  </div>
                </div>
              </div>
                ))}
            </div>
          </div>
        </div>
          )}
        </div>
      </div>
    </div>
  );
}
