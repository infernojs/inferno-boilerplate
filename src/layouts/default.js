import Logo from '~components/logo.js'
import style from '~assets/styles/default.css'

export default ({ children }) => {
  return <div className="wrapper_default"><style jsx>{ style }</style>
    <div className="container">
      <div className="header"><Logo size="24px" classExt="header__logo"/> <p className="header__text">Inferno Boilerplate</p></div>
      { children }
    </div>
  </div>
}
