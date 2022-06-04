import { useEffect, useState } from "react";
import Footer from "./Parts/Footer";
import Header from "./Parts/Head/Header";
import Main from "./Parts/Main";
import "./style/App.css";
import { pointData, usedPoint, enlistmentDate } from "../secret/DB";

const today = new Date();

function App() {
    const [highlight, setHighlight] = useState(today);
    const [pointHistory, setPointHistory] = useState(null);
    const [usedP, setUsedP] = useState(0);
    const [startDate, setStartDate] = useState(null);

    useEffect(() => {
        // 서버에서 가점 데이터 가져옴
        setPointHistory(
            // 날짜 순으로 정렬
            JSON.parse(pointData).sort((a, b) => {
                if (a.date < b.date) {
                    return -1;
                }
                if (b.date < a.date) {
                    return 1;
                }
                return 0;
            })
        );

        setUsedP(usedPoint);
        setStartDate(enlistmentDate);
    }, []);

    return (
        <div className="App">
            <Header
                today={today}
                highlight={highlight}
                setHighlight={setHighlight}
                usedPoint={usedP}
                pointData={pointHistory}
            />
            <Main highlight={highlight} setHighlight={setHighlight} />
            <Footer
                today={today}
                highlight={highlight}
                start={startDate}
                setStart={setStartDate}
            />
        </div>
    );
}

export default App;
