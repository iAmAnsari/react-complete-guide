import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount() {
		this.inputElementRef.current.focus();
		console.log(this.context.authenticated);
	}

	render() {
		console.log('[Person.js] rendering...');
		return(
		//<div className={classes.Person} >
		<Aux>
			
			{this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p> }
			
	      	<p onClick={this.props.click} >I'm a {this.props.name} and I am {this.props.age} years old!</p>
	      	<p>{this.props.children}</p>
	      	<input 
	      		type="text" 
	      		ref={this.inputElementRef} 
	      		onChange={this.props.changed} 
	      		value={this.props.name} />
	    </Aux>  	
	    //</div>
	    );
	}
}

export default withClass(Person, classes.Person);