import React, {useEffect,useState} from "react";
import css from "../../../styles/dataList.css";

const {DataContainer, ContentLine, ContentCell, ButtonsLine, ButtonItem} = css;

const DataList = (props) => {

    const [dataType, setDataType] = useState('общее');

    const {data = []} = props;

    const filteredData = data.filter(item => item.split('::')[1] === dataType);

    let endedData;
    filteredData.length > 0 ? endedData = filteredData : endedData = data;


    const reduceDataTypeIncome = () => {
        setDataType('доход')
    }
    const reduceDataTypeExpenditure = () => {
        setDataType('расход')
    }
    const reduceDataTypeGeneral = () => {
        setDataType('общее')
    }

    const filteredDataSumm = data.filter(item => item.split('::')[1] === dataType)
        .reduce((summ, item) => {
            summ += +item.split('::')[0]
        }, 0)



    return (
        <React.Fragment>
            <ButtonsLine>
                <ButtonItem onClick={reduceDataTypeIncome}>доходы</ButtonItem>
                <ButtonItem onClick={reduceDataTypeExpenditure}>расходы</ButtonItem>
                <ButtonItem onClick={reduceDataTypeGeneral}>общее</ButtonItem>
            </ButtonsLine>
            <DataContainer>
                {endedData.map((item, index) => {
                    return(
                        <ContentLine key={index}>
                            <ContentCell width={"15%"}>{item.split('::')[0]}</ContentCell>
                            <ContentCell width={"15%"}>{item.split('::')[1]}</ContentCell>
                            <ContentCell style={{textAlign:'right'}} width={"70%"}>{item.split('::')[2]}</ContentCell>
                            <ContentCell width={"15%"}>{filteredDataSumm}</ContentCell>
                        </ContentLine>

                    )
                })}
            </DataContainer>
            <ContentLine>

            </ContentLine>
        </React.Fragment>
    )
}

export default DataList;