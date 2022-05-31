import { useEffect, useState } from "react";
import style from "../style/Point.module.css";

export default function Point({ isOn, data, usedPoint }) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // 총점 업데이트
        if(data !== null){
            let sum = 0;
            for (let i = 0; i < data.length; i++) {
                if(data[i].issued){
                    sum += data[i].point;
                }
            }
            setTotal(sum);
        }
    }, [data]);

    return (
        <div
            className={`modal ${style.Point}`}
            style={{ display: isOn ? "flex" : "none" }}
        >
            <div className={style.top}>
                <h2 className={style.totalScore}>
                    {total}
                    <span className={style.span}>점</span>
                </h2>
                <div className={style.remain}>잔여 : {total - usedPoint}점</div>
            </div>
            <div className={style.history}>
                <h3 className={style.historyTitle}>내역</h3>
                <ul className={style.ul}>
                    {data?.filter(event => event.issued).map((event, ind) => {
                        return (
                            <li className={style.li} style={{"background" : "rgba(46, 170, 220, 0.1)"}} key={ind}>
                                {event.title} :: {event.point}점
                            </li>
                        );
                    })}
                </ul>
                <h3 className={style.historyTitle}>받을 가점</h3>
                <ul className={style.ul}>
                    {data?.filter(event => !event.issued).map((event, ind) => {
                        return (
                            <li className={style.li} style={{"backgroundColor" : "rgb(235, 87, 87, 0.1)"}} key={ind}>
                                {event.title} :: {event.point}점
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
