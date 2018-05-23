import React from 'react';
import Panel from '../components/Panel';


export default class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            position: null,
            lastUpdate: 0,
            icon: null
        };
    }
    render() {
        return (
            
            <Panel className="full-height" title="Einstellungen"/>   
           
        )
    }
}

