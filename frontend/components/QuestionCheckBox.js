import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';

export default class QuestionCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.content.content;
  }

  render() {
    if (this.state.result != '') {
      return (
        <View>
          <Text>
            Your suited area of interest is: {this.state.result} {'\n'}
            {'\n'}
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('PersonalityTest')}
          >
            <Text>Tap to take the quiz again</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      var question = this.state.questions[this.state.counter]['question'];
      var answers = this.state.questions[this.state.counter]['answers'];
      return (
        <View>
          <Text>
            Question {this.state.counter} out of {this.state.questionTotal}
          </Text>
          <Text>{question}</Text>
          <CheckBox
            title={answers[0].content}
            checked={
              this.state.questions[this.state.counter]['answers'][0]['checked']
                ? true
                : false
            }
            onPress={() =>
              this.setState({
                checked: !this.startNextQuestion(0, answers[0].type),
              })
            }
          />
          <CheckBox
            title={answers[1].content}
            checked={
              this.state.questions[this.state.counter]['answers'][1]['checked']
                ? true
                : false
            }
            onPress={() =>
              this.setState({
                checked: !this.startNextQuestion(1, answers[1].type),
              })
            }
          />
          <CheckBox
            title={answers[2].content}
            checked={
              this.state.questions[this.state.counter]['answers'][2]['checked']
                ? true
                : false
            }
            onPress={() =>
              this.setState({
                checked: !this.startNextQuestion(2, answers[2].type),
              })
            }
          />
          <CheckBox
            title={answers[3].content}
            checked={
              this.state.questions[this.state.counter]['answers'][3]['checked']
                ? true
                : false
            }
            onPress={() =>
              this.setState({
                checked: !this.startNextQuestion(3, answers[3].type),
              })
            }
          />
        </View>
      );
    }
  }

  startNextQuestion(num, type) {
    this.state.questions[this.state.counter]['answers'][num]['checked'] = !this
      .state.questions[this.state.counter]['answers'][num]['checked'];
    this.setNextQuestion(type);
    return this.state.questions[this.state.counter]['answers'][num]['checked'];
  }

  setNextQuestion(type) {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    const newAnswerCount = this.state.answersCount;
    newAnswerCount[questionId] = type;
    newAnswerCount;
    if (this.state.questionTotal == counter) {
      this.setState({
        counter: counter,
        questionId: questionId,
        answer: '',
        result: this.getResults(),
      });
    }
    this.setState({
      counter: counter,
      questionId: questionId,
      answer: '',
      answersCount: newAnswerCount,
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    return this.mode(answersCountValues);
  }

  mode(arr) {
    return arr
      .sort(
        (a, b) =>
          arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
      )
      .pop();
  }
  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
