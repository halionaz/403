import { useState } from "react";
import style from "../../style/Point.module.css";
import PointEdit from "./PointEdit";
import PointLi from "./PointLi";

export default function Point({ isOn, data, usedPoint, totalPoint }) {
    const [dateData, setDateData] = useState("0000-00-00");
    const [visible, setVisible] = useState(false);
    const [timer, setTimer] = useState(null);
    const [selected, setSelected] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

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
                    {totalPoint}
                    <span className={style.span}>점</span>
                </h2>
                <div className={style.remain}>
                    잔여 : {totalPoint - usedPoint}점
                </div>
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
