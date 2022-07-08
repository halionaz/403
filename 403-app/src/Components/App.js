import { useEffect, useState } from "react";
import Footer from "./Parts/Footer";
import Header from "./Parts/Head/Header";
import Main from "./Parts/Main";
import "./style/App.css";
import {
    pointData,
    enlistmentDate,
    calendarData,
    vacationData,
    vacationHoldingData,
    holidays,
} from "../secret/DB";
import _ from "underscore";

const today = new Date();

function App() {
    const [highlight, setHighlight] = useState(today);
    const [pointHistory, setPointHistory] = useState(null);
    const [usedP, setUsedP] = useState(0);
    const [startDate, setStartDate] = useState(null);
    const [totalPoint, setTotalPoint] = useState(0);
    const [vacData, setVacData] = useState(null);

    window.addEventListener(
        "mousewheel",
        _.debounce((e) => {
            const value = e.deltaY;
            console.log(`${value} 이것만 실행`);
            if (value >= 100) {
                setHighlight((prev) => {
                    return new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
                });
            } else if (value <= -100) {
                setHighlight((prev) => {
                    return new Date(prev.getFullYear(), prev.getMonth(), 0);
                });
            }
        })
    );

    useEffect(() => {
        console.log(highlight);
    }, [highlight]);

    useEffect(() => {
        // 서버에서 가점 데이터, 입대일, 일정 데이터, 휴가 데이터 가져옴
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
        setVacData(
            // 날짜 순으로 정렬
            vacationHoldingData.sort((a, b) => {
                if (a.issueDate < b.issueDate) {
                    return -1;
                }
                if (b.issueDate < a.issueDate) {
                    return 1;
                }
                return 0;
            })
        );
        setStartDate(enlistmentDate);
    }, []);

    useEffect(() => {
        // 총 가점 계산
        if (pointHistory !== null) {
            let sum = 0;
            for (let i = 0; i < pointHistory.length; i++) {
                if (pointHistory[i].issued) {
                    sum += pointHistory[i].point;
                }
            }
            setTotalPoint(sum);
        }
    }, [pointHistory]);

    useEffect(() => {
        setUsedP(parseInt(totalPoint / 15) * 15);
    }, [totalPoint]);

    return (
        <div className="App">
            <Header
                today={today}
                highlight={highlight}
                setHighlight={setHighlight}
                usedPoint={usedP}
                pointData={pointHistory}
                totalPoint={totalPoint}
                vacationData={vacationData}
                allVacationData={vacData}
            />
            <Main
                highlight={highlight}
                setHighlight={setHighlight}
                calendarData={calendarData}
                vacationData={vacationData}
                holidays={holidays}
            />
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
