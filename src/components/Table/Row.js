import React, {
  PureComponent,
} from 'react';

import classnames
  from 'classnames';

import style
  from './style/index.module.scss';

class Row extends PureComponent {
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
      ...otherProps
    } = this.props;

    return (
      <tr
        className={this.classes}
        {...otherProps}
      >
        {children}
      </tr>
    );
  }
}

export default Row;
