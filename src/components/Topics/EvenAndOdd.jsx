import React, { Component } from 'react'

export class EvenAndOdd extends Component {
  constructor(){
    super();
      this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ''
      }  
  }

  handleChange = (val) => {
    this.setState({userInput: val})
  }

  assignEvenAndOdds(userInput) {
    let arrays = userInput.split(',')
    let evens = []
    let odds = []
    for(let i=0; i<arrays.length; i++){
      if(arrays[i] %2 === 0){
        evens.push(arrays[i])
      }
      else{
        odds.push(arrays[i])
      }
    }
    this.setState({evenArray: evens, oddArray: odds})
  }
  render() {
    return (
      <div className="puzzleBox evenAndAddPB">
        <h4>Evens And Odds</h4>
        <input onChange={ (e) => this.handleChange(e.target.value) } className="inputLine" type="text" name="" id=""/>
        <button onClick={() => { this.assignEvenAndOdds(this.state.userInput) }}className="confirmationButton">Push Me</button>
        <span className="resultBox"> Evens: { JSON.stringify(this.state.evenArray) }</span>
        <span className="resultBox"> Odds: { JSON.stringify(this.state.oddArray) }</span>

        
      </div>
    )
  }
}

export default EvenAndOdd
