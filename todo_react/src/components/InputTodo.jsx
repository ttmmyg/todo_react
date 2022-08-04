import React from "react";

const style = {
    backgroundColor: '#c1ffff',
    width: '100%',
    height: '100px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px',
    textAlign: 'center',
    lineHeight: '100px',
};

export const InputTodo = (props) => {
    const { todoText, onChangeTodo, onClickAdd, disabled } = props;
    return (
        <div style={style}>
            <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={ onChangeTodo }/>
            <button disabled={disabled} onClick={onClickAdd}>追加</button>
        </div>
    );
};