import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./style/App.css";
import { pointData, usedPoint } from "./secret/DB";

const today = new Date();

function App() {
    const [highlight, setHighlight] = useState(today);
    const [pointHistory, setPointHistory] = useState(null);
    const [usedP, setUsedP] = useState(0);

    useEffect(() => {
        // 서버에서 가점 데이터 가져옴
        setPointHistory(JSON.parse(pointData));
        setUsedP(usedPoint);
    }, []);

    return (
        <div className="App">
            <Header today={today} highlight={highlight} setHighlight={setHighlight} usedPoint={usedP} pointData = {pointHistory} />
            <Main highlight={highlight} setHighlight={setHighlight} />
            <Footer today={today} highlight={highlight} />
        </div>
    );
}

export default App;
