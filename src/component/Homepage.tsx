import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Director from './director';
import Movies from './movie';
import Details from './details';
import Search from './search';
import Directordetails from './directordetails';

export default function Homepage() {
  return (
    <Router>
      <div role='navigation'>
        <nav role='navigation' className='navbar color navbar-expand-lg navbar-dark primary-color'>
        <img className='nav-img' src="https://image000.flaticon.com/png/512/2991/2991485.png" alt="Img"></img>
          <a className='navbar-brand' href='#'>
           Movie Time 
          </a>
          <button
            role='navigation'
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#basicExampleNav'
            aria-controls='basicExampleNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div role='navigation' className='collapse navbar-collapse' id='basicExampleNav'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link to='/moviedetails'>
                  <a className='nav-link' href='#'>
                    Movie List
                    <span className='sr-only'>(current)</span>
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/directordetails'>
                  <a className='nav-link' href='#'>
                    Director List
                    <span className='sr-only'>(current)</span>
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/movie'>
                  <a className='nav-link' href='#'>
                    Add Movie
                    <span className='sr-only'>(current)</span>
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/director'>
                  <a className='nav-link' href='#'>
                    Add Director
                    <span className='sr-only'>(current)</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path='/moviedetails'>
          <Details />
        </Route>
        <Route exact path='/directordetails'>
          <Directordetails />
        </Route>
        <Route exact path='/directorsearch'>
          <Search />
        </Route>
        <Route exact path='/movie'>
          <Movies />
        </Route>
        <Route exact path='/director'>
          <Director />
        </Route>
      </Switch>
    </Router>
  );
}
