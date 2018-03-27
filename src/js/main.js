import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Register from './register';
import Login from './login';


class Main extends React.Component{
    render(){
        return(
            <Router>
                <React.Fragment>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid"> 
                            <ul className="nav navbar-nav">
                            {/* <li className="active"><Link to="/">Home</Link></li> */}
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            </ul>
                        </div>
                    </nav>

                    {/* <Route path="/" component={Home}/> */}
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </React.Fragment>    
            </Router>  
        );
    }
}

export default Main;