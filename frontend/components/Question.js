import React from 'react';
import PropTypes from 'prop-types';
import Text from 'react-native';

function Question(props) {
  return (
    <h2 className='question'>
      <Text>{props.content}</Text>
    </h2>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Question;
