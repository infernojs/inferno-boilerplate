import Component from 'inferno-component'
import { Link } from 'inferno-router'

export default class Error404 extends Component {
  render () {
    return (
      <section>
        <div className="position_abs-center mountains__text">Yes, this is an entirely new layout.</div>
        <Link to="/" className="position_abs-center mountains__link">Get back into the default layout</Link>
        <div className="mountains__image"/>
      </section>
    )
  }
}
