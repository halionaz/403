import style from "./style/Point.module.css";

export default function Point({isOn}) {
    return <div className={`modal ${style.Point}`} style={{"display" : (isOn ? "block": "none")}}></div>;
}
