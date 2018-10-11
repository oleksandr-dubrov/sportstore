import React from 'react';
import PropTypes from 'prop-types';

function withToggle(WrappedComponent) {
  class WithToggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isToggled: props.toggled };
      this.clickHandler = this.clickHandler.bind(this); /* set *this* as **this** for the handler */
    }

    clickHandler(event) {
      const { onClick } = this.props;
      // Call a passed in handler if any.
      if (onClick) {
        onClick(event);
      }
      this.setState(prevState => ({ isToggled: !prevState.isToggled }));
    }

    render() {
      // get toggled and onClick because we do not pass them into the WrappedComponent.
      const {
        toggled, onClick, text, otherText, ...passThroughProps
      } = this.props;
      const { isToggled } = this.state;
      const newText = isToggled ? otherText : text;

      return (
        <WrappedComponent {...passThroughProps} onClick={this.clickHandler} isActive={!isToggled} text={newText} />
      );
    }
  }

  WithToggle.displayName = `WithToggle(${WrappedComponent.displayName})`;

  WithToggle.propTypes = {
    toggled: PropTypes.bool,
    otherText: PropTypes.string,
  };

  WithToggle.defaultProps = {
    toggled: false,
    otherText: '',
  };

  return WithToggle;
}

export default withToggle;
