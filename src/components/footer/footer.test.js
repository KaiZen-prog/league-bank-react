import renderer from 'react-test-renderer';
import React from 'react';

import Footer from './footer';

test(`Footer render correctly`, () => {
  const tree = renderer
      .create(
          <Footer/>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
