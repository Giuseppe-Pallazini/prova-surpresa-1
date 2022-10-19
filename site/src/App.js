import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

         <Link to={'./acai'}> Acai </Link>
         <Link to={'./sorvete'}> Sorvete </Link>
         <Link to={'./libra'}> Libra </Link>
         <Link to={'/paradas'}> Paradas </Link>
         <Link to={'/salario'}> Salario </Link>
         <Link to={'/febre'}> Febre </Link>
         <Link to={'/cinema'}> Cinema </Link>
         <Link to={'/situacao'}> Situação </Link>
         <Link to={'/Contador'}> Contador </Link>
         <Link to={'/cafe'}> Café </Link>
         <Link to={'/caractere'}> Estrelinha </Link>
         <Link to={'/retangulo'}> Retangulo </Link>

    </div>
  );
}

export default App;