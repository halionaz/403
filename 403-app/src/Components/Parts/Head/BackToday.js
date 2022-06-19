import style from "../../style/BackToday.module.css";

const BackToday = ({ notToday, setHighlight, today }) => {
    return (
        <div
            className={style.modal}
            style={{ display: notToday ? "flex" : "none" }}
            onClick={() => {
                // 오늘로 돌아가는 func
                setHighlight(today);
            }}
        >
            오늘로 돌아가기
        </div>
    );
};

export default BackToday;
