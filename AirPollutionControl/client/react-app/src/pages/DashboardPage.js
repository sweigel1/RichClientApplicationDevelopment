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
            <div className="full-height">
                
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <Panel title="Einstellungen"/>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <Panel title="Einstellungen"/>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <Panel title="Einstellungen"/>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <Panel title="Einstellungen"/>
                        </div>
                        
                    </div>
                
            </div>

        )
    }
}

