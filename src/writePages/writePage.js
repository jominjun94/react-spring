import React from 'react';






const writePage = () => {




const handleWrite = () =>{
 //setPosts에 값을 넣어 보내겠습니다.
 let post = {id:6, title:"인풋"};


}



    return (
        <div>
            <h2>글쓰기</h2>
            <hr/>
            <form>
                <input type = "text" placeholder ="제목을 입력하세요..."/>
                <button type = "button" onClick = {handleWrite}>글쓰기</button>

            </form>
        </div>
    );
};

export default writePage;