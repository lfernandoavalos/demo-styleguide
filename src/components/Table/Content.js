import React, {
  PureComponent,
} from 'react';

import PropTypes
  from 'prop-types';

import isNumber
  from 'lodash/isNumber';

import classnames
  from 'classnames';

import Typography
  from '../Typography';

import style
  from './style/index.module.scss';

class Content extends PureComponent {
  static propTypes = {
    /**
     * Header content
     * @type {string}
     */
    content: PropTypes.string,
  };

  static defaultProps = {
    content: undefined,
  };

  get classes() {
    const {
      className,
    } = this.props;

    return classnames(
      className,
      style.content,
    );
  }

  render() {
    // White list props
    const {
      className,
      children,
      content,
      ...otherProps
    } = this.props;

    const align = isNumber(content) ? 'right' : 'left';

    return (
      <td
        className={this.classes}
        {...otherProps}
      >
        <Typography align={align} as="xxs" content={content} />
      </td>
    );
  }
}

export default Content;
