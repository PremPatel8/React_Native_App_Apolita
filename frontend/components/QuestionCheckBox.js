import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

function QuestionCheckBox(props) {
  console.log('NEW PROP');
  console.log(props);
  return props.content.map((val) => {
    return (
      <CheckBox
        title={val.content}
        checked={false}
        onPress={() => test(this, val)}
      />
    );
  });
}
function test(checkBox, prop) {
  checkBox.checked = true;
  console.log(prop);
}
QuestionCheckBox.propTypes = {
  content: PropTypes.string.isRequired,
};

export default QuestionCheckBox;
