import React from 'react';
import GameScene from './components/GameScene';

class Game extends React.Component {

	constructor() {
		super();
		this.state = {
			running: false
		};
	}

	onStart = () => {
		this.setState({
			running: true
		});
		if (this.gameloop == null) {
			this.gameloop = setInterval(this.looper, 1000 / 60);
		}
	}

	onPause = () => {
		this.setState({
			running: false
		});
	}

	onQuit = () => {
		clearInterval(this.gameloop);
		this.setState({
			running: false
		});
	}

	looper = () => {
		let running = this.state.running;
		this.setState({
			running
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.running;
	}

	render() {

		let defStyles = {
			container: {
				position: "absolute"
			},
			options: {
				display: "block"
			}
		};

		console.log(this.state.running);

		return (
			<div style = {defStyles.container}>
				<GameScene width = "500px" height = "300px" />
				<div style = {defStyles.options}>
					<button onClick = {this.onStart}> Start </button> 
					<button onClick = {this.onPause}> Pause </button> 
					<button onClick = {this.onQuit}> Quit </button> 
				</div> 
			</div>
		);
	}
}

export default Game;
