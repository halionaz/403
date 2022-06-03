import { useEffect, useState } from "react";
import style from "../../style/Point.module.css";
import PointEdit from "./PointEdit";
import PointLi from "./PointLi";

export default function Point({ isOn, data, usedPoint }) {
    const [total, setTotal] = useState(0);
    const [dateData, setDateData] = useState("0000-00-00");
    const [visible, setVisible] = useState(false);
    const [timer, setTimer] = useState(null);
    const [selected, setSelected] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        // 총점 업데이트
        if (data !== null) {
            let sum = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].issued) {
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
            <div
                className={style.dateModal}
                style={{ visibility: visible ? "visible" : "hidden" }}
            >
                {dateData}
            </div>
            <PointEdit
                selected={selected}
                setSelected={setSelected}
                selectedEvent={selectedEvent}
            />
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
                    {data
                        ?.filter((event) => event.issued)
                        .map((event, ind) => {
                            return (
                                <PointLi
                                    key={ind}
                                    type={"내역"}
                                    setDateData={setDateData}
                                    event={event}
                                    timer={timer}
                                    setTimer={setTimer}
                                    sel={selected}
                                    setSel={setSelected}
                                    setSelectedEvent={setSelectedEvent}
                                    setVisible={setVisible}
                                />
                            );
                        })}
                </ul>
                <h3 className={style.historyTitle}>받을 가점</h3>
                <ul className={style.ul}>
                    {data
                        ?.filter((event) => !event.issued)
                        .map((event, ind) => {
                            return (
                                <PointLi
                                    key={ind}
                                    type={"받을 가점"}
                                    setDateData={setDateData}
                                    event={event}
                                    timer={timer}
                                    setTimer={setTimer}
                                    sel={selected}
                                    setSel={setSelected}
                                    setSelectedEvent={setSelectedEvent}
                                    setVisible={setVisible}
                                />
                            );
                        })}
                    <li>
                        <div className={style.plus}>
                            <ion-icon name="add-circle"></ion-icon>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
