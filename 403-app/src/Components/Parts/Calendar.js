import { useEffect, useState } from "react";
import style from "../style/Calendar.module.css";

const Calendar = ({ highlight, setHighlight }) => {

    const [currentYear, setCurrentYear] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(0);
    // const [currentDate, setCurrentDate] = useState(0);

    useEffect(()=>{
        setCurrentYear(highlight.getFullYear());
        setCurrentMonth(highlight.getMonth());
        // setCurrentDate(highlight.getDate());
    }, [highlight]);

    const [startDay, setStartDay] = useState(null);
    const [prevDate, setPrevDate] = useState(0);
    const [prevDay, setPrevDay] = useState(0);

    const [endDay, setEndDay] = useState(null);
    const [nextDate, setNextDate] = useState(0);
    const [nextDay, setNextDay] = useState(0);

    useEffect(()=>{
        // 이전 달의 마지막 날 날짜와 요일 구하기
        setStartDay(new Date(currentYear, currentMonth, 0));
        // 이번 달의 마지막날 날짜와 요일 구하기
        setEndDay(new Date(currentYear, currentMonth + 1, 0));
    }, [currentYear, currentMonth]);

    useEffect(() => {
        setPrevDate(startDay?.getDate());
        setPrevDay(startDay?.getDay());
    }, [startDay]);

    useEffect(()=>{
        setNextDate(endDay?.getDate());
        setNextDay(endDay?.getDay());
    }, [endDay]);

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
            <div className={style.dates}></div>
        </div>
    );
};

export default Calendar;
