// Routing modules
import { Router, Route, Redirect, IndexRoute } from 'inferno-router'
import createHistory from 'history/createBrowserHistory'

import App from '~/app.js'
// App layouts
import DefaultLayout from '~layouts/default.js'
import SpecialLayout from '~layouts/special.js'
// App views
import Index from '~views/index.js'
import Contributors from '~views/contributors.js'
import ErrorView from '~views/error.js'
import SpecialIndex from '~views/special/index.js'

const browserHistory = createHistory();

/**
 * Router component
 */
export default (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route path="/special" component={ SpecialLayout }>
        <IndexRoute component={ SpecialIndex }/>
      </Route>
      <IndexRoute component={ DefaultLayout }>
        <IndexRoute component={ Index }/>
        <Route path="contributors" component={ Contributors }/>
        <Route path="*"><ErrorView code="404"/></Route>
      </IndexRoute>
    </Route>
  </Router>
)
