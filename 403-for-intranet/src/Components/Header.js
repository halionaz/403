import style from "./style/Header.module.css";

const Header = ({ month, setMonth, setModalType, modalType }) => {
    const onClickModal = (e) => {
        if (modalType) {
            setModalType(null);
        } else {
            if(e.target.innerHTML === "⭐ 가점"){
                setModalType("point");
            } else {
                setModalType("vacation");
            }
        }
        console.log(modalType)
    };
    return (
        <header className={style.header}>
            <div className={style.forward}>
                <h1 className={style.h1}>403</h1>
                <h2 className={style.h2}>- for bidden</h2>
            </div>
            <div className={style.month}>{month}월</div>
            <div className={style.backward}>
                <button className={style.point} onClick={onClickModal}>
                    ⭐ 가점
                </button>
                <button className={style.vacation} onClick={onClickModal}>
                    ⛱ 휴가
                </button>
            </div>
        </header>
    );
};

export default Header;
