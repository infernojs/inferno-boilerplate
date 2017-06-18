import Component from 'inferno-component'
import Logo from '~components/logo.js'
import { Link } from 'inferno-router'

const CODES = {
  404: 'Page not found',
  500: 'Server error'
}

export default class ErrorLayout extends Component {
  render ({ code }) {
    code = parseInt(code) || 404
    const errorCodeLayout = (
      <section>
        <h1>{ code }</h1>
        <p>{ CODES[code] }</p>
        <Link to="/">Back to main page</Link>
      </section>
    )
    return (
      <div className="wrapper">
        <div className="container">
          <Logo size="33px" classExt="error__logo"/><h2>&nbsp; There is an error processing your request.</h2>
          { errorCodeLayout }
        </div>
      </div>
    )
  }
}