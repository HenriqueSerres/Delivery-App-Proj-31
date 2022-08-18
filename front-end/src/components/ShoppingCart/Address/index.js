import React from 'react';

function Address() {
  return (
    <>
      <label htmlFor="customer_checkout__select-seller">
        P. Vendedor Responsável
        <select name="" data-testid="customer_checkout__select-seller">
          {/* <option value="" /> */}
        </select>
      </label>
      <label htmlFor="customer_checkout__input-address">
        Endereço
        <input type="text" data-testid="customer_checkout__input-address" />
      </label>
      <label htmlFor="customer_checkout__input-addressNumber">
        Número
        <input type="text" data-testid="customer_checkout__input-addressNumber" />
      </label>
    </>
  );
}

export default Address;
