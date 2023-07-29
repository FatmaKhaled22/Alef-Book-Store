import React from 'react'
import { useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const AuthorBooks = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const style = { boxShadow: '10px 10px 5px #aaaaaa' }
  const book = useSelector((state) =>state.books.books.find((book) => book._id === id))
  const authorId = useSelector((state) => state.authors.authorID)
  const authorBooks = useSelector((state) => state.books.books).filter((book)=>book.author._id === authorId);
  console.log('authorBooks from:------> AuthorBooks--->',authorBooks );


  return (
<>
  <div className="container" >
    <section>
      <div className="container pt-2">
        <div className="row text-center">
          <div className="heading d-flex flex-column align-items-center my-3">
            <div>
              <h1>{book?.author.name}</h1>
            </div>
            <div className="small"></div>
          </div>
        </div>
      </div>
    </section>
    <div className="row row-cols-md-2 row-cols-lg-4  row-cols-1 col-12 px-5 pt-5 justify-content-center" >
      {
        authorBooks.map((book) => (
          <div className="col mb-5" style={{ height: '620px' }} key={book._id}>
            <div className="card h-100" style={style}>
              <img className="card-img-top" src={book.bookImage} style={{ height: '340px' }} />
              <div className="card-body p-4">
                <div className="text-center" >
                  <h5 className="fw-bolder"  >{book.bookTitle}</h5>
                  <p className="card-text">{book.price}.00 {t('product-details.p-egp')}</p>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <Link to={`/details/${book._id}`} className="btn btn-outline-dark mt-auto">{t('product-list.product.btn')}</Link>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
</div>
</>
  );
  
}

export default AuthorBooks
