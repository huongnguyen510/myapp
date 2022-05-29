import React from 'react';
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  return (
    <div class="container">
      <h1>Please select one font</h1>
      <Tabs>
        <div label="My Fonts">
          <div class="font-item">
            <div class="square green big">
              <span>M</span>
            </div>
            <h4>Merriweather project is led by Sorkin Type</h4>
          </div>
          <div class="font-item">
            <div class="square pink small">
              <span>R</span>
            </div>
            <h4>Roboto doesn't compromise, allowing letters</h4>
          </div>
          <div class="font-item">
            <div class="square blue small">
              <span>NS</span>  
            </div>
            <h4>Noto Sans covers over 30 scripts</h4>
          </div>
        </div>
        <div label="Buy Fonts">
          <p>Donec sodales sagittis magna. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Mauris sollicitudin fermentum libero. Vestibulum fringilla pede sit amet augue. Donec vitae orci sed dolor rutrum auctor.</p>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
