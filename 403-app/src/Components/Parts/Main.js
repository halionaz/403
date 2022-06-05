import style from "../style/Main.module.css";
import Calendar from "./Calendar";

export default function Main({ highlight, setHighlight }) {
    return <div className={style.Main} >
        <div className={style.bar}></div>
        <Calendar highlight={highlight} setHighlight={setHighlight} />
        <div className={style.bar}></div>
    </div>;
}
