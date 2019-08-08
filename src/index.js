import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,withRouter} from 'react-router-dom';
import Welcome from './components/Welcome';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login'
import SingleArticle from './components/SingleArticle'
import Signup from './components/Signup'


const Main =withRouter((location)=>
    {
        return (
            <div>
                {
                    location.history.location.pathname!=='/login' && location.history.location.pathname!=='/signup' &&
                     <Navbar/>
                }
           <Route exact path="/" component={Welcome}/>
           <Route path="/login" component={Login}/>
           <Route path="/signup" component={Signup}/>
           <Route path="/article/:slug" component={SingleArticle}/>
           <Route path="/article/create" component={CreateArticle}/>
           {
                    location.history.location.pathname!=='/login' && location.history.location.pathname!=='/signup' &&
                    <Footer/>
            }
           </div>
        );
    }
);

ReactDOM.render( 
    <BrowserRouter>
        <Main/>
    </BrowserRouter>
   
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
