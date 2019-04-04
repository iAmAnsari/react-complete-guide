import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getDerivedStateFromProps');
	// 	return state;
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	if(nextProps.persons !== this.props.persons) {
	// 		console.log('[Persons.js] shouldComponentUpdate');
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return {message: 'Snapshot'};
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log(snapshot);
	}

	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}

	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {	
          return ( <Person name={person.name}
                         click={() => this.props.clicked(index)}
                         age={person.age}
                         key={person.id}
                         changed={(event) => this.props.changed(event, person.id)} />
                 );
	     });
	}	
}

export default Persons;	