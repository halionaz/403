import style from "../../style/Notice.module.css";

export default function Notice({ isOn }) {
    return (
        <div
            className={`modal ${style.Notice}`}
            style={{ display: isOn ? "flex" : "none" }}
        ></div>
    );
}
