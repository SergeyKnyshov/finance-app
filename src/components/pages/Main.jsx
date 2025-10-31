import React from "react";
import Head from '../views/global/Head'
import Foot from '../views/global/Foot'
import css from "../../styles/form.css";
import InputComponent from "../comps/Input";


const {FormContainer, Button} = css;

const Main = () =>{
    return (
        <React.Fragment>
            <Head></Head>
            <FormContainer>
                <InputComponent params={{placeholder:"Введите сумму транзакции"}}/>
                <InputComponent params={{placeholder: "Введите сумму транзакции", maxLength: 50 }}/>
                <InputComponent params={{placeholder:"Введите комментарий"}}/>
                <Button backgroundColor={"rgb(229,229,229)"}>Сохранить транзакцию</Button>
            </FormContainer>
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Main;