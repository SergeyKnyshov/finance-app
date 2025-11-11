import React from "react";
import DataList from "../views/local/DataList";
import Foot from "../views/global/Foot";


const Stat = (props) =>{

    const {statData} = props;

    return (
        <React.Fragment>
            <DataList data={statData}/>
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Stat;