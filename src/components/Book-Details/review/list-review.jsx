import showRating from './show-rating';
import { useTranslation } from 'react-i18next';
import './review.css';

function ListReview({ reviews }) {

  const { t } = useTranslation();

  return (
    <>
      {reviews.length === 0 && <p className="text-center">{t('review.no-comment')}</p>}
      <ul className="list-group m-2 list">
        {reviews.map((review) => {
          return (
            <li className="list-group-item d-flex border" key={review._id}>
              <div className="">
                <div className="d-flex justify-content-center">
                  <img src={review.user.image} width={'50px'} className="rounded-circle m-2" alt="User Avatar" />
                  <h5 className="fw-bold pt-4">{`${review.user.firstName} ${review.user.lastName}`}</h5>
                </div>
                <div className="ms-3">
                    <>
                      <p>{review.comment}</p>
                      <p>{showRating(review.rating)}</p>
                    </>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListReview;
