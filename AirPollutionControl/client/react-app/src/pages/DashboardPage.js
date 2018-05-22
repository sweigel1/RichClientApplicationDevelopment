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
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <Panel title="Einstellungen">

                            </Panel>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                           
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12" style={{ alignSelf: 'center' }} >
                            <button className="btn btn-primary btn-circle btn-xl" ><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

