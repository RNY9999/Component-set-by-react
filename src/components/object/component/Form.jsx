import React from 'react';

const Form = (props) => {
    //defaultClassName + props.classがbuttonタグのクラス名になる
    const defaultClassName = 'form';
    const combinedClassName = `${defaultClassName} ${props.className}`;
    const handleUserNameChange = (e) => {
        props.handleInputChange(props.className, e, props.setUserName);
    }
    return (
        <input type={props.type} className={combinedClassName} onChange={handleUserNameChange}/>
    )
}

export default Form
