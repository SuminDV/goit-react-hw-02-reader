import React from 'react';
import PropTypes from 'prop-types';
import st from '../Reader/styles.module.css';

const Counter = ({ index, length }) => (
  <p className={st.counter}>
    {index}/{length}
  </p>
);

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Counter;
