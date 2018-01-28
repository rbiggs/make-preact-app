import { h, Component } from 'preact';

export default class Title extends Component {
	render({message}) {
		return (
			<nav class="app">
				<h1>Hello, {message}!</h1>
			</nav>
		);
	}
}
