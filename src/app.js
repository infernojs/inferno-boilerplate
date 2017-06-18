/* 
 * Main app container 
 */
import Component from 'inferno-component'
import jss from 'jss'
import preset from 'jss-preset-default'

// Setup JSS to support nesting, vendor-prefixing etc (need to be done just one time):
jss.setup(preset())

export default class App extends Component {
  render ({ children }) {
    return <span>{ children }</span>
  }
}