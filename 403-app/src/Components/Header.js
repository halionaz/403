import style from "./style/Header.module.css";
import "./style/Header.css";

export default function Header() {
    return (
        <header className={style.Header}>
            <div className={`${style.title} ${style.item}`}>
                <div className={style.logo}>⛔ 403<span style={{"fontWeight" : "300"}}> - for bidden</span></div>
                <button className={style.notice}>📢 공지</button>
                <div className={style.notice}></div>
            </div>
            <div className={`${style.item} ${style.month}`}>2022.05</div>
            <div className={`${style.item} ${style.benefits}`}>
                <button>⭐ 가점</button>
                <button>🏠 휴가</button>
            </div>
        </header>
    );
}
