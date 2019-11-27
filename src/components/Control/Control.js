import React from 'react';
import PropTypes from 'prop-types';
import st from '../Reader/styles.module.css';

const Control = ({ right, left, enabled, unenable }) => (
  <div className={st.reader}>
    <section className={st.controls}>
      <button
        disabled={!enabled}
        onClick={left}
        type="button"
        className={st.button}
      >
        Назад
      </button>
      <button
        disabled={!unenable}
        onClick={right}
        type="button"
        className={st.button}
      >
        Вперед
      </button>
    </section>
  </div>
);

Control.propTypes = {
  left: PropTypes.func.isRequired,
  right: PropTypes.func.isRequired,
  enabled: PropTypes.number.isRequired,
  unenable: PropTypes.number.isRequired,
};

export default Control;
