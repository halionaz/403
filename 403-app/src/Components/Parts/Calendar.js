import { useEffect, useState } from "react";
import style from "../style/Calendar.module.css";
import Day from "./Day";

const Calendar = ({ highlight, setHighlight, calendarData, vacationData }) => {
    const [currentYear, setCurrentYear] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(0);
    const [currentDate, setCurrentDate] = useState(0);

    useEffect(() => {
        setCurrentYear(highlight.getFullYear());
        setCurrentMonth(highlight.getMonth());
        setCurrentDate(highlight.getDate());
    }, [highlight]);

    const [startDay, setStartDay] = useState(null);
    const [prevDate, setPrevDate] = useState(0);
    const [prevDay, setPrevDay] = useState(0);

    const [endDay, setEndDay] = useState(null);
    const [nextDate, setNextDate] = useState(0);
    const [nextDay, setNextDay] = useState(0);

    const [prevCal, setPrevCal] = useState([]);
    const [curCal, setCurCal] = useState([]);
    const [nextCal, setNextCal] = useState([]);

    useEffect(() => {
        // 이전 달의 마지막 날 날짜와 요일 구하기
        setStartDay(new Date(currentYear, currentMonth, 0));
        // 이번 달의 마지막날 날짜와 요일 구하기
        setEndDay(new Date(currentYear, currentMonth + 1, 0));
    }, [currentYear, currentMonth]);

    useEffect(() => {
        setPrevDate(startDay?.getDate());
        setPrevDay(startDay?.getDay());
    }, [startDay]);
    useEffect(() => {
        setNextDate(endDay?.getDate());
        setNextDay(endDay?.getDay());
    }, [endDay]);

    useEffect(() => {
        // 지난달 만들기
        setPrevCal([]);
        for (let i = prevDate - prevDay; i <= prevDate; i++) {
            const todayCal = calendarData.filter((data) => {
                return (
                    data.start.slice(0, 10) ===
                    `${
                        currentMonth - 1 >= 0 ? currentYear : currentYear - 1
                    }-${((currentMonth - 1 >= 0 ? currentMonth - 1 : 11) + 1)
                        .toString()
                        .padStart(2, "0")}-${i.toString().padStart(2, "0")}`
                );
            });
            const todayVac = vacationData.filter((data) => {
                return (
                    new Date(data.start.slice(0, 10)).getTime() <=
                        new Date(
                            `${
                                currentMonth - 1 >= 0
                                    ? currentYear
                                    : currentYear - 1
                            }-${(
                                (currentMonth - 1 >= 0
                                    ? currentMonth - 1
                                    : 11) + 1
                            )
                                .toString()
                                .padStart(2, "0")}-${i
                                .toString()
                                .padStart(2, "0")}`
                        ) &&
                    new Date(data.end.slice(0, 10)).getTime() >=
                        new Date(
                            `${
                                currentMonth - 1 >= 0
                                    ? currentYear
                                    : currentYear - 1
                            }-${(
                                (currentMonth - 1 >= 0
                                    ? currentMonth - 1
                                    : 11) + 1
                            )
                                .toString()
                                .padStart(2, "0")}-${i
                                .toString()
                                .padStart(2, "0")}`
                        )
                );
            });
            setPrevCal((prev) => {
                return [
                    ...prev,
                    <Day
                        key={`prev ${i}`}
                        year={
                            currentMonth - 1 >= 0
                                ? currentYear
                                : currentYear - 1
                        }
                        month={currentMonth - 1 >= 0 ? currentMonth - 1 : 11}
                        num={i}
                        type={"prev"}
                        setHighlight={setHighlight}
                        isHighlight={false}
                        todayCal={todayCal}
                        todayVac={todayVac}
                    ></Day>,
                ];
            });
        }
    }, [
        prevDate,
        prevDay,
        currentDate,
        setHighlight,
        currentMonth,
        currentYear,
        calendarData,
        vacationData,
    ]);
    useEffect(() => {
        // 이번달 만들기
        setCurCal([]);
        for (let i = 1; i <= nextDate; i++) {
            const todayCal = calendarData.filter((data) => {
                return (
                    data.start.slice(0, 10) ===
                    `${currentYear}-${(currentMonth + 1)
                        .toString()
                        .padStart(2, "0")}-${i.toString().padStart(2, "0")}`
                );
            });
            const todayVac = vacationData.filter((data) => {
                return (
                    new Date(data.start.slice(0, 10)).getTime() <=
                        new Date(
                            `${currentYear}-${(currentMonth + 1)
                                .toString()
                                .padStart(2, "0")}-${i
                                .toString()
                                .padStart(2, "0")}`
                        ) &&
                    new Date(data.end.slice(0, 10)).getTime() >=
                        new Date(
                            `${currentYear}-${(currentMonth + 1)
                                .toString()
                                .padStart(2, "0")}-${i
                                .toString()
                                .padStart(2, "0")}`
                        )
                );
            });
            setCurCal((prev) => {
                return [
                    ...prev,
                    <Day
                        key={`cur ${i}`}
                        year={currentYear}
                        month={currentMonth}
                        num={i}
                        type={"cur"}
                        setHighlight={setHighlight}
                        isHighlight={currentDate === i ? true : false}
                        todayCal={todayCal}
                        todayVac={todayVac}
                    ></Day>,
                ];
            });
        }
    }, [
        nextDate,
        currentDate,
        setHighlight,
        currentMonth,
        currentYear,
        calendarData,
        vacationData,
    ]);
    useEffect(() => {
        // 다음달 만들기
        setNextCal([]);
        for (let i = 1; i <= 6 - nextDay; i++) {
            const todayCal = calendarData.filter((data) => {
                return (
                    data.start.slice(0, 10) ===
                    `${
                        currentMonth + 1 > 11 ? currentYear + 1 : currentYear
                    }-${((currentMonth + 1 > 11 ? 0 : currentMonth + 1) + 1)
                        .toString()
                        .padStart(2, "0")}-${i.toString().padStart(2, "0")}`
                );
            });
            const todayVac = vacationData.filter((data) => {
                return (
                    new Date(data.start.slice(0, 10)).getTime() <=
                        new Date(
                            `${
                                currentMonth + 1 > 11
                                    ? currentYear + 1
                                    : currentYear
                            }-${(
                                (currentMonth + 1 > 11 ? 0 : currentMonth + 1) +
                                1
                            )
                                .toString()
                                .padStart(2, "0")}-${i
                                .toString()
                                .padStart(2, "0")}`
                        ) &&
                    new Date(data.end.slice(0, 10)).getTime() >=
                        new Date(
                            `${
                                currentMonth + 1 > 11
                                    ? currentYear + 1
                                    : currentYear
                            }-${(
                                (currentMonth + 1 > 11 ? 0 : currentMonth + 1) +
                                1
                            )
                                .toString()
                                .padStart(2, "0")}-${i
                                .toString()
                                .padStart(2, "0")}`
                        )
                );
            });
            setNextCal((prev) => {
                return [
                    ...prev,
                    <Day
                        key={`next ${i}`}
                        year={
                            currentMonth + 1 > 11
                                ? currentYear + 1
                                : currentYear
                        }
                        month={currentMonth + 1 > 11 ? 0 : currentMonth + 1}
                        num={i}
                        type={"next"}
                        setHighlight={setHighlight}
                        isHighlight={false}
                        todayCal={todayCal}
                        todayVac={todayVac}
                    ></Day>,
                ];
            });
        }
    }, [
        nextDay,
        currentDate,
        setHighlight,
        currentMonth,
        currentYear,
        calendarData,
        vacationData,
    ]);

    return (
        <div className={style.Calendar}>
            <div className={style.days}>
                <div className={style.day}>SUN</div>
                <div className={style.day}>MON</div>
                <div className={style.day}>TUE</div>
                <div className={style.day}>WED</div>
                <div className={style.day}>THU</div>
                <div className={style.day}>FRI</div>
                <div className={style.day}>SAT</div>
            </div>
            <div className={style.dates}>
                {prevCal}
                {curCal}
                {nextCal}
            </div>
        </div>
    );
};

export default Calendar;
