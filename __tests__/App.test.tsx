/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Exercise4 from './Exercise4';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<Exercise4 />);
  });
});
