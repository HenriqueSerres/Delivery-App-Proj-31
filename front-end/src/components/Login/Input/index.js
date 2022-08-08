import React from 'react';

function Input({
  htmlFor,
  type,
  dataTestId,
  placeholder,
  value,
  onChange,
}) {
  return (
    <label htmlFor={ htmlFor }>
      <input
        type={ type }
        data-testid={ dataTestId }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

export default Input;
