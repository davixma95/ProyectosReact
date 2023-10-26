import MostrarUsers from "./components/mostrarUser/MostrarUsers";
import { BrowserRouter } from 'react-router-dom'


const App = () => {

	return (
		<BrowserRouter>
			<MostrarUsers/>
		</BrowserRouter>
	);
};

export default App;
