import React from "react";
import css from "../../../styles/dataList.css";

const {DataContainer, ContentLine, ContentCell} = css;

const DataList = (props) => {

    const {data} = props;

    return (
        <React.Fragment>
            <DataContainer>
                    {data.map((item, index) => {

                        return(
                            <ContentLine key={index}>
                                <ContentCell width={"15%"}>{item.split('::')[0]}</ContentCell>
                                <ContentCell width={"15%"}>{item.split('::')[1]}</ContentCell>
                                <ContentCell style={{textAlign:'right'}} width={"70%"}>{item.split('::')[2]}</ContentCell>
                            </ContentLine>
                        )
                    })}
            </DataContainer>
        </React.Fragment>
    )
}

export default DataList;