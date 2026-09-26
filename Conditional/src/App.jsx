import { useState } from "react";
import Login from "./Login";
import Welcome from "./Welcome";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering</h1>

      {isLoggedIn ? (
        <Welcome logout={() => setIsLoggedIn(false)} />
      ) : (
        <Login login={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;