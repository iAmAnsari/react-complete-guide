import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

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
        showPersons: false,
        showCockpit: true,
        changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
  
  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
         persons: persons, 
         changeCounter: prevState.changeCounter + 1
      }
    });
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

    console.log('[App.js] render');

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler} />
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit: false})}} >Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
            title={this.props.appTitle}
            toggle={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length} /> : null}
        {persons}
      </Aux>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now ?'));
  }
}

export default withClass(App, classes.App);
