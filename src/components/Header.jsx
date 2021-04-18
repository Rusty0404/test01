import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Story from './Story'
import App from '../App';
import Contact from './Contact';
import Menu from './Main';
import ScrollToTop from './ScrollToTop';
import MyMaps from './Maps';
import FormDialog from './Contact';

document.addEventListener('scroll', function() {
    const headerElement = document.getElementById('header');
    const scrollY = window.pageYOffset;
    if(scrollY > 0) {
        headerElement.classList.add('active');
    } else {
        headerElement.classList.remove('active');
    }
});

const HeaderComponent = () => {

    return (
        <div className="nav-Bar">
        
            <Router>
                <ScrollToTop>
                <header id="header">
                    <ul>
                        <li>
                            <Link to='../HOME'>HOME</Link>
                        </li>
                        <li>
                        <Link to='/MENU'>MENU</Link>
                        </li>
                        <li>
                        <Link to='/ACCESS'>ACCESS</Link>
                        </li>
                        <li>
                        <Link to='/CONTACT'>CONTACT</Link>
                        </li>
                    </ul>
                    <h1>BAR & Filex</h1>
                    </header>
                    <Switch>
                <Route path='/Story'>
                <Story />
                </Route>

                <Route path='/Menu'>
                    <Menu />
                </Route>

                <Route path='/ACCESS'>
                    <MyMaps />
                </Route>

                <Route path='/CONTACT'>
                    <FormDialog />
                </Route>
                

                </Switch>
             
                </ScrollToTop>
            </Router>
            </div>
                
    )
}


export default HeaderComponent