import React from 'react';
import './SensorCard.css';

export default class SensorCard extends React.Component {
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
            <div className="card glass container">
                <div className="wrapper">
                    <div className="row full-height" style={{display: 'flex'}}>
                        <div className="col-lg-5 align-self-center">
                            <img src="/img/satellite.png" className="sensor-image" alt=""/>
                        </div>
                        <div className="col-lg-7 row text-right">
                            <div className="title full-width">
                            ###name###
                            </div>
                            <div className="subtitle full-width">
                                ###subtitle###
                            </div>

                            <div className="align-self-end mb-2">
                                <div className="row">
                                    <div className="col-sm-4 align-self-center">
                                        <img src="/img/alarm.png" width="40px" height="40px" alt=""/>
                                    </div>
                                    <div className="col-sm-8 time-label text-center">
                                        letztes Update 
                                        <br/>
                                        --.--
                                        <br/>
                                        **.**.****
                                    </div>
                                </div>
                            
                            </div>
                            
                        </div>
                    </div>      
                </div>
                          
            </div>
        )
    }
}