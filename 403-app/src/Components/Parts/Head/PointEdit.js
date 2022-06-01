import style from "../../style/PointEdit.module.css";

const PointEdit = ({ selected, setSelected }) => {
    return (
        <div
            className={style.PointEditModal}
            style={{ visibility: selected ? "visible" : "hidden" }}
            onClick={() => {
                setSelected(false);
            }}
        ></div>
    );
};

export default PointEdit;
