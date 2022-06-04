import { useEffect, useMemo, useState } from "react";
import style from "../style/Footer.module.css";

export default function Footer({ today, highlight, start, setStart }) {
    const todayDate = useMemo(() => {
        return new Date(today);
    }, [today]);
    // const highlightDate = useMemo(() => {
    //     return new Date(highlight);
    // }, [highlight]);
    const startDate = useMemo(() => {
        return new Date(start);
    }, [start]);
    const endDate = useMemo(() => {
        const temp = new Date(start);
        temp.setMonth(temp.getMonth() + 21);
        temp.setDate(temp.getDate() - 1);
        return temp;
    }, [start]);
    const privateDate = useMemo(() => {
        const temp = new Date(start);
        temp.setMonth(temp.getMonth() + 2);
        return temp;
    }, [start]);
    const corporalDate = useMemo(() => {
        const temp = new Date(start);
        temp.setMonth(temp.getMonth() + 8);
        return temp;
    }, [start]);
    const sgtDate = useMemo(() => {
        const temp = new Date(start);
        temp.setMonth(temp.getMonth() + 14);
        return temp;
    }, [start]);
    const [entirePrgs, setEntirePrgs] = useState(0);
    const [classPrgs, setClassPrgs] = useState(0);
    const [curClass, setCurClass] = useState("이병");
    const [remain, setRemain] = useState(0);

    useEffect(() => {
        setRemain(
            Math.ceil(
                (endDate.getTime() - todayDate.getTime()) /
                    (1000 * 60 * 60 * 24)
            )
        );
        // 전체 퍼센테이지 계산
        setEntirePrgs(
            Math.round(
                ((todayDate.getTime() - startDate.getTime()) /
                    (endDate.getTime() - startDate.getTime())) *
                    1000
            ) / 10
        );
        // 계급 계산
        if (todayDate.getTime() < privateDate.getTime()) {
            setCurClass("이병");
            setClassPrgs(
                Math.round(
                    ((todayDate.getTime() - startDate.getTime()) /
                        (privateDate.getTime() - startDate.getTime())) *
                        1000
                ) / 10
            );
        } else if (todayDate.getTime() < corporalDate.getTime()) {
            setCurClass("일병");
            setClassPrgs(
                Math.round(
                    ((todayDate.getTime() - privateDate.getTime()) /
                        (corporalDate.getTime() - privateDate.getTime())) *
                        1000
                ) / 10
            );
        } else if (todayDate.getTime() < sgtDate.getTime()) {
            setCurClass("상병");
            setClassPrgs(
                Math.round(
                    ((todayDate.getTime() - corporalDate.getTime()) /
                        (sgtDate.getTime() - corporalDate.getTime())) *
                        1000
                ) / 10
            );
        } else if (todayDate.getTime() < endDate.getTime()) {
            setCurClass("병장");
            setClassPrgs(
                Math.round(
                    ((todayDate.getTime() - sgtDate.getTime()) /
                        (endDate.getTime() - sgtDate.getTime())) *
                        1000
                ) / 10
            );
        } else {
            setCurClass("전역");
            setEntirePrgs(100);
        }
    }, [todayDate, startDate, endDate, privateDate, corporalDate, sgtDate]);

    return (
        <div className={style.Footer}>
            <div className={style.dDay}>
                <div className={style.d}>D-{remain}</div>
                <div className={style.dates}>
                    <div className={style.date}>🐣 {start}</div>
                    <div className={style.date}>🐓 {endDate.getFullYear()}-{(endDate.getMonth() + 1).toString().padStart(2, "0")}-
                        {endDate.getDate().toString().padStart(2, "0")}
                    </div>
                </div>
            </div>
            <div className={style.progress}>
                <div className={style.progressBar}>
                    <div
                        className={style.pb}
                        style={{
                            width: `${classPrgs}%`,
                            backgroundColor: "rgb(163, 34, 34)",
                        }}
                    >
                        <div className={style.name}>
                            {curClass} {classPrgs}%
                        </div>
                    </div>
                </div>
                <div className={style.progressBar}>
                    <div
                        className={style.pb}
                        style={{
                            width: `${entirePrgs}%`,
                            backgroundColor: "rgb(0, 63, 0)",
                        }}
                    >
                        <div className={style.name}>전체 {entirePrgs}%</div>
                    </div>
                </div>
            </div>
            <div className={style.blank}></div>
        </div>
    );
}
