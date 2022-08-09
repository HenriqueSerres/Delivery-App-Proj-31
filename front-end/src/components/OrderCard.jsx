import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({
  order,
  status,
  orderDate,
  totalPrice,
  address,
  dataTestIdOrderId,
}) {
  return (
    <div className="div-card">
      <div className="div-card-order">
        <span
          className="span-card-order"
          data-testid={ `seller_orders__element-order-id-${dataTestIdOrderId}` }
        >
          { order }
        </span>
      </div>
      <div className="div-card-info">
        <div className="div-card-info-1">
          <div className="div-card-info-1-order-status">
            <span
              data-testid={
                `seller_orders__element-delivery-status-${dataTestIdOrderId}`
              }
            >
              { status }
            </span>
          </div>
          <div className="div-card-info-1-date-price">
            <div
              data-testid={ `seller_orders__element-order-date-${dataTestIdOrderId}` }
            >
              { orderDate }
            </div>
            <div
              data-testid={ `seller_orders__element-card-price-${dataTestIdOrderId}` }
            >
              { totalPrice }
            </div>
          </div>
        </div>
        <div
          className="div-card-info-2-address"
          data-testid={ `seller_orders__element-card-address-${dataTestIdOrderId}` }
        >
          { address }
        </div>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  dataTestIdOrderId: PropTypes.string,
};

OrderCard.defaultProps = {
  dataTestIdOrderId: '',
};

export default OrderCard;
