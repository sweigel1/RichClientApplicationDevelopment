import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import Sidebar from 'react-sidebar';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/Header';

import SensorPage from './pages/SensorPage';
import DashboardPage from './pages/DashboardPage';
import OptionsPage from './pages/OptionsPage';


const routes = [
  {
    path: "/",
    exact: true,
    component: DashboardPage
  },
  {
    path: "/sensors",
    component: SensorPage
  },
  {
    path: "/options",
    component: OptionsPage
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebarDocked: true,
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onSetSidebarDocked = this.onSetSidebarDocked.bind(this);
  }

  updateDimensions() {
    this.setState({ ...this.state,sidebarDocked: !(window.innerWidth < 768) });
  }

   /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  onSetSidebarOpen(open) {
    this.setState({...this.state,sidebarOpen: open});
  }
  onSetSidebarDocked(docked) {
    this.setState({...this.state,sidebarDocked: docked});
  }

  render() {
    var sidebarContent = (
      <div className="sidebar-content">
        <NavLink exact to="/" className="btn"><img src="/img/chart.png" className="float-left" alt=""/> Dashboard</NavLink>
        <NavLink exact to="/sensors" className="btn"><img src="/img/satellite.png" className="float-left" alt=""/> Sensoren</NavLink>
        <NavLink exact to="/apis" className="btn"><img src="/img/globe.png" className="float-left" alt=""/> Externe APIs</NavLink>
      </div>
    );
    return (
      <Router>
      <div className="App">
        <Sidebar sidebar={sidebarContent}
                  open={this.state.sidebarOpen}
                  onSetOpen={this.onSetSidebarOpen}
                  docked={this.state.sidebarDocked}
                  sidebarClassName="sidebar"
        >
        <Header></Header>
          <div className="content">
            <div className="content-view">
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </div>
          </div>
        
        </Sidebar>
      </div>
      </Router>
    );
  }
}

export default App;
