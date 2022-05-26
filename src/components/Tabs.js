import React from "react";
import "../styles/Tabs.css";

function Tabs({ tab }) {
  return (
    <div classname="Tabs">
      <input id="tab-1" type="radio" name="tabs" />
      <label htmlFor="tab-1">My Font</label>

      <input id="tab-2" type="radio" name="tabs" defaultChecked/>
      <label htmlFor="tab-2">Buy Font</label>

      <div className="content">
        <div id="content-1" classname="content-item">
          <p>This is tab 11111111</p>
        </div>
        <div id="content-2" classname="content-item">
          <p>This is tab 22222222</p>
        </div>
      </div>
    </div>
  );
}
  
export default Tabs;