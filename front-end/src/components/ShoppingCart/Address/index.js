import React from 'react';
import PropTypes from 'prop-types';

function Address({ sellers, setAddress, setTeste }) {
  console.log(sellers);
  return (
    <>
      <label htmlFor="customer_checkout__select-seller">
        P. Vendedor Responsável
        <select
          name=""
          data-testid="customer_checkout__select-seller"
          onClick={ ({ target }) => {
            const sellerId = target.options[target.selectedIndex].id;
            setTeste(+sellerId);
          } }
        >
          {
            sellers
             && sellers.map((seller) => (
               <option value={ seller.id } key={ seller.name } id={ seller.id }>
                 {seller.name}
               </option>
             ))
          }
        </select>
      </label>
      <label htmlFor="customer_checkout__input-address">
        Endereço
        <input
          type="text"
          data-testid="customer_checkout__input-address"
          onChange={ ({ target }) => setAddress((c) => ({
            ...c, clientAddress: target.value })) }
        />
      </label>
      <label htmlFor="customer_checkout__input-addressNumber">
        Número
        <input
          type="text"
          data-testid="customer_checkout__input-addressNumber"
          onChange={ ({ target }) => setAddress((c) => ({
            ...c, clientNumber: target.value })) }
        />
      </label>
    </>
  );
}

Address.propTypes = {
  sellers: PropTypes.string,
  setAddress: PropTypes.string,
}.isRequired;

export default Address;
