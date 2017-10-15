import { Link } from 'inferno-router'
import Component from 'inferno-component'

import Contributor from '~components/contributor.js'

const CONTRIBUTORS = [
  {
    name: 'trueadm',
    commits: '1,058',
    place: 1
  },
  {
    name: 'Havunen',
    commits: '663',
    place: 2
  },
  {
    name: 'LukeSheard',
    commits: '174',
    place: 3
  },
  {
    name: 'nightwolfz',
    commits: '115',
    place: 4
  }
]

export default class Contributors extends Component {
  constructor () {
    super()
    this.state = {
      contributors: CONTRIBUTORS,
      date: 'Feb 1, 2015 - Jun 12, 2017',
      colorPlaces: false
    }
  }

  render () {
    const contributorsTemplate = this.state.contributors.map(cont => {
      return <Contributor data={ cont } colorPlaces={ this.state.colorPlaces }/>
    })
    return (
      <section>
        <h2 className="page-title">Contributors at { this.date }</h2>
        { contributorsTemplate }
        <button className="btn contributor__btn" onClick={ () => this.colorPlaces() }>
          { this.state.colorPlaces ? 'Unc' : 'C' }olor places
        </button>
        <Link to="/">Get back</Link>
      </section>
    )
  }
  
  colorPlaces () {
    this.setState({ colorPlaces: !this.state.colorPlaces })
  }
}