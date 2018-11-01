import React
  from 'react';

import map
  from 'lodash/map';

import loremIpsum
  from 'lorem-ipsum';

import {
  storiesOf,
} from '@storybook/react';

import {
  withInfo,
} from '@storybook/addon-info';

import {
  withKnobs,
  boolean as booleanKnob,
} from '@storybook/addon-knobs';


import Grid
  from '../../Grid';

import Table
  from '..';

const got = [{
  desserts: 'Frozen Yogurt',
  calories: 159,
  fat: 6.0,
  carbs: 24,
  protein: 4.0,
}];

const TableStory = () => {
  const dense = booleanKnob('Dense', false);
  return (
    <Grid style={{ margin: 48 }}>
      <Grid.Row>
        <Grid.Col md={12}>
            <Table dense={dense}>
              <Table.Row>
                <Table.Header content="Desserts (100g serving)" />
                <Table.Header content="Calories" as="numeric" />
                <Table.Header content="Fat (g)" as="numeric" />
                <Table.Header content="Carbs (g)" as="numeric" />
                <Table.Header content="Protein (g)" as="numeric" />
              </Table.Row>
              {map(got, ({
                desserts,
                calories,
                fat,
                carbs,
                protein,
              }, idx) => (
                <Table.Row>
                  <Table.Content content={desserts} />
                  <Table.Content content={calories} />
                  <Table.Content content={fat} />
                  <Table.Content content={carbs} />
                  <Table.Content content={protein} />
                </Table.Row>
              ))}
            </Table>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
}

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .add('Table',
    withInfo(loremIpsum({ count: 5 }))(TableStory)
  );
