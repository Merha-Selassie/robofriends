import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { requestRobot } from '../actions';
import DetailCard from './DetailCard';
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
		console.log('robot address');
		console.log(robot.company);
		return isPending ?
			<h1 className="tc fl w-100 pv7">Loading</h1> : 
			<DetailCard robot={robot} />
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps) (Detail);