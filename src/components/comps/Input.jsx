import React from "react";
import css from "../../styles/form.css";

const{Input} = css

const InputComponent = (props) =>{
    const {params, action ,inputValue} = props;
    return (
        <React.Fragment>
            <Input
                value={inputValue}
                type={"text"}
                placeholder={params.placeholder}
                maxLength={params.maxLength}
                onChange={event => {
                    const newInputValue = event.target.value;
                    action(newInputValue);
                }}
            />
        </React.Fragment>
    )
}

export default InputComponent;