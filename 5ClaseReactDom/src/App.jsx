import { BrowserRouter } from 'react-router-dom'
import Menu from './components/menu/Menu';
import Router from './router/Router';

const App = () => {

	return (
		<>
		<BrowserRouter>
			<Menu/>
			<Router/>
		</BrowserRouter>
		</>
	)
};

export default App;
