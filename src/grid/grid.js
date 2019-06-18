import React from 'react';
import ReactDOM from 'react-dom';
import './grid.scss';

function Grid () {
    return (
        <div className="container">
            <div className="item item1">1</div>
            <div className="item item2">2</div>
            <div className="item item3">3</div>
            <div className="item item4">4</div>
            <div className="item item5">5</div>
            <div className="item item6">6</div>
            <div className="item item7">7</div>
            <div className="item item8">8</div>
            <div className="item item9">9</div>
        </div>
    );
}
ReactDOM.render(<Grid />, document.getElementById('root'));
