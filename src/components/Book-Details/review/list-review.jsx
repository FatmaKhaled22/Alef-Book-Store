import React from "react";
import showRating from './show-rating';
import './review.css';

function ListReview({ reviews }) {
  return (
    <>
      <ul className="list-group m-2 list">
        {reviews.map((review) => (
          <li className="list-group-item d-flex border" key={review.id}>
            <div className="">
              <div class="d-flex justify-content-center">
                <img src="/assets/img/person-icon.png" width={"50px"} className="rounded-circle m-2"/>
                <h5 className="fw-bold pt-4">{review.name}</h5>
              </div>
              <div className="ms-3">
                <p>{review.message}</p>
                <p>{showRating(review.rating)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListReview;
