import React
  from 'react';

import loremIpsum
  from 'lorem-ipsum';

import {
  storiesOf,
} from '@storybook/react';

import {
  withKnobs,
  select as selectKnob,
} from '@storybook/addon-knobs';

import {
  withInfo,
} from '@storybook/addon-info';

import Button
  from '..';

const PrimaryButtonStory = () => {
  const as = selectKnob('Variation', {
    'primary': 'as primary',
  }, 'primary');

  const size = selectKnob('Size', {
    'xs': 'as extra small',
    's': 'as small',
    'm': 'as medium',
    'l': 'as large',
    'xl': 'as extra large',
  }, 'm');

  return (
    <Button
      content="Hello Button"
      size={size}
      as={as}
    />
  );
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary Button',
    withInfo(loremIpsum({ count: 5 }))(PrimaryButtonStory)
  );
