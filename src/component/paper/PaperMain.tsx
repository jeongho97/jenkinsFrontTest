import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { load } from "../../app/paper";
import PaperDetail from "./PaperDetail";
import PapersList from "./PaperList";
import "../front/gi.css";
const PaperMain = () => {
    const dispatch = useDispatch();
    const [isSelect, setIsSelect] = React.useState(false);
    useEffect(() => {
        dispatch(load());
    }, [dispatch]);
    return !isSelect ? <PapersList setIsSelect={setIsSelect} /> : <PaperDetail setIsSelect={setIsSelect} />;
};
export default PaperMain;
