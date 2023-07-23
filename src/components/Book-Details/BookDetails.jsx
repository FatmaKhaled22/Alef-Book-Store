import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { addToCart } from '../../store/reducers/cartSlice';
import Related from './related-section';
import Review from './review/review';
import { useTranslation } from 'react-i18next';
import './BookDetails.css';

export default function BookDetails() {

  const { t } = useTranslation();
  //=========================================//
  const { id } = useParams();
  const book = useSelector((state) =>state.books.books.find((book) => book._id === id))
  console.log('book:------>',book);
  
  const category = useSelector((state) => state.categories.find((cat)=>cat._id === book.category));
  const authorName = book.author.name;
  const authorBooks = useSelector((state) => state.books.books.filter((book) => book.author.name === authorName));
  const stock = book.bookStock
  console.log('====================================');
  console.log('authorBooks:',authorBooks);
  console.log('bookStock:',stock);
  console.log('====================================');
  //=========================================//
  // useEffect(() => {
    const [quantity, setQuantity] = useState(1);
  // },[]);
  
  console.log('quantity:------>',quantity);
  const dispatch = useDispatch()

  /// handle -> zoom in & zoom out
  const handleZoom = (e) => {
    const zoomer = e.currentTarget ;
    const offsetX = e.nativeEvent.offsetX ? e.nativeEvent.offsetX : e.touches[0].pageX ;
    const offsetY = e.nativeEvent.offsetY ? e.nativeEvent.offsetY : e.touches[0].pageY ;
    const x = (offsetX / zoomer.offsetWidth) * 100 ;
    const y = (offsetY / zoomer.offsetHeight) * 100 ;
    zoomer.style.backgroundPosition = `${x}% ${y}%`
  }

  return (
    <>

      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/home" className="nav-link">{t('product-details.home')}</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/category" className="nav-link">{t('product-details.store')}</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to={`/store/${category?._id}`} className="nav-link">{category?.name}</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {book?.bookTitle}
          </li>
        </ol>
      </nav>
      
      <div className="container">
        <section>
          <div className="container pt-2">
            <div className="row text-center">
              <div className="heading d-flex flex-column align-items-center mb-1">
                <div>
                  <h1>{book?.bookTitle}</h1>
                </div>
                <div className="small"></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container  my-5">
            <div className="row  gx-lg-5 ">
              <div className="col-md-4">
                <div className="zoom " onMouseMove={(e) => handleZoom(e)}
                  style={{ borderRadius: '12px', backgroundImage: `url(${book?.bookImage})`}}>
                  <img className="card-img-top mb-md-0" src={book?.bookImage} alt="Book Cover"/>
                </div>
              </div>
              <div className="col-md-8"><br /><br/>
                <div className="fs-5 d-flex flex-column mb-3">
                  <span className="price">{book?.price}.00 {t('product-details.p-egp')} </span>
                </div>
                <div>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                </div><br/>
                <ul className="list-unstyled">
                  <li>
                    <span>{t('product-details.t-page')} : {book?.bookPages}</span>
                  </li>

                  <li>
                    <span>{t('product-details.t-category')}{category?.name}</span>
                  </li>

                  <li>
                    <span>{t('product-details.t-author')} : {book?.author.name}</span>
                  </li>

                  <li>
                    <span>{t('product-details.t-publication')} : {book?.publishedYear}</span>
                  </li>
                  
                  <li>
                    <span>SKU : </span>
                    <span id="productSku" data-sku="9789778616187">9789778616187</span>
                  </li>
                  <li
                    id="productShipping"
                    data-unique-id="63131a99c06d4"
                    data-weight="kg"
                    data-length="cm">
                    <div className="product-shipping-content">
                      <span className="shipping-title">{t('product-details.t-shipping')} : </span>
                      <span className="first-option">
                        {t('product-details.shipping')}
                      </span>
                    </div>
                  </li>
                  <li id="returnPolicyInfo">
                    <div className="return-policy-content">
                      <span className="return-policy-title">
                        {t('product-details.t-policy')} :
                      </span><br/>
                      <span className="product-return-policy" data-more="1">
                        - {t('product-details.policy1')}<br/>
                        - {t('product-details.policy2')}
                      </span>
                    </div>
                    <hr />
                  </li>
                </ul>
                <div className="d-flex">
                  <div className="input-container">
                    <button
                      onClick={() => { setQuantity((quantity) => quantity - 1)}}
                      className={`minus ${quantity <= 0 ? 'disabled' : ''}`}
                      disabled={quantity <= 0}>
                      -
                    </button>
                    <input type="text" readOnly value={quantity} />
                    <button
                      onClick={() => {setQuantity((q) => q + 1)}}
                      className={`plus ${quantity <= stock ? 'disabled' : ''}`}
                      disabled={quantity >= stock }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="py-0 mx-3 btn btn-outline-danger flex-shrink-0 icon"
                    type="button"
                    onClick={() => {
                       dispatch(addToCart({ book, quantity }));
                       setQuantity(1);
                       }}>
                    <i className="bi-cart-fill "></i> {t('product-details.btn-cart')}
                  </button>
                </div><br/>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="col-xs-12">
            <div className="heading d-flex flex-column align-items-center mb-5">
              <div>
                <h1>{t('product-details.learn')}</h1>
              </div>
              <div className="small"></div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                {/* Description tab content */}
                <div className="container ">
                  <h4 style={{textAlign: 'right', paddingTop: '10px', borderRadius: '5px',color: 'gray',}}>
                    <strong>{book?.description}</strong>
                  </h4>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Related Product */}
        <section className="py-5 ">
          <div className="heading d-flex flex-column align-items-center mb-5">
            <div>
              <h1>{t('product-details.related')}</h1>
            </div>
            <div className="small"></div>
          </div>
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center h-100">
              <Related/>
            </div>
          </div>
        </section>
        <Review/>
      </div>
    </>
  )
}
