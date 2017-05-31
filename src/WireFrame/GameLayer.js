import React from 'react';
import GameComponent from './GameComponent';
import dispatcher from './Dispatcher';

class GameLayer extends React.Component {

	constructor() {
		super();
		this.player = new GameComponent();
		dispatcher.dispatch({
			type: "ADD",
			obj: this.player
		});
	}

	render() {

		let defaultStyle = {
			position: "absolute",
			left: 0,
			top: 0
		};

		return (
			<canvas ref="canvas" width={this.props.width} height={this.props.height} style={defaultStyle}></canvas>
		);
	}

	componentDidMount() {
		this.ctx = this.refs.canvas.getContext("2d");
	}
}

export default GameLayer;
