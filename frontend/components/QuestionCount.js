import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

function QuestionCount(props) {
  console.log(props);
  console.log('MEGHA');
  return (
    <Text>
      Question {props.counter} out of {props.total}
    </Text>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
