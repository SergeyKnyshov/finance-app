import React, {useState} from "react";
import css from "../../styles/form.css";

const{Input} = css

const InputComponent = (props) =>{
    const {params} = props;
    const [inputValue, setInputValue] = useState(0);
    return (
        <React.Fragment>
            <Input
                type={"text"}
                placeholder={params.placeholder}
                maxLength={params.maxLength}
                onChange={event => {
                    const newInputValue = event.target.value;
                    setInputValue(newInputValue)
                }}
            />
            <span>{inputValue} руб.</span>
        </React.Fragment>
    )
}

export default InputComponent;