import React from 'react';
import SensorCard from '../components/SensorCard';


export default class SensorPage extends React.Component {
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
                            <SensorCard />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <SensorCard />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <SensorCard />
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

