import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
        persons: [
          { id: 'gdfh', name: 'Max', age: 28 },
          { id: 'dfgs', name: 'Manu', age: 29 },
          { id: 'sdgf', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  
  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  // const [{this.state, se{this.state ] = useState({
  //   persons: [
  //     { name: 'Max', age: 28 },
  //     { name: 'Manu', age: 29 },
  //     { name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value'
  // });

  // const [otherState, setOtherState] = useState({otherState: 'some other value'})

  // console.log{setPersonsState, otherState);

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    console.log('[App.js render');

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App} >
        <Cockpit 
            title={this.props.appTitle}
            toggle={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
            persons={this.state.persons} />
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now ?'));
  }
}

export default App;
