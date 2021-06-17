import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const ListPage = () => {

const StyledItemBoxDiv = styled.div`

border: 1px solid black;
padding: 10px;
height: 100px;
margin: 20px;

`;

const [no,setNo] = useState(6);

const [post,setPost] = useState({

 id:no,
 title:'',
 content:'',


})

const [posts,setPosts] = useState([
    {id:1, title: "제목1", content: "내용1"},
    {id:2, title: "제목2", content: "내용2"},
    {id:3, title: "제목3", content: "내용3"},
    {id:4, title: "제목4", content: "내용4"},
    {id:5, title: "제목5", content: "내용5"},

]);

const handleWrite = () =>{
    //setPosts에 값을 넣어 보내겠습니다.
    
    setPosts([...posts,post]);
    setNo(no+1);
   
   
   }


// const handleChangeTitle = (e) => {
//     //e.target.value - onChange 값 변경점이 들어온다
//     setPost({title: e.target.value});
// }
// const handleChangeContent = (e) => {
//     setPost({content: e.content.value});
// }

const handleForm = (e) =>{
    //e.target.name  : e.target.value = content : 내용
    // 키 값과 변수 넣기 
    setPost({
        ...post,
        [e.target.name]:e.target.value});
}

    return (
        <div>
            <h1>리스트</h1>
            <form>
                <input type = "text" placeholder ="제목을 입력하세요..." value = {post.title} onChange = {handleForm} name = "title"/>
                <input type = "text" placeholder ="내용을 입력하세요..." value = {post.content} onChange = {handleForm} name = "content"/>
                <button type = "button" onClick = {handleWrite}>글쓰기</button>

            </form>
            <hr/>


            {posts.map((post)=> 
            
            <StyledItemBoxDiv>
            번호: {post.id} 
            제목: {post.title}
            내용: {post.content}<br/>
            <button>삭제</button>
             </StyledItemBoxDiv> )}

        </div>
    );
};

export default ListPage;