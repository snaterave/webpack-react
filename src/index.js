import React from 'react'; // dependencia  instalada previamente
import ReactDOM from 'react-dom'; // dependencia  instalada previamente
import App from './components/App';
import './styles/global.scss';


// Recurso donde se va a importar la aplicacion
ReactDOM.render(<App />, document.getElementById('app'));