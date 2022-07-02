import style from "../../style/Vacation.module.css";

export default function Vacation({ isOn, vacData }) {
    return (
        <div
            className={`modal ${style.Vacation}`}
            style={{ display: isOn ? "flex" : "none" }}
        >
            <ul className={style.ul}>
                {vacData?.map((vac, i) => {
                    return (
                        <li key={i} style={style.li}>
                            {vac.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
