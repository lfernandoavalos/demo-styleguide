import React, {
  PureComponent,
} from 'react';

import PropTypes
  from 'prop-types';

import classnames
  from 'classnames';

import capitalize
  from '../../packages/lib/string/capitalize';

import style
  from './style/index.module.scss';

class Typography extends PureComponent {
  static propTypes = {
    /**
     * Content to display
     * @type {string}
     */
    content: PropTypes.string,
    /**
     * Html tag to use
     * @type {[string]}
     */
    tag: PropTypes.oneOf([
      'div',
      'span',
      'p',
    ]),
    /**
     * Font variation
     * @type {[string]}
     */
    as: PropTypes.oneOf([
      'xxxx',
      'xxx',
      'xx',
      'x',
      'l',
      'm',
      's',
      'xs',
      'xxs',
      'caption',
    ]),
    /**
     * Text alignment
     * @type {[string]}
     */
    align: PropTypes.oneOf([
      'left',
      'center',
      'right'
    ]),
  };

  static defaultProps = {
    content: undefined,
    tag: 'p',
    as: 'm',
    align: 'left',
  };

  get classes() {
    const {
      className,
      align,
      as,
    } = this.props;

    /**
     * Generate typography class name with prefix
     * i.e.
     * classNamePrefix('prefix') => marvelTypographyPrefix
     *
     * @param  {String} sufix - Additional classname sufix
     * @return {string}
     */
    const classNamePrefix = (sufix = '') => `marvelTypography${capitalize(sufix)}`;

    return classnames(
      className,
      // Base typography class name
      style[classNamePrefix()],
      // Class name based on typography variation - For now size
      style[`${classNamePrefix()}${capitalize(as)}`],
      // Class name for text alignment
      style[`${classNamePrefix('Align')}${capitalize(align)}`],
    );
  }

  render() {
    // Whitelist to prevent being passed down as props
    const {
      content,
      children,
      className,
      tag: Tag,
      as,
      align,
      ...otherPros
    } = this.props;

    return (
      <Tag
        className={this.classes}
        {...otherPros}
      >
        {content || children}
      </Tag>
    );
  }
}

export default Typography;
