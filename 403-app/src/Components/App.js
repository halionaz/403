import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./style/App.css";

function App() {
    const [highlight, setHighlight] = useState(new Date());
    return (
        <div className="App">
            <Header highlight={highlight} setHighlight={setHighlight} />
            <Main highlight={highlight} setHighlight={setHighlight} />
            <Footer />
        </div>
    );
}

export default App;
