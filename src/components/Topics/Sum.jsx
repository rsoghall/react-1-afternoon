import React, { Component } from 'react'

export class Sum extends Component {
  constructor(){
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }
  updateNumber1(e) {
    this.setState({ number1: parseInt(e, 10) });
  }

  updateNumber2(e) {
    this.setState({ number2: parseInt(e, 10) });
  }

  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }
  render() {
    return (
      <div>
        <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input onChange={ (e) => this.updateNumber1(e.target.value) } className="inputLine" type="number" ></input>
        <input onChange={ (e) => this.updateNumber2(e.target.value) } className="inputLine" type="number" ></input>
        <button onClick={ () => this.add(this.state.number1, this.state.number2) } className="confirmationButton" > Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
        
      </div>
    )
  }
}

export default Sum
