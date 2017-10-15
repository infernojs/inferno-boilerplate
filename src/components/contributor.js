import Component from 'inferno-component'

export default (ps, { renderer }) => {
  const className = renderer.renderRule(rules, ps)
  return (
    <section className={ className }>
      <h3 className="title">#{ ps.data.place } { ps.data.name }: </h3>
      <b>{ ps.data.commits }</b> commits
    </section>
  )
}

const rules = (props) => ({
  marginBottom: '2ex',  // Component styles

  '&:hover': {
    color: 'gray'
  },

  '& .title': {         // you can use h3 as well
    display: 'inline',
    color: getColor(props)
  }
})

const getColor = ({ colorPlaces, data }) => {
  if (colorPlaces) {
    switch (data.place) {
      case 1: return '#04E762'  // green
      case 2: return '#279AF1'  // blue
      case 3: return '#FF6B35'  // orange
      default: return '#333333'
    }
  }
}
