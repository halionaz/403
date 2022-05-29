import style from "./style/Header.module.css";
import "./style/Header.css";
import { useEffect, useState } from "react";
import Point from "./Point";

export default function Header({ highlight, setHighlight, today }) {
    const [isPointOn, setIsPointOn] = useState(false);

    useEffect(() => {
        if (
            !(
                today.getFullYear() === highlight.getFullYear() &&
                today.getMonth() === highlight.getMonth()
            )
        ) {
            // 현재의 달과, 보여지고 있는 달이 다르다면 돌아가기 버튼 팝업
            console.log("팝업 띄워주셈");
        }
    }, [highlight, today]);

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
                <button className={(isPointOn ? "activeBtn" : "")}
                    onClick={() => {
                        setIsPointOn((prev) => {
                            return !prev;
                        });
                    }}
                >
                    ⭐ 가점
                </button>
                <button>🏠 휴가</button>
            </div>
            <Point isOn={isPointOn} />
        </header>
    );
}
