import styles from '~assets/styles/special.css'

export default ({ children }) => {
  return <div className="wrapper_special"><style>{ styles }</style>
    { children }
  </div>
}
