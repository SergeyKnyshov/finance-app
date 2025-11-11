import React, {useState} from "react";
import Foot from '../views/global/Foot'
import css from "../../styles/form.css";
import InputComponent from "../comps/Input";
import DataList from "../views/local/DataList";


const {FormContainer, Button} = css;

const Main = (props) =>{

    const [value, setValue] = useState('');
    const[type, setType] = useState('');
    const [comment, setComment] = useState('');
    const {action} = props;


    const handleClick = () => {
        if (String(value).length > 2 && type){
            const dataLine = `${value}::${type}::${comment}`

            action(
                prev => [...prev, dataLine]
            );

            setValue('');
            setType('');
            setComment('');
        }
    }


    return (
        <React.Fragment>
            <FormContainer>
                <InputComponent inputValue={value} action={setValue} params={{placeholder:"Введите сумму транзакции"}}/>
                <InputComponent inputValue={type} action={setType} params={{placeholder: "Введите тип транзакции", maxLength: 50 }}/>
                <InputComponent inputValue={comment} action={setComment} params={{placeholder:"Введите комментарий"}}/>
                <Button backgroundColor={
                    String(value).length > 2 && type ?
                    "rgb(176,243,71)":
                    "rgb(229,229,229)"} onClick={handleClick}>Сохранить транзакцию</Button>
            </FormContainer>
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Main;