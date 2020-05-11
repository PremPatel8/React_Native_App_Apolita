import React from 'react';
import PropTypes from 'prop-types';
import Text from 'react-native';

function Result(props) {
  return (
    <div className='result'>
      <Text>
        Your suited area of interest is: <strong>{props.quizResult}</strong>!
      </Text>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
