import './App.css';
import About from './components/pages/About/About';
import Game from './components/pages/Game/Game';
import Home from './components/pages/Home/Home';
import Router from './components/pages/Router/Router';
import {BrowserRouter, Link} from "react-router-dom"
import Header from './components/feturs/Header/Header';
import Footer from './components/feturs/Footer/Footer';




function App() {

    return (
    <div className="App">
      
      
      <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
      </BrowserRouter>
      


    </div>
  );
}

export default App;
