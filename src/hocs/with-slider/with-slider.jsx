import React from 'react';

const withSlider = (Component) => {
  class WithSlider extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentSlide: 0,
      };
    }


    render() {
      return (
        <Component
          currentSlide={this.state.currentSlide}
        />
      );
    }
  }

  return WithSlider;
};

export default withSlider;
