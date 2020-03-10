import React from 'react';

let defaultBuilding = [
  {"id":"001","type":"missionControl","title":"Mission Control","length":2},
  {"id":"002","type":"garage","title":"Garage","length":1},
  {"id":"003","type":"bed","title":"Bedroom","length":1},
  {"id":"004","type":"garden","title":"Garden","length":1},
  {"id":"005","type":"warehouse","title":"Warehouse","length":2},
  {"id":"006","type":"lab","title":"Lab","length":1},
  {"id":"007","type":"workshop","title":"Workshop","length":1},
];

function Settings() {

    const clearData = () => {
        localStorage.clear();
    }

    const loadDefaults = () => {
      localStorage.clear("");
      localStorage.setItem("hab", JSON.stringify(defaultBuilding));
    }

  return (
    <div className="page settings">
        <h1>Settings</h1>
        <button onClick={()=>{clearData()}}>Clear Data</button>
        <button onClick={()=>loadDefaults()}>Load Default Building</button>
    </div>
  );
}


export default Settings;