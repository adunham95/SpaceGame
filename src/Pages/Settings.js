import React from 'react';

function Settings() {

    const clearData = () => {
        localStorage.clear();
    }

  return (
    <div className="page settings">
        <h1>Settings</h1>
        <button onClick={()=>{clearData()}}>Clear Data</button>
    </div>
  );
}


export default Settings;
