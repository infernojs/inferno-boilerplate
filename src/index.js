import Inferno from 'inferno';
import Component from 'inferno-component';

class MyApp extends Component {
	constructor(props) {
		super(props);
		this.showVersion = this.showVersion.bind(this);
	}
	showVersion() {
		alert(`The version is: ${ this.props.version }!`);
	}
	render({ version }) {
		return (
			<div>
				<h1>Inferno Boilerplate</h1>
				<p>This is an Inferno Boilerplate example using <em>Inferno { version }</em>.</p>
				<button onClick={ this.showVersion }>Show version</button>
			</div>
		);
	}
}

Inferno.render(<MyApp version='1.0.0-beta5' />, document.getElementById('app'));

