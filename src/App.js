import './App.css';
import React, { useState, useEffect } from 'react';
import { Home } from "./pages/Home";
import { Reviews } from "./pages/Reviews";
import { Header } from "./pages/Header";
import { About } from "./pages/About";
import { Service } from "./pages/Service";
import { Locations } from "./pages/Locations";
import { Losangeles } from "./pages/Losangeles";
import { Atlanta } from "./pages/Atlanta";
import { Blogs } from "./pages/Blogs";
import { Bloglisting } from "./pages/Bloglisting";

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
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/locations" element={<Locations/>}/>
             <Route path="/losangeles" element={<Losangeles/>}/>
              <Route path="/atlanta" element={<Atlanta/>}/>
               <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/bloglisting" element={<Bloglisting/>}/>
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
