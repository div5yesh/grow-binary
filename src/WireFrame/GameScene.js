import React from 'react';
import GameLayer from './GameLayer';

class GameScene extends React.Component {

	render() {

		let defStyles = {
			display: "block",
			width: this.props.width,
			height: this.props.height
		};

		return (
			<div style={defStyles}>
				<GameLayer width="500px" height="300px"/>
				<GameLayer width="500px" height="300px"/>
			</div>
		);
	}
}

export default GameScene;
