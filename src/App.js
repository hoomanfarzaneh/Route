import React,{Component} from 'react';
import {Switch,Route, Routes, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './Home'
import Contact from "./Contact";
import Blogs from "./blogs";
import noPage from "./noPage";


class App extends Component{
    constructor() {
        super();
    }
    render() {
        return(
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to= "/">Home</Link>
                        </li>
                        <li>
                            <Link to= "/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to= "/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/contact' element={<Contact />}/>
                        <Route path='/Blogs' element={<Blogs />}/>
                        <Route path='/*' element={<noPage/>}/>
                </Routes>
            </Router>
        )
    }
}
export default App