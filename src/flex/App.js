import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="header"> 
      <div className="header-title"> Index</div>
      </div>

      <div className="main">
        <div className="left-side">
          <div className="profile">Full Profile</div>
          <div className="list">
            <div className="list-item">
              <span className="tag"></span>
              <div className="title">List item 1</div>
            </div>
            <div className="list-item">
              <span className="tag"></span>
              <div className="title">List Item 2</div>
            </div>
            <div className="list-item">
              <span className="tag"></span>
              <div className="title">List item 3</div>
              <div className="list-item-list">
                <div className="list-item-list-item">Inner item 1</div>
                <div className="list-item-list-item">Inner item 2</div>
                <div className="list-item-list-item">Inner item 3</div>
              </div>
            </div>
            <div className="list-item">
              <span className="tag"></span>
              <div className="title">List item 4</div>
            </div>
            <div className="list-item">
              <span className="tag"></span>
              <div className="title">List item 5</div>
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
              <div className="goals-list-item">Save $20,000 for a day</div>
              <div className="goals-list-item">Buy an inverstment</div>
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
