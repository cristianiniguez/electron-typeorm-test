import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router, Route, Switch, Link, MemoryRouter } from 'react-router-dom';

import './index.css';

const Layout: React.FC = ({ children }) => (
  <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Go to Home</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
);

const Home = () => (
  <Layout>
    <h1>Home 🏠</h1>
  </Layout>
);
const Menu = () => (
  <Layout>
    <h1>Menu 📋</h1>
  </Layout>
);
const About = () => (
  <Layout>
    <h1>About ❓</h1>
  </Layout>
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/menu' component={Menu} />
      <Route exact path='/about' component={About} />
    </Switch>
  </Router>
);

console.log('hello with typescript and react');

ReactDOM.render(<App />, document.getElementById('app'));
