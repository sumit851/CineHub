import { useState, lazy, Suspense } from "react";
import "./app.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-div">
        <div className="text1">
          <h1>Welcome</h1>
        </div>
        <div className="text2">
          Millions of movies, TV shows and people to discover. Explore now.
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for movies, TV shows and people"
          />
          <label htmlFor="search">Search</label>
        </div>
      </div>
    </>
  );
}

export default App;
