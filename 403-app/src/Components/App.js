import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./style/App.css";

const today = new Date();

function App() {
    const [highlight, setHighlight] = useState(today);
    return (
        <div className="App">
            <Header today={today} highlight={highlight} setHighlight={setHighlight} />
            <Main highlight={highlight} setHighlight={setHighlight} />
            <Footer today={today} highlight={highlight} />
        </div>
    );
}

export default App;
