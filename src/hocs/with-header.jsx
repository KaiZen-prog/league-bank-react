import React from 'react';

const withHeader = (Component) => {
    class WithHeader extends React.PureComponent {
        constructor(props) {
            super(props);

            this.state = {
                isNavOpened: false,
            }

            this.onNavOpen = this.onNavOpen.bind(this);
            this.onNavClose = this.onNavClose.bind(this);
        }

        onNavOpen() {
            this.setState({isNavOpened: true});
        }

        onNavClose() {
            this.setState({isNavOpened: false});
        }

        render() {
            return (
                <Component
                    isNavOpened={this.state.isNavOpened}
                    onNavOpen={this.onNavOpen}
                    onNavClose={this.onNavClose}
                />
            )
        }
    }

    return WithHeader;
};

export default withHeader;
