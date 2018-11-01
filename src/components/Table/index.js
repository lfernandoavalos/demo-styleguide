import React, {
  PureComponent,
} from 'react';

import PropTypes
  from 'prop-types';

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
      style.table,
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
      <table
        className={this.classes}
        {...otherProps}
      >
        {React.Children.map(children, (ele, i) => (
          React.cloneElement(ele, { dense })
        ))}
      </table>
    );
  }
}

Table.Row = Row;
Table.Header = Header;
Table.Content = Content;

export default Table;
