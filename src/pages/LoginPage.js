import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';
import { BrowserRouter, Route ,useParams, Switch} from "react-router-dom";


const LoginPage = (props) => {
  
//const {history} = props;

    return (
      
 
    <div>
        
    <button onClick = {() => {
     props.history.push("/");
    }}>뒤로 가기</button>

    <Login/>

    </div>
      
    );
};

export default LoginPage;