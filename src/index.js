import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';

const home =()=>{

    return <h1>This is home page</h1>
}
const about =()=>{

    return <h1 className='whiteBackground'>This is about page</h1>
}

ReactDOM.render( 
    <BrowserRouter>
    <div>
     <Navbar/>  
    <Route exact path="/" component={Welcome}/>
    <Route path="/about" component={about}/>
    <Route path="/home" component={home}/>
    <Route path="/article/create" component={CreateArticle}/>
     <Footer/>
    </div>
    </BrowserRouter>
   
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
