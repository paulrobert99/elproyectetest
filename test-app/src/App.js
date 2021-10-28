import './App.css';
import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import SearchBar from './components/Search';
import Tab from './components/Table';
import Indexcontent from './components/Indexcomponent';



function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Indexcontent} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/signin" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
            </Switch>
        </Router>
        
    );
}

export default App;
