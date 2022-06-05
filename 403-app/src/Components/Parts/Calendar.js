import style from "../style/Calendar.module.css";

const Calendar = () => {
    return (
        <div className={style.Calendar}>
            <div className={style.days}>
                <div className={style.day}>MON</div>
                <div className={style.day}>TUE</div>
                <div className={style.day}>WED</div>
                <div className={style.day}>THU</div>
                <div className={style.day}>FRI</div>
                <div className={style.day}>SAT</div>
                <div className={style.day}>SUN</div>
            </div>
            <div className={style.dates}></div>
        </div>
    );
};

export default Calendar;
