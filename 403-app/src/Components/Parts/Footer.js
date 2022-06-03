import style from "../style/Footer.module.css";

export default function Footer({today, highlight}){
    return <div className={style.Footer}>
        <div className={style.dDay}></div>
        <div className={style.percentage}></div>
        <div className={style.etc}></div>
    </div>
}