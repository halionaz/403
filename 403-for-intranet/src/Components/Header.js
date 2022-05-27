import { useState } from "react";
import style from "./style/Header.module.css";

const Header = ({ month, setMonth }) => {
    const [forWho, setForWho] = useState("for bidden");
    return (
        <header>
            <h1>403</h1>
            <h2
                onMouseEnter={() => {
                    setForWho((prev) => {
                        if (prev === "for bidden") {
                            return "for Intranet";
                        } else {
                            return "for bidden";
                        }
                    });
                }}
            >
                {forWho}
            </h2>
            <div className={style.month}>{month}</div>
        </header>
    );
};

export default Header;
