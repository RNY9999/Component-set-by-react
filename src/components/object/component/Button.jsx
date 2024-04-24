import React from 'react';

/**
 *
 * @param { object } props {
 * type: "buttonのタイプ",
 * class: "cssを適用するクラス名",
 * text: "表示されるボタンのテキスト"
 * }
 * @return
 */
const Button = (props) => {
    //defaultClassName + props.classがbuttonタグのクラス名になる
    const defaultClassName = 'button';
    const combinedClassName = `${defaultClassName} ${props.className}`;
    
    return (
        <button type={props.type} className={combinedClassName}>
            {props.text}
        </button>
    )
}

export default Button
