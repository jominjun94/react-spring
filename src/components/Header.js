import styled from "styled-components"

export default function Header (){

// 하나의 컴포넌트 생성 (재사용 가능) 
const HeaderList = styled.div`
border: 1px solid black;
height: 300px;
`;

const StyledHeadButtonDiv = styled.div`

border:lpx solid black;
height: 50px;
border: 3px solid black;

`;

    return (

        <div>

        
            <StyledHeadButtonDiv>
            <div>
                 
                     <li>오시는길 : 강남구</li>
                     <li>전화번호 : 01074635030</li>
                     
                 
            </div>
            </StyledHeadButtonDiv>
        </div>
    )
}