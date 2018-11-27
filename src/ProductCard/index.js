import React from "react";
import "./product-card.css";
import PropTypes from "prop-types";
export default function ProductCard(props) {
  const {
    detailsClick,
    img,
    extra1,
    extra2,
    onActionClick,
    price,
    name
  } = props;
  return (
    <div className="product-card">
      <div className="product-card__content">
        <div className="product-card__overlay">
          <button onClick={detailsClick}>View Details</button>
        </div>
        <div className="product-card__image">
          <img src={img} alt="" />
        </div>
        <div className="product-card__details">
          <div className="product-card__details__head">
            <div className="product-card__price">{price}</div>
            <div className="product-card__detail">{name}</div>
          </div>
          <div className="product-card__details__tail">
            {extra1 && (
              <div className="product-card__details__group">
                <div className="product-card__name">{extra1.title}</div>
                <div className="product-card__detail">{extra1.data}</div>
              </div>
            )}
            {extra2 && (
              <div className="product-card__details__group">
                <div className="product-card__name">{extra2.title}</div>
                <div className="product-card__detail">{extra2.data}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="product-card__control">
        <div
          className="product-card__control__item"
          data-tooltip="Cart"
          onClick={onActionClick("cart")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="cart-icon"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
        <div
          className="product-card__control__item"
          data-tooltip="Wishlist"
          onClick={onActionClick("wishlist")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="heart-icon"
          >
            <path d="M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z" />
          </svg>
        </div>
        <div
          className="product-card__control__item"
          data-tooltip="Review"
          onClick={onActionClick("review")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="rate-icon"
          >
            <path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z" />
          </svg>
        </div>
        <div
          className="product-card__control__item"
          data-tooltip="Share"
          onClick={onActionClick("share")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="share-icon"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {};

ProductCard.defaultProps = {
  onActionClick() {}
};
