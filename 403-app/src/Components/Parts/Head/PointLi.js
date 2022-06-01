import { useState } from "react";
import style from "../../style/PointLi.module.css";

const PointLi = ({
    type,
    setDateData,
    event,
    timer,
    setTimer,
    sel,
    setSel, setSelectedEvent
}) => {
    const [opacity, setOpacity] = useState("0.1");
    return (
        <li
            className={style.li}
            style={{
                background:
                    type === "내역"
                        ? `rgba(46, 170, 220, ${opacity})`
                        : `rgb(235, 87, 87, ${opacity})`,
            }}
            onClick={() => {
                // 가점 수정, 삭제 모달 띄워줌
                setSel(true);
                setOpacity("0.1");
                setSelectedEvent(event);
            }}
            onMouseOver={() => {
                if (!sel) {
                    setOpacity("0.5");
                    setDateData(event.date.slice(0, 10));
                    if (timer !== null) {
                        clearTimeout(timer);
                    }
                }
            }}
            onMouseOut={() => {
                if (!sel) {
                    setOpacity("0.1");
                    setTimer(
                        setTimeout(() => {
                            setDateData("0000-00-00");
                        }, 1000)
                    );
                }
            }}
        >
            {event.title} :: {event.point}점
        </li>
    );
};

export default PointLi;
