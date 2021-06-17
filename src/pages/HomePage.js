import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';





const HomePage = () => {

    const[boards, setBoards] = useState([]);
    const [user,setUser]  = useState([]);


    // fetch(자바스크립트 기본),axios(이건 다운로드해줘야함),ajax(사용 x)
    useEffect(()=>{

        let data = [
            {id:1, title: "인생도", content:"쉽지 않네"},
            {id:2, title: "인생은", content:"쉽지"},
            {id:3, title: "그래도", content:"어렵지"},

        ]

 
    setBoards([...data]);
    setUser([{id:1 , username:"ssar"}]);


    },[])

    return (
    

            <Home boards= {boards} setBoards = {setBoards} user = {user}/>

          
      
    );
};

export default HomePage;
    