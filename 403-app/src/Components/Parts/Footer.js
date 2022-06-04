import { useEffect, useState } from "react";
import style from "../style/Footer.module.css";

export default function Footer({ today, highlight, start, setStart }) {
    const todayDate = new Date(today);
    // const highlightDate = new Date(highlight);
    const startDate = new Date(start);
    const endDate = new Date(start);
    endDate.setMonth(startDate.getMonth() + 21);
    endDate.setDate(endDate.getDate()-1);
    const privateDate = new Date(start);
    privateDate.setMonth(startDate.getMonth() + 2);
    const corporalDate = new Date(start);
    corporalDate.setMonth(startDate.getMonth() + 8);
    const sgtDate = new Date(start);
    sgtDate.setMonth(startDate.getMonth() + 14);
    const [entirePrgs, setEntirePrgs] = useState(0);
    const [classPrgs, setClassPrgs] = useState(0);
    const [curClass, setCurClass] = useState("이병");
    const [remain, setRemain] = useState(0);

    useEffect(() => {
        setRemain(Math.floor((endDate.getTime() - todayDate.getTime())/(1000*60*60*24)));
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
                    <div className={style.date}>{start}</div>
                    <div className={style.date}>{endDate.getFullYear()}-{endDate.getMonth()+1}-{endDate.getDate()}</div>
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
