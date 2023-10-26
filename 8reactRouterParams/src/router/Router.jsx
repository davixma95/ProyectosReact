import { Route, Routes } from "react-router-dom"
import { v4 } from 'uuid';
import MostrarUsers from "../components/mostrarUser/MostrarUsers";

const Router = () => {

  return (
    <Routes>
      <Route key={v4()} path='/' element={<MostrarUsers/>} />
      <Route key={v4()} path='/users/:userId' element={<MostrarUsers/>} />
    </Routes>
  );
} 
export default Router;
