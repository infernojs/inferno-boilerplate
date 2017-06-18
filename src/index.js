// Inferno module
import {render} from 'inferno';
// Routes
import routes from '~router'

if (module.hot) {
    require('inferno-devtools');
}

render(routes, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}
