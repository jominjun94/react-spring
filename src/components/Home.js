import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
const Home = (props) => {
    //const boards = props.boards;
   // console.log(props.boards);

   // 구조분할 할당
   //const {boards} = props;
   //const {id} = props;
   const {boards , setBoards, user} = props;

   
   
   const StyledDeleteButton = styled.button`
   
            color: ${() => (user.username === 'ssr'? 'blue': 'red')};
   `;
   
    // 스타일 확장 방법
    const StyledAddButton = styled(StyledDeleteButton)`
    background-color: green;
    `;



    return (
        <div>
         <Button variant="primary">Primary</Button>
        <h1> 홈페이지 입니다. </h1>
       
        <StyledDeleteButton  onClick={()=>setBoards([])}>전체 삭제</StyledDeleteButton>
        {boards.map((board)=><h3 key = {board.id}>제목 : {board.title} 내용 : {board.content}</h3>)}
        </div>
    );
};

export default Home;