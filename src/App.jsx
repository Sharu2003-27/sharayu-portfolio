import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;