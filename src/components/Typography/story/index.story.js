import React, {
  Fragment,
} from 'react';

import map
  from 'lodash/map';

import {
  storiesOf,
} from '@storybook/react';

import {
  Grid,
  Row,
  Col,
} from 'react-flexbox-grid';

import Typography
  from '..';

import style
  from './index.module.scss';

const sizes = {
  xxxx: '46px — Extra extra extra extra large',
  xxx: '38px — Extra extra extra large',
  xx: '28px — Extra extra large',
  x: '20px — Extra large',
  l: '18px — Large',
  m: '16px — Medium',
  s: '14px — Small',
  xs: '12px — Extra small',
  xxs: '10px — Extra extra small',
};

storiesOf('Typography', module)
  .add('Typography', () => (
    <Fragment>
      <Grid>
        {map(sizes, (caption, size) => (
          <Row key={`row-${size}`} className={style.row}>
            <Col md={12}>
              <Row className={style.titleRow}>
                <Col md={12}>
                  <Typography
                    content="The quick brown fox jumps over the lazy dog"
                    as={size}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Typography
                    content={caption}
                    as="caption"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Grid>
    </Fragment>
  ));
