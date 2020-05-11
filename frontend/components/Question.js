import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

function Question(props) {
  return (
      <Text>{props.content}</Text>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Question;
