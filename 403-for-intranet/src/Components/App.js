import { useEffect, useState } from "react";
import Bottom from "./Bottom";
import Contents from "./Contents";
import Header from "./Header";
import Modal from "./Modal";
import "./style/App.css";

function App() {
    const today = new Date();
    const [mainMonth, setMainMonth] = useState(today.getMonth() + 1);
    const [modalType, setModalType] = useState(null);

    useEffect(() => {
        // header 구성
        document.title = "403 Forbidden";
    }, []);

    return (
        <div className="App">
            <Modal type={modalType}></Modal>
            <Header month={mainMonth} setMonth={setMainMonth} setModalType={setModalType} modalType={modalType} />
            <Contents></Contents>
            <Bottom />
        </div>
    );
}

export default App;
