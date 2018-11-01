import React, {
  PureComponent,
} from 'react';

import PropTypes
  from 'prop-types';

import classnames
  from 'classnames';

import style
  from './style/index.module.scss';

class Row extends PureComponent {
  static propTypes = {
    /**
     * Dense
     * @type {string}
     */
    dense: PropTypes.bool,
  };

  static defaultProps = {
    dense: false,
  };

  get classes() {
    const {
      className,
    } = this.props;

    return classnames(
      className,
      style.row,
    );
  }

  render() {
    // White list props
    const {
      className,
      children,
      dense,
      ...otherProps
    } = this.props;

    return (
      <tr
        className={this.classes}
        {...otherProps}
      >
        {React.Children.map(children, (ele, i) => (
          React.cloneElement(ele, { dense })
        ))}
      </tr>
    );
  }
}

export default Row;
