import { useEffect, useState } from "react";
import style from "./style/Modal.module.css";

export default function Modal({ type }) {

    const [display, setDisplay] = useState(false);

    useEffect(() => {
        if (type !== null) {
            setDisplay(true);
        } else {
            setDisplay(false)
        }
    }, [type]);

    return (
        <div
            className={style.modal}
            style={{ display: display ? "block" : "none" }}
        ></div>
    );
}
