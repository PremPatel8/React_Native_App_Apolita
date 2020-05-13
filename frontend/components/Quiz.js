import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import QuestionCheckBox from '../components/QuestionCheckBox';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    return (
      <View>
        <QuestionCheckBox content={this.state} />
      </View>
    );
  }
}