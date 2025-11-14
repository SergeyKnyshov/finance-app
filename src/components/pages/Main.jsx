import React, {useState} from "react";
import Foot from '../views/global/Foot'
import css from "../../styles/form.css";
import InputComponent from "../comps/Input";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


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
    const handleChange = (event) => {
        setType(event.target.value);
    };


    return (
        <React.Fragment>
            <FormContainer>
                <InputComponent inputValue={value} action={setValue} params={{placeholder:"Введите сумму транзакции"}}/>
                <FormControl sx={{ width: "100%", textAlign: "left" }}>
                <FormLabel id="demo-controlled-radio-buttons-group">Вид транзакции</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={type}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="доход" control={<Radio />} label="Доход" />
                        <FormControlLabel value="расход" control={<Radio />} label="Расход" />
                    </RadioGroup>
                </FormControl>
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