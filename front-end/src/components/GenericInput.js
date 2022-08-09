import React from 'react';
import PropTypes from 'prop-types';

function GenericInput({
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

GenericInput.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

GenericInput.defaultProps = {
  dataTestId: '',
  placeholder: '',
  value: '',
  onChange: () => '',
};

export default GenericInput;
