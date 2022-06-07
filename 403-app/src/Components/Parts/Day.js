import style from "../style/Day.module.css";

export default function Day({ num, type }) {
    return (
        <div className={style.Day}>
            <div className={style.box}>{num}</div>
        </div>
    );
}
