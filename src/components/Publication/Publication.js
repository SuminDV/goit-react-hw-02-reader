import React from 'react';
import PropTypes from 'prop-types';
import st from '../Reader/styles.module.css';

const Publication = ({ title, text, index }) => (
  <article className={st.publication}>
    <h2>
      {index}. {title}
    </h2>
    <p>{text}</p>
  </article>
);

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Publication;
