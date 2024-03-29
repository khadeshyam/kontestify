import "./App.css";
import { useState, useEffect } from "react";
import Contests from "./pages/Contests";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const [contests, setContests] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchContest() {
    try {
      let url = "https://kontests.net/api/v1/all";
      const res = await fetch(url);
      const result = await res.json();
      // console.log(result);
      setLoading(false);
      setContests(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (!contests) {
      fetchContest();
    }
    // eslint-disable-next-line
  }, []);

  async function handlePlatformClick(platform) {
    try {
      setLoading(true);
      let url = `https://kontests.net/api/v1/${platform}`;
      const res = await fetch(url);
      const result = await res.json();
      // console.log(result);
      setContests(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="app">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contests"
          element={
            <Contests
              contests={contests}
              loading={loading}
              handlePlatformClick={handlePlatformClick}
            />
          }
        />
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
