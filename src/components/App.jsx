import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [tiru, pru] = useState(time);
  setInterval(kuta, 1000);

  function kuta() {
    let time = new Date().toLocaleTimeString();
    pru(time);
  }
  return (
    <div className="container">
      <h2>{tiru}</h2>
      <button onClick={kuta}>Get Time</button>
    </div>
  );
}

export default App;
