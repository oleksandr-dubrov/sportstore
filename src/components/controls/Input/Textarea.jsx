import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'Textarea';
const propTypes = {
  children: PropTypes.string,
};
const defaultProps = {
  children: 'Enter your contact information namely full name and address here. (TBD)',
};

function TextArea({ children }) {
  return <textarea rows="4" cols="50" defaultValue={children} />;
}

TextArea.displayName = displayName;
TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
