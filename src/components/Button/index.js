import React, {
  PureComponent,
} from 'react';

import PropTypes
  from 'prop-types';

import classnames
  from 'classnames';

import capitalize
  from '../../packages/lib/string/capitalize';

import Typography
  from '../Typography';

import style
  from './style/index.module.scss';

class Button extends PureComponent {
  static propTypes = {
    /**
     * Button theme
     * @type {[string]}
     */
    as: PropTypes.oneOf([
      'primary',
    ]),
    /**
     * Button Size
     * @type {[string]} size
     */
    size: PropTypes.oneOf([
      'xl',
      'l',
      'm',
      's',
      'xs',
    ]),
    /**
     * Button text
     * @type {string}
     */
    content: PropTypes.string,
  };

  static defaultProps = {
    as: 'primary',
    size: 'm',
    content: undefined,
  };

  get classes() {
    const {
      className,
      size,
      as,
    } = this.props;

    const classNamePrefix = (sufix = '') => `marvelButton${sufix}`;
    console.log(style[classNamePrefix()]);
    return classnames(
      // Prop Class Name
      className,
      style[classNamePrefix()],
      // Size Class Name - marvelButtonSizeM
      style[`${classNamePrefix('Size')}${capitalize(size)}`],
      // Theme Class Name - marvelButtonPrimary
      style[classNamePrefix(capitalize(as))],
    );
  }

  /**
   * Typography variation to go along with button sizing
   * @return {string}
   */
  get typographyVariation() {
    const {
      size,
    } = this.props;

    const fontSizes = {
      xl: 'l',
      l: 'm',
      m: 's',
      s: 'xs',
      xs: 'xxs',
    };

    return fontSizes[size];
  }

  render() {
    const {
      content,
      className,
      ...otherProps
    } = this.props;

    return (
      <button
        className={this.classes}
        {...otherProps}
      >
        <Typography
          as={this.typographyVariation}
          content={content}
        />
      </button>
    );
  }
}

export default Button;
