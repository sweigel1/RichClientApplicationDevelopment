import React from 'react';
import './Panel.css'

export default class Panel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card glass">
                <div className="card-header">
                    {this.props.title}
            </div>
                <div className="card-body">
                    
                </div>
            </div>
        )
    }
}