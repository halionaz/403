import style from "../style/Day.module.css";

export default function Day({
    num,
    year,
    month,
    type,
    isHighlight,
    setHighlight,
    todayCal,
    todayVac,
    isOff,
}) {
    return (
        <div className={`${style.Day} ${isOff ? style.off : ""}`}>
            <div
                className={`${style.box} ${isHighlight ? style.select : ""}`}
                onClick={() => {
                    setHighlight(
                        new Date(
                            `${year}-${(month + 1)
                                .toString()
                                .padStart(2, "0")}-${num
                                .toString()
                                .padStart(2, "0")}`
                        )
                    );
                }}
            >
                <div className={style.num}>{num}</div>
                <div className={style.todayCal}>
                    {todayCal === undefined
                        ? ""
                        : todayCal.map((cal, i) => {
                              return <div key={`cal ${i}`}>{cal.title}</div>;
                          })}
                    {todayVac === undefined
                        ? ""
                        : todayVac.map((cal, i) => {
                              return <div key={`vac ${i}`}>{cal.title}</div>;
                          })}
                </div>
            </div>
        </div>
    );
}
