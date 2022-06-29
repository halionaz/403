import style from "../../style/Vacation.module.css";

export default function Vacation({ isOn, vacData }) {
    console.log(vacData);
    return (
        <div
            className={`modal ${style.Vacation}`}
            style={{ display: isOn ? "flex" : "none" }}
        ></div>
    );
}
