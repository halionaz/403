import { useEffect, useState } from "react";
import Header from "./Header";
import "./style/App.css";

function App() {
    const today = new Date();
    const [mainMonth, setMainMonth] = useState(today.getMonth() + 1);

    useEffect(() => {
        // header 구성
        document.title = "403 Forbidden";
    }, []);

    return (
        <div className="App">
            <Header month={mainMonth} setMonth={setMainMonth} />
        </div>
    );
}

export default App;
