import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
    const [pointsList, setPointsList] = useState([]);

    console.log(pointsList);

    return (
        <div id="main" className="flex flex-col h-screen justify-between">
            <Header />
            <Home pointsList={pointsList} setPointsList={setPointsList} />
            <Footer />
        </div>
    );
}

export default App;
