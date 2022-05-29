import style from "./style/Header.module.css";
import "./style/Header.css";

export default function Header({ highlight, setHighlight }) {
    return (
        <header className={style.Header}>
            <div className={`${style.title} ${style.item}`}>
                <div className={style.logo}>
                    ⛔ 403
                    <span style={{ fontWeight: "300" }}> - for bidden</span>
                </div>
                <button className={style.notice}>📢 공지</button>
                <div className={style.notice}></div>
            </div>
            <div className={`${style.item} ${style.mon}`}>
                <div className={style.month}>
                    {highlight.getFullYear()}.
                    {(highlight.getMonth() + 1).toString().padStart(2, "0")}
                </div>
            </div>
            <div className={`${style.item} ${style.benefits}`}>
                <button>⭐ 가점</button>
                <button>🏠 휴가</button>
            </div>
        </header>
    );
}
