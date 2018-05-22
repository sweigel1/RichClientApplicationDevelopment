import React from 'react';
import './Header.css';
import logo from '../logo.svg';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            notifications: []
        };
    }
    render() {
        return (
            <header className="header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title" style={{marginRight: 'auto'}}>Air Polution Control</h1>
                <div className="text-danger mr-4" style={{fontSize:'2em', justifySelf: 'end'}}>
                    <i className="far fa-bell"></i>
                </div>
                <h5 style={{marginRight: '1rem'}}>Hallo, Daniel</h5>
                <div className="text-info" style={{fontSize:'2em', justifySelf: 'end'}}>
                    <i className="fas fa-user"></i>
                </div>
                <div className="text-info" style={{fontSize:'2em', justifySelf: 'end'}}>
                    <i className="fas fa-angle-down"></i>
                </div>
            </header>
        )
    }
}