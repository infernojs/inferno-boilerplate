/* 
 * Main app container 
 */
import { Provider } from 'inferno-fela'
import { createRenderer } from 'fela'

const renderer = createRenderer()

export default ({ children }) => (
	<Provider renderer={ renderer }>
		<span>{ children }</span>
	</Provider>
)
