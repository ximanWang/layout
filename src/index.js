import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactDOM.render(<div className="pageList">
    <a className="pageItem" href='/flex.html'>
        Flex
    </a>
    <a className="pageItem" href='/grid.html'>
        Grid
    </a>
</div>, document.getElementById('root'));

serviceWorker.unregister();
