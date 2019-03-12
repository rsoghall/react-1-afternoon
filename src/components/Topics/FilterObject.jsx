import React, { Component } from 'react'

export class FilterObject extends Component {
  constructor(){
    super();
    this.state = {
      people: [
        {
          name: 'Ryan',
          job: 'IT',
          age: 48
        },
        {
          name: 'Doni',
          hairColor: 'Brown',
          age: 45,
          faveColor: 'green'
        },
        {
          name: 'Nick',
          job: 'Commercial Pilot',
          diet: true,
          favDrink: 'Mountain Dew'
        },
      ],   
          userInput: '',
          filteredPeople: []
    }
  }
  handleChange = (val) => {
    this.setState({userInput: val})
  }

  handleFiltered = (e) => {
    let people = this.state.people
    let filteredPeople = []
    for(let i=0; i<people.length; i++){
      if(people[i].hasOwnProperty(e)){
        filteredPeople.push(people[i])
      }
    }
    this.setState({filteredPeople: filteredPeople})
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.people, null, 10)}</span>
        <input onChange={ (e) => this.handleChange (e.target.value) } className="inputLine" type="text"/>
        <button onClick={ () => {this.handleFiltered(this.state.userInput)} } className="confirmationButton">Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredPeople)}</span>
      </div>
    )
  }
}

export default FilterObject

