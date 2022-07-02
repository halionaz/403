import style from "../../style/Header.module.css";
import "../../style/Header.css";
import { useEffect, useState } from "react";
import Point from "./Point";
import Vacation from "./Vacation";
import Notice from "./Notice";
import BackToday from "./BackToday";

export default function Header({
    highlight,
    setHighlight,
    today,
    pointData,
    usedPoint,
    totalPoint,
    vacationData,
    allVacationData
}) {
    const [isNoticeOn, setIsNoticeOn] = useState(false);
    const [isPointOn, setIsPointOn] = useState(false);
    const [isVacationOn, setIsVacationOn] = useState(false);
    const [notToday, setNotToday] = useState(false);

    useEffect(() => {
        if (
            today.getFullYear() === highlight.getFullYear() &&
            today.getMonth() === highlight.getMonth() &&
            today.getDate() === highlight.getDate()
        ) {
            setNotToday(false);
        } else {
            // 하이라이트 된 날짜와 오늘 날짜가 다르다면 오늘로 돌아가기 팝업 띄워줌
            setNotToday(true);
        }
    }, [highlight, today]);

    return (
        <header className={style.Header}>
            <div className={`${style.title} ${style.item}`}>
                <div className={style.logo}>
                    ⛔ 403
                    <span style={{ fontWeight: "300" }}> - for bidden</span>
                </div>
                <button
                    className={isNoticeOn ? "activeBtn" : ""}
                    onClick={() => {
                        setIsNoticeOn((prev) => {
                            return !prev;
                        });
                    }}
                >
                    📢 공지
                </button>
                <div className={style.notice}></div>
            </div>
            <div className={`${style.item} ${style.mon}`}>
                <div className={style.month}>
                    {highlight.getFullYear()}.
                    {(highlight.getMonth() + 1).toString().padStart(2, "0")}
                </div>
            </div>
            <div className={`${style.item} ${style.benefits}`}>
                <button
                    className={isPointOn ? "activeBtn" : ""}
                    onClick={() => {
                        if (!isPointOn && isVacationOn) {
                            // 둘다 켜져야 되는 경우
                            // useState의 상태 변경은 시간이 걸리므로, set함수 뒤에 이걸 넣으면 isPointOn이 아직 안바뀜
                            // 따라서 하기 전에 조건 판단
                            setIsVacationOn(false);
                        }
                        setIsPointOn((prev) => {
                            return !prev;
                        });
                    }}
                >
                    ⭐ 가점
                </button>
                <button
                    className={isVacationOn ? "activeBtn" : ""}
                    onClick={() => {
                        if (isPointOn && !isVacationOn) {
                            setIsPointOn(false);
                        }
                        setIsVacationOn((prev) => {
                            return !prev;
                        });
                    }}
                >
                    🏠 휴가
                </button>
            </div>
            <Notice isOn={isNoticeOn} />
            <Point
                isOn={isPointOn}
                data={pointData}
                usedPoint={usedPoint}
                totalPoint={totalPoint}
            />
            <Vacation isOn={isVacationOn} vacData={allVacationData} />
            <BackToday
                notToday={notToday}
                setHighlight={setHighlight}
                today={today}
            />
        </header>
    );
}
