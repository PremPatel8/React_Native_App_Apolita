import React from 'react';
import PropTypes from 'prop-types';
import Text from 'react-native';

function QuestionCount(props) {
  return (
    <div className='questionCount'>
      <Text>
        Question <span>{props.counter}</span> of <span>{props.total}</span>
      </Text>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
