import style from "../style/Main.module.css";
import Calendar from "./Calendar";

export default function Main({
    highlight,
    setHighlight,
    calendarData,
    vacationData,
    holidays,
}) {

    return (
        <div className={style.Main}>
            <div className={style.bar}></div>
            <Calendar
                highlight={highlight}
                setHighlight={setHighlight}
                calendarData={calendarData}
                vacationData={vacationData}
                holidays={holidays}
            />
            <div className={style.bar}></div>
        </div>
    );
}
