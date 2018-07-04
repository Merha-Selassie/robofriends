import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { requestRobot } from '../actions';
let id = '';
const mapStateToProps = (state, props) => {
	
	return {
		robot: state.requestRobot.robot,
		isPending: state.requestRobot.isPending,
		error: state.requestRobot.error

	}
}

const mapDispatchToProps = (dispatch) => {
	console.log(dispatch);
	return {
		onRequestRobot: () => dispatch(requestRobot(2))
	}
}

class Detail extends Component {

	componentDidMount(){
		this.props.onRequestRobot();
	}

	render() {

		const { robot, isPending } = this.props;
	
		return isPending ?
			<h1 className="tc fl w-100 pv7">Loading</h1> : 
			(
			<div>
				<Card 
					key={robot.id} 
					id={robot.id} 
					name={robot.name} 
					email={robot.email}/>
			</div>
		);
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps) (Detail);