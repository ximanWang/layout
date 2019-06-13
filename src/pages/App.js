import React from 'react';
// import './App.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="header"> 
      <div className="header-title"> ClearView</div>
      </div>

      <div className="main">
        <div className="left-side">
          <div className="profile">Full Financial Profile</div>
          <div className="list">
            <div className="list-item">
              <span className="tag"></span>
              <div className="title">Personal information</div>
            </div>
            <div className="list-item">
              <span className="tag"></span>
              <div className="title">Assets & Liabilities</div>
            </div>
            <div className="list-item">
              <span className="tag"></span>
              <div className="title">planning for the future</div>
              <div className="list-item-list">
                <div className="list-item-list-item">Goals</div>
                <div className="list-item-list-item">Retirement planning</div>
                <div className="list-item-list-item">Estate planning</div>
              </div>
            </div>
            <div className="list-item">
              <span className="tag"></span>
              <div className="title">Insturance</div>
            </div>
            <div className="list-item">
              <span className="tag"></span>
              <div className="title">Estate planning</div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="tips">
            <div className="text"> Form name was complete on 08/05/19 4:39 PM </div>
            <div>Request more information | complete form review | Return to form details</div>
          </div>

          <div className="progress">
            <div className="progress-text">30% complete</div>
            <div className="progress-bar">
              <div className="progress-bar-percent"></div>
            </div>
          </div>

          <div className="triangle"></div>

          <div className="goals">
            <div className="goals-title">Goals</div>
            <div className="goals-list">
              <div className="goals-list-item">Save $20,000 for a rainy day</div>
              <div className="goals-list-item">Buy an inverstment property</div>
            </div>
            <div className="add-btn">Add another item</div>
            <div className="add-todo">Add a to-do</div>
            <div className="add-file">Attach a file</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
