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
            {selectedEvent?.issued === false && (
                <button className={style.transform} onClick={()=>{
                    selectedEvent.issued = true;
                }}>가점 수령</button>
            )}
        </div>
    );
};

export default PointEdit;
