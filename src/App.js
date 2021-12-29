import './App.css';
import React, { useState, useEffect } from 'react';
import { Home } from "./pages/Home";
import { Reviews } from "./pages/Reviews";
import { Header } from "./pages/Header";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => setTimeout(() => setLoading(false), 2000))
  if (loading) {
    return (
      <div className="loadingScreen">
        <img className="loadingGif" src={require("./images/loading.gif")}/>
      </div>
    )
  } else {
    return (
      <React.Fragment>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home index="Data1"/>}/>
            <Route path="/reviews" element={<Reviews/>}/>
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
