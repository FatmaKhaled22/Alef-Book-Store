import React from 'react'
import Filter from '../filter-side/sidebar'
import Product from '../product/product'
import {  useSelector } from 'react-redux';
import { NavLink ,useParams} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Shop = () => {

  const { id } = useParams();
  const category = useSelector((state) => state.categories.find((cat)=>cat._id === id));

  const { t } = useTranslation();
  return (
    <>
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb"  id='breadcrumb'>
          <li className="breadcrumb-item">
            <NavLink to="/home" className="nav-link">{t('product-list.shop.home')}</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/category" className="nav-link">{t('product-list.shop.store')}</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <NavLink to="#" className="nav-link">{category.name}</NavLink>
          </li>
        </ol>
      </nav>

      <div className="heading d-flex flex-column align-items-center mb-5">
        <div>
          <h1>{category.name}</h1>
        </div>
        <div className="small"></div>
      </div>
      
      <div className="container-lg product-sec">
        <div className="row">
          <div className='col-sm-4 px-3'>
            <Filter />
          </div>
          <div className="col-sm-8 px-5 product" style={{ alignContent: 'flex-start' }}>
          <Product />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop ;
