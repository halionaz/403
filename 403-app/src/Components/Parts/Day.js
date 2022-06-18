import style from "../style/Day.module.css";

export default function Day({
    num,
    year,
    month,
    type,
    isHighlight,
    setHighlight,
    todayCal,
}) {
    console.dir(todayCal);
    return (
        <div className={style.Day}>
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
                        : todayCal.map((cal) => {
                              return <div>{cal.title}</div>;
                          })}
                </div>
            </div>
        </div>
    );
}
