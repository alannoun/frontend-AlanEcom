import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Link } from 'react-router-dom';
import {HomeScreen } from "./screens/HomeScreen";
import {ProductScreen} from "./screens/ProductScreen";

function App() {
  const userInfo = null;
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
        <div className="grid-container">
          <header className = "header">
            <div className="brand">
              <button onClick={openMenu}> &#9776; </button>
              <Link to="/">ReactShop</Link>
            </div>
            <div className="header-links">
              {
                
                userInfo
                 ? <>
                <Link to='/profile'>{userInfo.name}</Link>
                {/* <button type="button"onClick={(e) => dispatch(logout())}> Log out; </button> */}
                </>
                :
                <Link to="/signin">Sign in</Link>
              }

            </div>
            
          </header>
          <aside className="sidebar">
              <h3>Shopping List</h3>
              <ul>
                <li>
                  Pants
                </li>
                <li>
                  Shirts
                </li>
              </ul>
              <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            </aside>
 

          <main className = "main">
              <div className="content"> 
                <Route path="/" exact={true} component={HomeScreen}></Route>
                <Route path="/product/:id" component={ProductScreen}></Route>               
              </div>
          </main>
          <footer className ="footer">All Rights Reserved</footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
