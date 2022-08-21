import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { formatOrderNumber } from '../helpers/formatNumber';
import '../styles/styles-components/orderCard.css';

function OrderCard({
  orderId,
  status,
  orderDate,
  totalPrice,
  address,
  pathRoute,
  userRole,
}) {
  const history = useHistory();
  const userRoleFormatted = userRole.toLowerCase();
  const statusFormatted = status.toLowerCase();
  const styleOrderStatus = (orderStatus) => {
    let result = {};
    switch (orderStatus) {
    case 'pendente':
      result = {
        backgroundColor: 'rgb(211, 188, 60)',
        padding: '35px 45px',
      };
      break;
    case 'preparando':
      result = { backgroundColor: 'rgb(89, 184, 51)' };
      break;
    case 'entregue':
      result = {
        backgroundColor: 'rgb(60, 211, 166)',
        padding: '35px 45px',
      };
      break;

    default:
      result = { backgroundColor: 'rgb(150, 150, 150)' };
      break;
    }
    return result;
  };
  return (
    <button
      className="button-card"
      type="button"
      onClick={ () => history.push(`${pathRoute}/${orderId}`) }
    >
      <div className="button-card-order">
        <span
          className="span-card-order"
          data-testid={ `${userRoleFormatted}_orders__element-order-id-${orderId}` }
        >
          Pedido
          { ` ${formatOrderNumber(orderId)}` }
        </span>
      </div>
      <div className="button-card-info">
        <div className="button-card-info-1">
          <div
            className="button-card-info-1-order-status"
            style={ styleOrderStatus(statusFormatted) }
          >
            <span
              data-testid={
                `${userRoleFormatted}_orders__element-delivery-status-${orderId}`
              }
            >
              { status }
            </span>
          </div>
          <div className="button-card-info-1-date-price">
            <div
              data-testid={ `${userRoleFormatted}_orders__element-order-date-${orderId}` }
            >
              { orderDate }
            </div>
            <div
              data-testid={ `${userRoleFormatted}_orders__element-card-price-${orderId}` }
            >
              {
                totalPrice.toFixed(2).replace(/\./, ',')
              }
            </div>
          </div>
          <div
            className="button-card-info-2-address"
            data-testid={ `${userRoleFormatted}_orders__element-card-address-${orderId}` }
          >
            { address }
          </div>
        </div>
      </div>
    </button>
  );
}

OrderCard.propTypes = {
  orderId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  address: PropTypes.string,
  pathRoute: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
};

OrderCard.defaultProps = {
  address: '',
};

export default OrderCard;
