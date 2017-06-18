import { version } from 'inferno'
import Component from 'inferno-component'
import { Link } from 'inferno-router'
import Logo from '~components/logo.js'

export default class Index extends Component {
  constructor () {
    super()
    this.state = {
      showVersion: false
    }
  }
  toggleVersion (that) {
    that.setState({ showVersion: !that.state.showVersion })
  }
  render() {
    return (
      <section>
        <h2 className="page-title">Hello!</h2>
        <Logo size="196px" classExt="index__logo"/>
        <div>
          This is an Inferno Boilerplate page example.
        </div>
        <button className="btn index__btn" onClick={ () => this.toggleVersion(this) }>Show Inferno version</button>
        { (this.state.showVersion) ? <span className="index__txt">Inferno version is <b>{ version }</b></span> : null }
        <br/>
        <Link className="contributors-link" to="/contributors">Contributors list</Link>
        <br/>
        <Link className="contributors-link" to="/special">Another layout</Link>
      </section>
    )
  }
}
