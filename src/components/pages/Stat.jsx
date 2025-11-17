import React from "react";
import DataList from "../views/local/DataList";
import Foot from "../views/global/Foot";
import DataChart from "../views/local/DataChart";
import {ResponsivePie} from "@nivo/pie";

const Stat = (props) =>{

    const {statData} = props;

    return (
        <React.Fragment>
            <DataList data={statData}/>
            <DataChart data={statData}/>
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Stat;