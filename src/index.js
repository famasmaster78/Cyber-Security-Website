import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Import components
import Forside from './components/Forside';
import Navbar from "./components/Navbar";
import BlivSikker from "./components/BlivSikker";
import LæsMere from "./components/LæsMere";
import Kontakt from "./components/Kontakt";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Route exact path="/">
		<Forside />
	</Route>
	<Route exact path="/bliv-sikker">
		<BlivSikker />
	</Route>
	<Route exact path="/kontakt">
		<Kontakt />
	</Route>
	<Route exact path="/læs-mere">
		<LæsMere />
	</Route>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
