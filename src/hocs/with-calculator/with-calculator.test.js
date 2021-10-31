import React from "react";
import renderer from "react-test-renderer";
import PropTypes from 'prop-types';
import withCalculator from "./with-calculator";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withCalculator(MockComponent);

it(`withCalculator is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  children: PropTypes.node,
};
