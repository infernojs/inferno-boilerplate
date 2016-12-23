import Inferno from 'inferno';

const version = '1.0.0-beta42';

function showVersion() {
	alert(`The version is: ${ version }!`);
}

export default function VersionComponent() {
	return (
		<div>
			<p>This is an Inferno Boilerplate example using <em>Inferno { version }</em>.</p>
			<button onClick={ showVersion }>Show version</button>
		</div>
	);
}