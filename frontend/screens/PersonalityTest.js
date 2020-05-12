import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import quizQuestions from '../api/quizQuestions';
import Quiz from '../components/Quiz';
import Result from '../components/Result';

export default class PersonalityTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      questionId: 1,
      questions: quizQuestions,
      answer: '',
      answersCount: {},
      result: '',
      questionTotal: quizQuestions.length,
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        counter={this.state.counter}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{ position: 'absolute' }}
          leftComponent={
            <Icon
              name='arrow-back'
              color='#fff'
              onPress={() => this.props.navigation.goBack(null)}
            />
          }
          centerComponent={{
            text: 'Personality Test',
            style: { color: '#fff', fontSize: 22 },
          }}
          backgroundColor='#00BFFF'
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Quiz content={this.state} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginTop: 0,
  },
  bodyContent: {
    //    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
});