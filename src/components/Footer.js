import styled from "styled-components"
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Route ,useParams, Switch , Link} from "react-router-dom";



export default function Footer (){

// 하나의 컴포넌트 생성 (재사용 가능) 
const FooterList = styled.div`

`;
// <a href> 를 사용시 전체 페이지를 전부 다시 호줄 해줘서 쓰면 안되고
// 그 부분만 끌고 오기 위해 Link를 사용해줘야한다
    
const StyledFootLink = styled(Link)`
color: red;
`;

return (
        
<FooterList>
<div>
                 
<>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
     
      <Link to ="/" className= "nav-link">홈</Link>
      <Link to ="/login" className= "nav-link">로그인</Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
   
    </Form>
  </Navbar>
</>
                    <button><StyledFootLink to ="/">홈</StyledFootLink></button>
                    <button> <Link to ="/login">로그인</Link></button><br/>
                    
                     
                 
</div>
</FooterList>
        
    )
}