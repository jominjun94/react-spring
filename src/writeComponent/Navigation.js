import React from 'react';
import { BrowserRouter, Route ,useParams, Switch, Link} from "react-router-dom";


const Navigation = () => {
    return (
        <div>
            <ul>

            <li><Link to = "/"> 글목록 </Link></li>
            <li><Link to = "/write"> 글쓰기 </Link></li>

            </ul>
        </div>
    );
};

export default Navigation;