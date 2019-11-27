import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Control from '../Control/Control';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import st from './styles.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }),
    ).isRequired,
  };

  state = {
    index: 0,
  };

  left = () => {
    this.setState(state => ({
      index: state.index - 1,
    }));
  };

  right = () => {
    this.setState(state => ({
      index: state.index + 1,
    }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const enabled = index + 1 > 1;
    const unenable = index + 1 < items.length;
    console.log(enabled);

    // const { title, text } = items[index];

    return (
      <div className={st.reader}>
        <Control
          right={this.right}
          left={this.left}
          enabled={enabled}
          unenable={unenable}
        />
        <Counter index={index + 1} length={items.length} />
        <Publication
          index={index + 1}
          text={items[index].text}
          title={items[index].title}
        />
      </div>
    );
  }
}
