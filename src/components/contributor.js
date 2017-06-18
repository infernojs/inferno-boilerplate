import Component from 'inferno-component'
// import { createStyleSheet } from 'jss'
import jss from 'jss'

export default class Contributor extends Component {
  render ({ data }) {
    const classes = this._getStyle()
    return (
      <section className={ classes.section }>
        <h3 class="title">#{ data.place } { data.name }: </h3>
        <b>{ data.commits }</b> commits
      </section>
    )
  }

  _getColor () {
    if (this.props.colorPlaces) {
      switch (this.props.data.place) {
        case 1: return '#04E762'  // green
        case 2: return '#279AF1'  // blue
        case 3: return '#FF6B35'  // orange
        default: return '#333333'
      }
    }
  }

  _getStyle () {
    // If you want to write styles as CSS-like string litral, use:
    // https://github.com/alexkuz/jss-css 
    const { classes } = jss.createStyleSheet({
      section: {
        marginBottom: '2ex',  // Component styles
        '&:hover': {
          color: 'gray'
        },

        '& .title': {         // you can use h3 as well
          display: 'inline',
          color: this._getColor()
        }
      }
    }).attach()
    return classes
  }
}
