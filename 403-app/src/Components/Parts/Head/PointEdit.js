import style from "../../style/PointEdit.module.css";

const PointEdit = ({ selected, setSelected, selectedEvent }) => {
    return (
        <div
            className={style.PointEditModal}
            style={{ visibility: selected ? "visible" : "hidden" }}
            onClick={() => {
                setSelected(false);
            }}
        >
            <h3 className={style.title}>{selectedEvent?.title}</h3>
        </div>
    );
};

export default PointEdit;
