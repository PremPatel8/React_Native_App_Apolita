import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

function Result(props) {
  return <Text>Your suited area of interest is: {props.quizResult}</Text>;
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
