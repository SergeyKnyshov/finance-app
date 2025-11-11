import React from "react";
import css from "../../../styles/styles.css";
const {HeaderContainer, HeaderCSS} = css;

const buttonCss ={
        display: "block",
        padding: "10px 14px 12px",
        borderRadius: "6px",
        backgroundColor: "#B0F347",
        cursor: "pointer",
        marginLeft: "10px",
}


const Head = (props) =>{

    const {action} = props;

    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>FinManager</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <button onClick={()=>action('main')} style={buttonCss}>Главная</button>
                    <button onClick={()=>action('stat')} style={buttonCss}>Статистика</button>
                    <button onClick={()=>action('plain')} style={buttonCss}>Планирование</button>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Head;