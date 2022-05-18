/* 
after installing, remove all files inside the src folder except index.js
remove the readmie.md file in the root folder of the apop

*/

// set up/ import dependencise

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

/* ReactDOM.render( 
  // ReactDOM.render () - responsible for injecting/inserting the whole React,js project inside the webpage
  <h1>Hello World</h1>, document.getElementById('root')
)
 */

/* 
React.createElement('h1', null, 'hello world') =  depricated version of the render() in react
 */

// app components 

import AppNavbar from './components/AppNavbar'
import Home from './pages/Home'
import './index.css'

/* 
  Fragment - used to render different components inside the index.js. Without it, the webpage will return errors since, itis the of JS to display two or more components in the front end
  <></>
    - also accepted in place of the Fragment but not all brwosers are able to read this, also this does not support keys or attributes.
*/

ReactDOM.render(
  <Fragment>
    <AppNavbar />
    <Home />
  </Fragment>
, document.getElementById('root'));
// ReactDOM.render(<Banner />, document.getElementById('root'));
// ReactDOM.render(<Highlights />, document.getElementById('root'));

// JSX - javascript XML - is an extension of JS that let us create objects which will then be compiled and added as HTML elemenets

// with JSX we are able to create HTML elements using JS 

/* 
  With JSX 
    - we are able to create HTML elements using JS
    - we are also able to m create JS objects that will then be compiled and added as HTML elements
*/
