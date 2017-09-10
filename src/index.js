// inferno module
import {render} from 'inferno';

// routing modules
import { Router, Link, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();
function App({ children }) {
    return (
		<div>
			<h1>Application</h1>
			<Link to="/users">User list</Link>
			<br />
			<Link to="/users/user/tester">Tester's page</Link>
            {children}
		</div>
    )
}

function NoMatch({ children, params }) {
    return (
		<div>no match</div>
    )
}

function Home({ children }) {
    return (
		<div>home</div>
    )
}

// `children` in this case will be the `User` component
function Users({ children, params }) {

    return (
		<div>
			<h2>user list</h2>
            {children}
		</div>
    )
}

function User({ params }) {
    return <h1>{JSON.stringify(params)}</h1>
}

const routes = (
	<Router history={browserHistory}>
		<Route component={App}>
			<IndexRoute component={Home} />
			<Route path="/users" component={Users}>
				<Route path="/user/:username" component={User} />
			</Route>
			<Route path="*" component={NoMatch} />
		</Route>
	</Router>
);

render(routes, document.getElementById('app'));
