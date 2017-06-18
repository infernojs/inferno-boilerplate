import Component from 'inferno-component'
import { Link } from 'inferno-router'

export default class Error404 extends Component {
  render () {
    return (
      <section>
        <div className="position_abs-center mountains__text">Relax while looking on this beautiful mountains layout.</div>
        <Link to="/" className="position_abs-center mountains__link">Or go back into the default layout</Link>
        <div className="mountains__image"/>
      </section>
    )
  }
}
