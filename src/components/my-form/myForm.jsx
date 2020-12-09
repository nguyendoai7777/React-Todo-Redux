import React, { useState } from 'react';
import PropTypes from 'prop-types';

MyForm.propTypes = {
  onSubmit: PropTypes.func,

};

MyForm.defaultProps = {
  onSubmit: null,
}

function MyForm(props) {
  const { onSubmit, } = props;
  const [value, setValue] = useState('');

  const handleValue = (e) => {
    setValue(e.target.value)
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    let formValues = {
      title: value,
    };
    onSubmit(formValues)
  }
  return (
    <form onSubmit={formSubmit} >
      <input type="text" className="form-control" value={value} onChange={handleValue} />
    </form>
  );
}

export default MyForm;