import React, {useEffect,useState} from "react";
import css from "../../../styles/dataList.css";

const {DataContainer, ContentLine, ContentCell, ButtonsLine, ButtonItem} = css;

const DataList = (props) => {

    const [dataType, setDataType] = useState('общее');

    const {data = []} = props;

    const filteredData = data.filter(item => {
        const parts = item.split('::');
        if (parts.length < 2) return false;

        if (dataType === 'общее') return true;
        return parts[1] === dataType;
    });


    const reduceDataTypeIncome = () => {
        setDataType('доход')
    }
    const reduceDataTypeExpenditure = () => {
        setDataType('расход')
    }
    const reduceDataTypeGeneral = () => {
        setDataType('общее')
    }

    const filteredDataSumm = filteredData.reduce((summ, item) => {
        const parts = item.split('::');
        if (parts.length < 1) return summ;
        const amountString = parts[0];
        const amountParts = amountString.split(' ');
        const amount1 = parseFloat(amountParts[0]) || 0;
        const amount2 = parseFloat(amountParts[1]) || 0;
        if(parts[1] === 'доход'){
            return summ + amount1 + amount2;
        }else if(parts[1] === 'расход'){
            return summ - amount1 - amount2;
        }
    }, 0);


    return (
        <React.Fragment>
            <ButtonsLine>
                <ButtonItem onClick={reduceDataTypeIncome}>доходы</ButtonItem>
                <ButtonItem onClick={reduceDataTypeExpenditure}>расходы</ButtonItem>
                <ButtonItem onClick={reduceDataTypeGeneral}>общее</ButtonItem>
            </ButtonsLine>
            <DataContainer>
                {filteredData.map((item, index) => {
                    return(
                        <ContentLine key={index}>
                            <ContentCell width={"15%"}>{item.split('::')[0]}</ContentCell>
                            <ContentCell width={"15%"}>{item.split('::')[1]}</ContentCell>
                            <ContentCell style={{textAlign:'right'}} width={"70%"}>{item.split('::')[2]}</ContentCell>
                        </ContentLine>

                    )
                })}
            </DataContainer>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <ContentLine>
                    <ContentCell width={"100%"} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        Итого: {filteredDataSumm.toFixed(2)}
                    </ContentCell>
                </ContentLine>
            </div>
        </React.Fragment>
    )
}

export default DataList;