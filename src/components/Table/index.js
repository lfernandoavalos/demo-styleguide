import React, {
  PureComponent,
} from 'react';

import classnames
  from 'classnames';

import style
  from './style/index.module.scss';

import Row
  from './Row';

import Header
  from './Header';

import Content
  from './Content';

class Table extends PureComponent {
  get classes() {
    const {
      className,
    } = this.props;

    return classnames(
      className,
      style.table,
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
      <table
        className={this.classes}
        {...otherProps}
      >
        {children}
      </table>
    );
  }
}

Table.Row = Row;
Table.Header = Header;
Table.Content = Content;

export default Table;
