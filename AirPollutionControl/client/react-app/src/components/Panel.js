import React from 'react';


export default class Panel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card glass panel">
                <div className="card-header">

                    {this.props.title}

                </div>
                <div className="card-body">
                    <div>Hallo</div>
                </div>
            </div>
        )
    }
}