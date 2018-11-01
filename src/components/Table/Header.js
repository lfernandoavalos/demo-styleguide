import React, {
  PureComponent,
} from 'react';

import PropTypes
  from 'prop-types';

import classnames
  from 'classnames';

import Typography
  from '../Typography';

import style
  from './style/index.module.scss';

class Header extends PureComponent {
  static propTypes = {
    /**
     * Header content
     * @type {string}
     */
    content: PropTypes.string,
    /**
     * Variation for header
     * @type {[string]}
     */
    as: PropTypes.oneOf([
      // Numeric title indicates text align right
      'numeric',
    ]),
    /**
     * Dense
     * @type {string}
     */
    dense: PropTypes.bool,
  };

  static defaultProps = {
    content: undefined,
    as: undefined,
    dense: false,
  };

  get classes() {
    const {
      className,
      dense,
    } = this.props;

    return classnames(
      className,
      style.header, {
        [style[`headerDense`]]: dense,
      }
    );
  }

  render() {
    // White list props
    const {
      className,
      children,
      content,
      as,
      dense,
      ...otherProps
    } = this.props;

    const align = as === 'numeric' ? 'right' : 'left';

    return (
      <th
        className={this.classes}
        {...otherProps}
      >
        <Typography align={align} as="xxs" content={content} />
      </th>
    );
  }
}

export default Header;
