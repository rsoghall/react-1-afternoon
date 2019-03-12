import React, { Component } from 'react'

export class Palindrome extends Component {
  constructor (){
    super();
    this.state = {
      userInput: '',
      palindrome: '',
    }
  }
  handleChange = (e) => {
    this.setState({userInput: e})
  }

  isPalindrome(userInput) {
    var forwards = userInput;
    var backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if ( forwards === backwards ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input onChange={ (e) => this.handleChange(e.target.value) } className="inputLine" type="text"/>
        <button onClick={ () =>  this.isPalindrome(this.state.userInput)} className="confirmationButton"></button>
        <span className="resultsBox"></span>
      </div>
    )
  }
}

export default Palindrome
