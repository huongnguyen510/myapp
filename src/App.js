import React from 'react';
import Tabs from "./components/Tabs";
import "./components/style.scss";

const data = {
  "type": "Font selection",
  "content": [
    {
      "id": 112,
      "abbr": "M",
      "color": "#00A653",
      "colorBlindLabel": "green",
      "label": "Merriweather project is led by Sorkin Type"
    },
    {
      "id": 113,
      "abbr": "R",
      "color": "#FE7FC3",
      "colorBlindLabel": "pink",
      "label": "Roboto doesn't compromise, allowing letters"
    },
    {
      "id": 114,
      "abbr": "NS",
      "color": "#046DFF",
      "colorBlindLabel": "blue",
      "label": "Noto Sans covers over 30 scripts"
    }
  ]
}

function App() {
  return (
    <div class="container">
      <Tabs>
        <div label="Buy Fonts">
          {data?.content?.map((item, index) => (
            <div key={index} class="font-item">
              <div class="square">
                <div class={`letter ${item.colorBlindLabel}`}>
                  <span>{item.abbr}</span>
                </div>
              </div>
              <h4 class="font-name">{item.label}</h4>
            </div>
          ))}
        </div>
        <div label="My Fonts">
          <p>Donec sodales sagittis magna. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Mauris sollicitudin fermentum libero. Vestibulum fringilla pede sit amet augue. Donec vitae orci sed dolor rutrum auctor.</p>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
