import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import Speakers from './pages/speakers.js';
import Earphones from './pages/earphones.js';
import Headphones from './pages/headphones.js';
import Checkout from './pages/checkout.js';
import BottomBanner from './components/bottombanner.js';
import XX99MARKIIHEADPHONES from './pages/XX99MARKIIHEADPHONES.js';
import X99MARK1HEADPHONES from './pages/X99MARK1HEADPHONES.js';
import XX59HEADPHONES from './pages/XX59HEADPHONES.js';
import Zx9speaker from './pages/zx9speaker.js';
import Zx7Speakers from './pages/Zx7Speakers.js';
import YX1wireless from './pages/YX1wireless.js';






function App() {
  return (
    <Router>
      <Header />

      <main style={{ padding: '20px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/XX99MARKIIHEADPHONES" element={<XX99MARKIIHEADPHONES />} />
          <Route path="/X99MARK1HEADPHONES" element={<X99MARK1HEADPHONES />} />
          <Route path="/XX59HEADPHONES" element={<XX59HEADPHONES />} />
          <Route path="/Zx9speaker" element={<Zx9speaker />} />
          <Route path="/Zx7Speakers" element={<Zx7Speakers />} />
          <Route path="/YX1wireless" element={<YX1wireless />} />
        </Routes>
      </main>
      <BottomBanner />
      <Footer />
    </Router>
  );
}

export default App;
