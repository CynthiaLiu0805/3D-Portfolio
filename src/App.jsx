import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <h1 className="text-2xl text-white underline">hello hello</h1>
            <Navbar />
            <Hero />
            <About />

        </main>
    )
}
export default App
