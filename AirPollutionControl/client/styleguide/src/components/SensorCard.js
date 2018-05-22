import React from 'react';

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
            <div className="card">
                Hallo
            </div>
        )
    }
}