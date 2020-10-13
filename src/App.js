import React from "react";
import "./App.css";

function App() {
  const [username, setUsername] = React.useState("Henry");

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Hello, {username}</p>
      </header>
    </div>
  );
}

export default App;
