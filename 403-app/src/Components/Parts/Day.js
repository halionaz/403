import style from "../style/Day.module.css";

export default function Day({
    num,
    year,
    month,
    type,
    isHighlight,
    setHighlight,
}) {
    return (
        <div className={style.Day}>
            <div
                className={style.box}
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
                {num}
            </div>
        </div>
    );
}
