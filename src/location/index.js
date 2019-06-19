import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import QqMap from './qqmap';

export default class Index extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            glat: 0.0,
            glng: 0.0,
        }
    }

    componentDidMount() {
        this.map = new QqMap({
            el: document.getElementById('map-container'),
            center: {
                lat: 39.9042,
                lng: 116.4074,
            },
            dragHandle: this.dragHandle,
        });
    }

    dragHandle = (data) => {
        let { address, addressOnBlur } = this.state;
        const newData = {
            glat: data.center.lat,
            glng: data.center.lng,
            address: addressOnBlur ? address : data.address,
        };
        this.setState(newData);
    };

    render() {
        return (
            <div id="map-container" style={{height: '100%', paddingTop:'100%'}}>
                
        </div>
        );
    }

}

ReactDOM.render(<Index />, document.getElementById('root'));
