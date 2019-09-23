import React from 'react';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(response => response.json())
      .then(data => this.setState({ lists: data.results }));
  }

  render() {
    const { lists } = this.state;
    return (
      <ul>
        <div className="header">
          <h1>Random Trivia Test</h1>
          <h2>Take the quick quiz</h2>
        </div>
        <div className="qlist">
          {lists.map(list => <li key={list.id}>
              <p className="questions">{list.question}</p>
              <p>{list.incorrect_answers + ',' + list.correct_answer}</p>
            </li>)}
        </div>
      </ul>
      );
  }
};