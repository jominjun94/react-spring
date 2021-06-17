import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route ,useParams, Switch} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPage from './writePages/ListPage';
import writePage from './writePages/writePage';
import Navigation from './writeComponent/Navigation';


// <Footer/>
// <Route path = "/" exact ={true} component = {HomePage}/>
// <Route path = "/login" exact ={true} component = {LoginPage}/>
// <Header/>

function App() {
  return (
    <div className="App">
     
      <ListPage/>


    </div>
  );
}

export default App;
