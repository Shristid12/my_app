import React,{Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Navigation from './navigation/nav';
import Login from './Login/login';
import Register from './RegisterB/rb';
import Shows from './TradeShows/ts';
import First from './Home/home';
import Footer from'./Footer/footer';
class App extends Component {
 render(){
  return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  );
}
}

export default App;
